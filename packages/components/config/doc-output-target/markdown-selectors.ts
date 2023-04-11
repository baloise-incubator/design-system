import { MarkdownTable } from './docs-util'

export const selectorsToMarkdown = (selectorsList: any, componentName: string) => {
  const selectors = selectorsList.selectors
  const content: string[] = []

  if (selectors.length === 0) {
    return content
  }

  content.push(`### Component Element Selectors`)
  content.push(``)

  const table = new MarkdownTable()

  table.addHeader(['Selector', 'Element'])
  selectors.forEach(prop => {
    table.addRow([componentName + '.' + prop.selector, prop.description])
  })
  content.push(...table.toMarkdown())
  content.push(``)
  content.push(``)

  return content
}
