import { Component, h, ComponentInterface, Host, Element } from '@stencil/core'
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json'

@Component({
  tag: 'bal-doc-tokens-colors',
})
export class DocTokensColors implements ComponentInterface {
  @Element() el!: HTMLElement

  render() {
    const color = tokens.color as any
    const colors = []
    const validColors = [
      'primary',
      'black',
      'white',
      'grey',
      'light-blue',
      'purple',
      'green',
      'red',
      'yellow',
      'success',
      'warning',
      'danger',
    ]
    for (const k of validColors) {
      colors.push({
        name: k,
        value: color[k],
      })
    }

    return (
      <Host>
        <bal-doc-app>
          <table class="table tokens" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ minWidth: '200px' }}>Example</th>
                <th>Description</th>
                <th style={{ minWidth: '220px' }}>Token</th>
              </tr>
            </thead>
            {colors.map(c => (
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>
                    <div class={`has-background-${c.name} p-x-small mb-x-small has-radius-normal`}>
                      <p class={`title is-size-large has-text-${c.name}-inverted`}>Aa</p>
                      <p class={`mt-none mb-xx-small is-size-small has-text-${c.name}-inverted`}>{c.value.hex}</p>
                      <p class={`m-none is-size-small has-text-${c.name}-inverted`}>{hexToRgbA(c.value.hex)}</p>
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <p class="has-text-weight-bold is-size-large mt-none mb-xx-small">{c.name}</p>
                    <p class="m-none is-size-small">{c.value.description}</p>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <p class="mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold">
                      var(--bal-color-{c.name})
                    </p>
                    <p class="m-none is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal">
                      ${c.name}
                    </p>
                  </td>
                </tr>
                {c.name !== 'black' && c.name !== 'white' ? (
                  <tr>
                    <td colSpan={3}>
                      <p class="has-text-weight-bold is-size-normal">Shades</p>
                      <span class="is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold">
                        var(--bal-color-{c.name}-x)
                      </span>
                      <div class="is-flex fg-x-small mt-x-small">
                        <div class={`has-background-${c.name}-1 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-1-inverted has-text-weight-bold`}>1</span>
                        </div>
                        <div class={`has-background-${c.name}-2 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-2-inverted has-text-weight-bold`}>2</span>
                        </div>
                        <div class={`has-background-${c.name}-3 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-3-inverted has-text-weight-bold`}>3</span>
                        </div>
                        <div class={`has-background-${c.name}-4 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-4-inverted has-text-weight-bold`}>4</span>
                        </div>
                        <div class={`has-background-${c.name}-5 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-5-inverted has-text-weight-bold`}>5</span>
                        </div>
                        <div class={`has-background-${c.name}-6 has-radius-normal p-x-small is-flex-grow-1`}>
                          <span class={`has-text-${c.name}-6-inverted has-text-weight-bold`}>6</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  ''
                )}

                <tr>
                  <td colSpan={3} class="pb-large"></td>
                </tr>
              </tbody>
            ))}
          </table>
        </bal-doc-app>
      </Host>
    )
  }
}

function hexToRgbA(hex: string) {
  let c: any
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
  }
  throw new Error('Bad Hex')
}
