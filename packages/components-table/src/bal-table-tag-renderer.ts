import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community'
import type { Props } from '@baloise/design-system-components'
import isNil from 'lodash.isnil'
import { formatValue } from './utils/format'

interface BalTableTagRendererOptions {
  color?: (params: ICellRendererParams) => Props.BalTagColor
}

export function BalTableTagRenderer(options: BalTableTagRendererOptions): ICellRendererComp {
  function Renderer() {} // eslint-disable-line
  Renderer.prototype.params = {}
  Renderer.prototype.options = options

  Renderer.prototype.init = function (params: ICellRendererParams): void {
    if (params.value != null && params.value !== undefined) {
      this.params = params
      this.element = document.createElement('bal-tag')
      this.element.setAttribute('size', 'small')
      this.element.className = 'bal-table-cell-tag'
      this.update()
    }
  }

  Renderer.prototype.refresh = function (params: ICellRendererParams) {
    this.params = params
    this.update()
    return true
  }

  Renderer.prototype.update = function () {
    this.element.innerHTML = formatValue(this.params.value)

    const color = isNil(options.color) ? '' : options.color(this.params)
    this.element.setAttribute('color', color)
  }

  Renderer.prototype.getGui = function () {
    return this.element
  }

  Renderer.prototype.destroy = function () {} // eslint-disable-line

  return Renderer as any // eslint-disable-line
}
