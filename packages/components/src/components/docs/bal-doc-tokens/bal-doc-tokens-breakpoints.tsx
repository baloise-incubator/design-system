import { Component, h, ComponentInterface, Host, Element } from '@stencil/core'
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json'

@Component({
  tag: 'bal-doc-tokens-breakpoints',
})
export class DocTokensBreakpoints implements ComponentInterface {
  @Element() el!: HTMLElement

  render() {
    const breakpoint = tokens.breakpoint as any
    const sizes = []
    for (const k in breakpoint) {
      sizes.push({
        name: k,
        value: breakpoint[k],
      })
    }
    return (
      <Host>
        <bal-doc-app>
          <table class="table tokens" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ minWidth: '200px' }}>Token</th>
                <th style={{ minWidth: '100px' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ verticalAlign: 'top' }}>
                  <p class="has-text-weight-bold is-size-large mt-none mb-x-small">mobile</p>
                </td>
                <td style={{ verticalAlign: 'top' }}></td>
                <td style={{ verticalAlign: 'top' }}>
                  <span class={`has-text-weight-bold is-size-small`}>0px</span>
                </td>
              </tr>
              {sizes.map(c => (
                <tr>
                  <td style={{ verticalAlign: 'top' }}>
                    <p class="has-text-weight-bold is-size-large mt-none mb-x-small">{c.name}</p>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <p class="mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold">
                      var(--bal-breakpoint-{c.name})
                    </p>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <p class={`has-text-weight-bold is-size-small py-xx-small`}>{c.value}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </bal-doc-app>
      </Host>
    )
  }
}
