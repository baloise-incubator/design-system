import { FunctionalComponent, h } from '@stencil/core'
import { BEM } from '../../../utils/bem'

export interface LargeControlProps {
  isFirst: boolean
  isLast: boolean
  inverted: boolean
  areControlsHidden: boolean
  onPreviousClick: () => void
  onNextClick: () => void
}

export const LargeControl: FunctionalComponent<LargeControlProps> = ({
  isFirst,
  isLast,
  inverted,
  areControlsHidden,
  onNextClick,
  onPreviousClick,
}) => {
  const block = BEM.block('carousel')
  const controls = block.element('controls')
  const button = controls.element('button')

  return (
    <div
      class={{
        ...controls.class(),
        ...controls.modifier('large').class(),
      }}
    >
      <bal-button
        class={{
          ...button.class(),
          ...button.modifier('left').class(),
          ...button.modifier('hidden').class(isFirst && areControlsHidden),
        }}
        square
        icon="nav-go-left"
        rounded
        inverted={inverted}
        onClick={() => onPreviousClick()}
        disabled={isFirst}
      ></bal-button>
      <bal-button
        class={{
          ...button.class(),
          ...button.modifier('right').class(),
          ...button.modifier('hidden').class(isLast && areControlsHidden),
        }}
        square
        icon="nav-go-right"
        rounded
        inverted={inverted}
        onClick={() => onNextClick()}
        disabled={isLast}
      ></bal-button>
    </div>
  )
}
