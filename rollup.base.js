import pkg from './package.json'

import resolve from '@rollup/plugin-node-resolve'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'
import terser from 'rollup-plugin-terser'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

function getAuthors(pkg) {
  const { contributors } = pkg

  const authors = new Set()
  if (contributors && contributors)
    contributors.forEach(contributor => {
      const cs = contributor.split(' ')
      cs.pop()
      cs.pop()
      authors.add(cs.join(' '))
    })

  return Array.from(authors).join(', ')
}

const banner = `/*!
  * Baloise Design System
  * (c) ${new Date().getFullYear()} ${getAuthors(pkg)}
  * @license ${pkg.license}
  */`

export default ({ styleOutput, declarationDir, cleanTargets, input, target, shouldClean } = {}) => ({
  input: input || 'src/index.ts',
  output: [
    {
      dir: target || 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      banner,
      sourcemap: true,
    },
    {
      dir: target || 'dist/',
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'cjs',
      banner,
      sourcemap: true,
    },
  ],
  external: id => {
    return (
      id.startsWith('lodash') ||
      id.startsWith('@baloise') ||
      id.startsWith('cypress') ||
      id.startsWith('vue') ||
      id.startsWith('react')
    )
  },
  plugins: [
    shouldClean !== false ? cleaner({ targets: cleanTargets || ['dist/'] }) : undefined,
    resolve(),
    commonjs(),
    peerDepsExternal(),
    typescript({
      removeComments: true,
      declaration: true,
      declarationDir: declarationDir || 'dist/types',
      outDir: target || 'dist',
    }),
    sass({
      output: styleOutput || 'dist/styles.css',
      options: {
        outputStyle: 'compressed',
        includePaths: [`${__dirname.split('/packages/')[0]}/node_modules/`, 'node_modules/'],
      },
      processor: css =>
        postcss([autoprefixer])
          .process(css, { from: undefined, map: { inline: false } })
          .then(result => result.css),
    }),
    terser.terser(),
  ],
})
