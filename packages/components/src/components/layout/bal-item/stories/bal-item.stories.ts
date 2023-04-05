import docs from './bal-item.docs.mdx'
import { BalComponentStory } from '../../../../stories/utils'
import { BalItem } from '../../../../../.storybook/vue/generated/components'

const component = BalComponentStory({
  title: 'Components/Layout/Item',
  component: BalItem,
  // subcomponents: { BalRadio },
  docs,
  argTypes: {},
  args: {},
})

export default component.story

const excludedControls = ['name']

export const Basic = args => ({
  components: {
    ...component.components,
  },
  setup: () => ({ args }),
  template: `
  <bal-item></bal-item>`,
})
Basic.args = {
  value: '1',
}
Basic.parameters = {
  ...component.sourceCode(Basic),
  controls: { exclude: excludedControls },
}
