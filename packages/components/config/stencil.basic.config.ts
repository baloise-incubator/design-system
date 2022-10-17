import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import fg from 'fast-glob'
import { resolve } from 'path'

import { VueGenerator } from './stencil.bindings.vue'

export const StencilBaseConfig: Config = {
  namespace: 'design-system-next-components',
  globalStyle: 'src/styles/global.sass',
  globalScript: 'src/global.ts',
  watchIgnoredRegex: [/\.stories\.(js|jsx|ts|tsx|mdx)$/, /\/stories\//], // ignore storybook files in --watch mode
  enableCache: true,
  sourceMap: true,
  autoprefixCss: true,
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true,
    safari10: false,
  },
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-json',
      file: './src/stories/assets/data/components.json',
    },
    VueGenerator('../..', './.storybook/vue/components.ts', []),
  ],
  rollupPlugins: {
    before: [
      {
        name: 'watch-external',
        async buildStart() {
          const styleFiles = await fg(resolve(__dirname, './src/**/*.sass'))
          for (const file of styleFiles) {
            this.addWatchFile(file)
          }
        },
      },
    ],
  },
  testing: {
    rootDir: 'src',
    modulePathIgnorePatterns: ['cypress'],
  },
}
