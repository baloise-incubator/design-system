/**
 * Web Types
 * --------------------------------------
 * Generates helper json files for better ide support.
 */

const fs = require('fs')
const { pascalCase } = require('change-case')
const libraryLib = require('./utils/components.lib')
const log = require('./utils/log')

async function main() {
  log.title('vue - generate web types')

  const docsComponents = await libraryLib.components()

  const components = []

  docsComponents.forEach(component => {
    const attributes = []
    const slots = []
    const events = []
    const componentName = pascalCase(component.tag)
    const docUrl = 'https://baloise-design.vercel.app/#/components/' + component.tag + '/readme'

    for (const prop of component.props || []) {
      attributes.push({
        name: prop.attr || prop.name,
        description: prop.docs,
        required: prop.required,
        default: prop.default,
        value: {
          kind: 'expression',
          type: prop.type,
        },
      })
    }

    for (const event of component.events || []) {
      let eventName = event.event
      if (eventName.toLowerCase().startsWith(componentName.toLowerCase())) {
        eventName = 'on' + eventName.substr(componentName.length)
      }
      events.push({
        name: eventName,
        description: event.docs,
        arguments: [
          {
            name: 'detail',
            type: event.detail,
          },
        ],
      })
    }

    for (const slot of component.slots || []) {
      slots.push({
        name: slot.name === '' ? 'default' : slot.name,
        description: slot.docs,
      })
    }

    components.push({
      'name': componentName,
      'doc-url': docUrl,
      'description': component.docs,
      'source': {
        module:
          '@baloise/design-system-components/' +
          component.filePath.replace('./src/', 'dist/types/').replace('.tsx', '.d.ts'),
        symbol: componentName.substr(3),
      },
      attributes,
      slots,
      events,
    })
  })

  const webTypes = {
    $schema: 'http://json.schemastore.org/web-types',
    framework: 'vue',
    name: '@baloise/design-system-components-vue',
    version: require('../package.json').version,
    contributions: {
      html: {
        'types-syntax': 'typescript',
        'description-markup': 'markdown',
        'tags': components,
      },
    },
  }

  fs.writeFileSync('dist/web-types.json', JSON.stringify(webTypes, null, 2))
}

main()
