import { Config } from '@stencil/core'
import { resolve } from 'path'
import fg from 'fast-glob'
import { StencilBaseConfig } from './.build/stencil/stencil.basic.config'
import { VueGenerator } from './.build/stencil/stencil.bindings.vue'

let outputTargets = []
if (process.env.STORYBOOK_MODE === 'prod') {
  outputTargets = [VueGenerator('../../dist/components', './.storybook/vue/components.ts', true)]
} else if (process.env.STORYBOOK_MODE === 'dev') {
  outputTargets = [
    {
      type: 'docs-json',
      file: './generated/components.json',
    },
    VueGenerator('../../public/build/design-system-next-components.esm.js', './.storybook/vue/components.ts', false),
  ]
} else {
  outputTargets = [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-json',
      file: './generated/components.json',
    },
    VueGenerator('../../dist/components', './.storybook/vue/components.ts', true),
  ]
}

export const config: Config = {
  ...StencilBaseConfig,
  outputTargets: [
    ...outputTargets,
    {
      type: 'www',
      dir: 'public',
      copy: [
        { src: 'stories/assets/css', dest: 'assets/css', warn: true },
        { src: 'stories/assets/images', dest: 'assets/images', warn: true },
        { src: '../../fonts/lib', dest: 'assets/fonts', warn: true },
        { src: '../../components-table/css/design-system-table.css', dest: 'assets/css/design-system-table.css', warn: true },
        { src: '../../fonts/generated/fonts.zip', dest: 'assets/download/fonts.zip', warn: true },
        { src: '../../icons/generated/icons.zip', dest: 'assets/download/icons.zip', warn: true },
        { src: '../../icons/generated/icons.json', dest: '../generated/icons.json', warn: true },
      ],
    },
  ],
  rollupPlugins: {
    before: [
      {
        name: 'watch-external',
        async buildStart() {
          const styleFiles = await fg(resolve(__dirname, './src/styles/**/*.scss'))
          for (let file of styleFiles) {
            this.addWatchFile(file)
          }
        },
      },
    ],
  },
}
