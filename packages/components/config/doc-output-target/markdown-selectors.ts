// import type * as d from '@stencil/core/internal'
import { MarkdownTable } from './docs-util'

export const selectorsToMarkdown = (selectorsList: any[]) => {
  const selectors = Object.entries(selectorsList).map(entry => {
    return { [entry[0]]: entry[1] }
  })

  const content: string[] = []

  if (selectors.length === 0) {
    return content
  }

  content.push(`### Custom Selectors`)
  content.push(``)

  const table = new MarkdownTable()

  table.addHeader(['Selector', 'Element'])
  console.log('selectors MAA ', selectors)
  selectors.forEach(prop => {
    table.addRow([
      prop[0],
      prop[1],
      // getPropertyField(prop),
      // getAttributeField(prop),
      // getDocsField(prop),
      // getPropertyType(prop),
      // `\`${prop.default}\``,
    ])
  })

  content.push(...table.toMarkdown())
  content.push(``)
  content.push(``)

  return content
}

// const getPropertyType = (prop: d.JsonDocsProp) => {
//   if (prop.type.indexOf('|') >= 0) {
//     return prop.type
//       .split('|')
//       .map(t => `\`${t}\``)
//       .join(', ')
//   }
//   return `\`${prop.type}\``
// }

// const getPropertyField = (prop: d.JsonDocsProp) => {
//   return `\`${prop.name}\`${prop.required ? ' _(required)_' : ''}`
// }

// const getAttributeField = (prop: d.JsonDocsProp) => {
//   return prop.attr ? `\`${prop.attr}\`` : '--'
// }

// const getDocsField = (prop: d.JsonDocsProp) => {
//   return `${
//     prop.deprecation !== undefined
//       ? `<span style="color:red">**[DEPRECATED]**</span> ${prop.deprecation}<br/><br/>`
//       : ''
//   }${prop.docs}`
// }
