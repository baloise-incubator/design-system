import { Config } from '@stencil/core'

import { StencilBaseConfig } from './config/stencil.basic.config'

export const config: Config = {
  ...StencilBaseConfig,
  tsconfig: 'tsconfig.docs.json',
  outputTargets: [
    ...(StencilBaseConfig.outputTargets as any),
    {
      type: 'www',
      dir: 'public',
      copy: [
        { src: 'stories/assets/code', dest: 'assets/code', warn: true },
        { src: 'stories/assets/css', dest: 'assets/css', warn: true },
        { src: 'stories/assets/images', dest: 'assets/images', warn: true },
        { src: '../../fonts/lib', dest: 'assets/fonts', warn: true },
        {
          src: '../../components-table/css/design-system-table.css',
          dest: 'assets/css/design-system-table.css',
          warn: true,
        },
        {
          src: '../../fonts/dist/fonts.zip',
          dest: 'assets/download/fonts.zip',
          warn: true,
        },
        {
          src: '../../icons/dist/icons.zip',
          dest: 'assets/download/icons.zip',
          warn: true,
        },
        {
          src: '../../icons/dist/icons.json',
          dest: '../generated/icons.json',
          warn: true,
        },
      ],
    },
  ],
}
