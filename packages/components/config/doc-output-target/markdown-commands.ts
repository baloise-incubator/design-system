import { MarkdownTable } from './docs-util'
import { WHITESPACE, SPACE } from './constants'

export interface TestingCommand {
  name: string
  description: string[]
  signature: string
  path: string
  component: string
}

export const commandsToMarkdown = (commands: TestingCommand[] = []) => {
  const content: string[] = []
  if (commands.length === 0) {
    return content
  }

  content.push(`### Custom Commands`)
  content.push(WHITESPACE)
  content.push(`A list of the custom commands for this specific component.`)
  content.push(WHITESPACE)

  const table = new MarkdownTable()

  table.addHeader(['Command', 'Description', 'Signature'])

  commands.forEach(command => {
    const signature = command.signature
      .split(',\n      ')
      .join(', ')
      .split(',\n    )')
      .join(')')
      .split('(\n      ')
      .join('(')

    table.addRow([`\`${command.name}\``, command.description.join(SPACE), `\`${signature}\``])
  })

  content.push(...table.toMarkdown())
  content.push(WHITESPACE)

  return content
}
