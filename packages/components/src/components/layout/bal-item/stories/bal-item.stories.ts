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

const excludedControls = []

const Template = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-item v-bind="args">
  <bal-icon name="date" size="medium"></bal-icon>
  <bal-content>
    <bal-label>My Item</bal-label>
    <bal-text>Item is used to easaly group components and not be concered about the correct spacing.</bal-text>
  </bal-content>
  <bal-button>Button</bal-button>
</bal-item>`,
})

export const Basic = Template.bind({})
Basic.args = {
  direction: '',
  alignment: '',
  space: '',
}
Basic.parameters = { ...component.sourceCode(Basic), controls: { exclude: excludedControls } }

export const Alignment = Template.bind({})
Alignment.args = {
  direction: 'column',
  alignment: 'center',
  space: '',
}
Alignment.parameters = { ...component.sourceCode(Alignment), controls: { exclude: excludedControls } }

export const Direction = Template.bind({})
Direction.args = {
  direction: 'column',
  alignment: '',
  space: '',
}
Direction.parameters = { ...component.sourceCode(Direction), controls: { exclude: excludedControls } }
