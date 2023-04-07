import { MarkdownTable } from './docs-util'

export const selectorsToMarkdown = (selectorsList: any, componentName: string) => {
  const selectors = selectorsList.selectors
  const content: string[] = []

  if (selectors.length === 0) {
    return content
  }

  content.push(`### Custom Selectors`)
  content.push(``)

  const table = new MarkdownTable()

  table.addHeader(['Selector', 'Element'])
  selectors.forEach(prop => {
    table.addRow([componentName + '.' + prop, selectorsList.description])
  })

  content.push(...table.toMarkdown())
  content.push(``)
  content.push(``)

  return content
}
