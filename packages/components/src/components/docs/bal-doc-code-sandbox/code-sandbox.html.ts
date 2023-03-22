import { getParameters } from 'codesandbox/lib/api/define'
import { loadSourceFiles, parseMarkdown } from './code-sandbox.util'

interface HtmlProject {
  template: string
  component: string
  fullscreen: boolean
}

export const buildHtmlParameters = async (project: HtmlProject): Promise<string> => {
  const [index_html, index_ts, example_ts, package_json, tsconfig_json] = await loadSourceFiles([
    'html/index.html',
    'html/index.ts',
    'html/example.ts',
    'html/package.json',
    'html/tsconfig.json',
  ])

  const parseTemplate = (content: string) => `<html>
  <body>
    <bal-app>
      <main ${!project.fullscreen ? 'class="container py-large"' : ''}>

${content}

      </main>
    </bal-app>
  </body>
</html>`

  let example_component = example_ts
  let example_template = index_html

  if (project.component) {
    example_component = parseMarkdown(project.component)
  }

  if (project.template) {
    example_template = parseTemplate(parseMarkdown(project.template))
  }

  example_component = `${example_component}

${index_ts}`

  return getParameters({
    files: {
      'package.json': {
        isBinary: false,
        content: {
          dependencies: {
            '@baloise/design-system-components': 'latest',
          },
        } as any,
      },
      'index.js': {
        isBinary: false,
        content: example_component.trim(),
      },
      'index.html': {
        isBinary: false,
        content: example_template.trim(),
      },
    },
  })
}
