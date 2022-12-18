import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import sdk from '@stackblitz/sdk'
import { logo } from './angular'

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Baloise Design System Example'
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = ''
// Default package version to use for all @ionic/* packages.
const DEFAULT_BALOISE_VERSION = '^12.0.0'

@Component({
  tag: 'bal-doc-stackblitz',
  styleUrl: 'bal-doc-stackblitz.sass',
})
export class DocStackblitz implements ComponentInterface {
  @Element() el!: HTMLElement

  @Prop() template!: string
  @Prop() component!: string

  openProject = async () => {
    const [
      main_ts,
      app_module_ts,
      app_component_ts,
      app_component_css,
      app_component_html,
      example_component_ts,
      styles_css,
      angular_json,
      tsconfig_json,
    ] = await this.loadSourceFiles([
      'angular/main.ts',
      'angular/app.module.ts',
      'angular/app.component.ts',
      'angular/app.component.css',
      'angular/app.component.html',
      'angular/example.component.ts',
      'angular/styles.css',
      'angular/angular.json',
      'angular/tsconfig.json',
    ])

    const example_component_html = this.template
      ? this.parseMarkdown(this.template)
      : '<h1 class="title is-size-xxx-large">Hello World</h1>'

    const new_example_component_ts = this.component ? this.parseMarkdown(this.component) : example_component_ts

    sdk.openProject(
      {
        template: 'angular-cli',
        title: DEFAULT_EDITOR_TITLE,
        description: DEFAULT_EDITOR_DESCRIPTION,
        files: {
          'src/main.ts': main_ts,
          'src/polyfills.ts': `import 'zone.js/dist/zone';`,
          'src/app/app.module.ts': app_module_ts,
          'src/app/app.component.ts': app_component_ts,
          'src/app/app.component.html': app_component_html,
          'src/app/example.component.ts': new_example_component_ts,
          'src/app/example.component.html': example_component_html,
          'src/app/example.component.css': '',
          'src/app/app.component.css': app_component_css,
          'src/index.html': '<app-root></app-root>',
          'src/styles.css': styles_css,
          'angular.json': angular_json,
          'tsconfig.json': tsconfig_json,
        },
        dependencies: {
          '@baloise/design-system-components': DEFAULT_BALOISE_VERSION,
          '@baloise/design-system-components-angular': DEFAULT_BALOISE_VERSION,
        },
      },
      {
        openFile: ['src/app/example.component.ts', 'src/app/example.component.html'],
        showSidebar: false,
      },
    )
  }

  parseMarkdown = (content: string) => {
    const lines = content.split('\n')
    lines.splice(0, 1)
    return lines.join('\n').replace('```', '')
  }

  loadSourceFiles = async (files: string[]) => {
    const sourceFiles = await Promise.all(files.map(f => fetch(`/assets/code/${f}`)))
    return await Promise.all(sourceFiles.map(res => res.text()))
  }

  render() {
    return (
      <Host class="bal-doc-stackblitz">
        <bal-doc-app>
          <bal-button-group>
            <bal-button color="danger" onClick={this.openProject}>
              <div class="is-flex">
                <div innerHTML={logo} style={{ width: '24px', height: '24px' }}></div>
                Angular Example
              </div>
            </bal-button>
          </bal-button-group>
        </bal-doc-app>
      </Host>
    )
  }
}
