import { Config } from '@stencil/core'
import { StencilBaseConfig } from './.build/stencil/stencil.basic.config'

export const config: Config = {
  ...StencilBaseConfig,
  outputTargets: [
    {
      type: 'custom',
      name: 'log-output-library',
      async generator(config, compilerCtx, buildCtx) {
        buildCtx.components.forEach(component => {
          if (component.tagName === 'bal-datepicker') {
            console.log('PROPS')
            component.properties.forEach(prop => {
              console.log(prop.name)
              console.log(prop.type)
              console.log(prop.complexType)
              console.log('--------------')
            })

            console.log('')
            console.log('EVENTS')
            component.events.forEach(ev => {
              console.log(ev.name)
              console.log(ev.method)
              console.log(ev.complexType)
              console.log('--------------')
            })
          }
        })
      },
    },
  ],
}
