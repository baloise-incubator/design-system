import type * as d from '@stencil/core/internal'
import { MarkdownTable } from './docs-util'

export const eventsToMarkdown = (events: d.JsonDocsEvent[]) => {
  const content: string[] = []
  if (events.length === 0) {
    return content
  }

  content.push(`#### Events`)
  content.push(``)
  content.push(
    `Follow the [Event Usage](https://baloise-design.vercel.app/?path=/docs/implementation-event--page) guide to learn how to listen to component events.`,
  )
  content.push(``)

  const table = new MarkdownTable()

  table.addHeader(['Event', 'Description', 'Type'])

  events.forEach(ev => {
    table.addRow([`\`${ev.event}\``, getDocsField(ev), `\`CustomEvent<${ev.detail}>\``])
  })

  content.push(...table.toMarkdown())
  content.push(``)
  content.push(``)

  return content
}

const getDocsField = (prop: d.JsonDocsEvent) => {
  return `${
    prop.deprecation !== undefined
      ? `<span style="color:red">**[DEPRECATED]**</span> ${prop.deprecation}<br/><br/>`
      : ''
  }${prop.docs}`
}
