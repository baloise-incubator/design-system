import { MarkdownTable } from './docs-util'
import testingSelectors from '../../public/assets/data/selectors.json'

export const selectorsToMarkdown = (selectorsList: any[], componentName: string) => {
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
  selectors.forEach(prop => {
    table.addRow([componentName + '.' + Object.keys(prop)[0], testingSelectors[0][componentName].description])
  })

  content.push(...table.toMarkdown())
  content.push(``)
  content.push(``)

  return content
}
