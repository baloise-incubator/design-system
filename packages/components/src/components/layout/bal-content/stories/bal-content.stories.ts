import docs from './bal-content.docs.mdx'
import { BalComponentStory } from '../../../../stories/utils'
import { BalContent } from '../../../../../.storybook/vue/generated/components'

const component = BalComponentStory({
  title: 'Components/Layout/Content',
  component: BalContent,
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
  template: `<bal-content v-bind="args">
  <bal-label>The Content Component</bal-label>
  <bal-text>Content helps to align text nodes inside a section.</bal-text>
</bal-content>`,
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
  direction: '',
  alignment: 'center',
  space: '',
}
Alignment.parameters = { ...component.sourceCode(Alignment), controls: { exclude: excludedControls } }

export const Direction = Template.bind({})
Direction.args = {
  direction: 'row',
  alignment: '',
  space: '',
}
Direction.parameters = { ...component.sourceCode(Direction), controls: { exclude: excludedControls } }

export const Space = args => ({
  components: {
    ...component.components,
  },
  setup: () => ({ args }),
  template: `<div>
  <bal-content>
    <bal-label>Default Space</bal-label>
    <bal-text>Content helps to align text nodes inside a section.</bal-text>
  </bal-content>
  <bal-content space="medium" class="mt-medium">
    <bal-label>Medium Space</bal-label>
    <bal-text>Content helps to align text nodes inside a section.</bal-text>
  </bal-content>
  <bal-content space="large" class="mt-medium">
    <bal-label>Large Space</bal-label>
    <bal-text>Content helps to align text nodes inside a section.</bal-text>
  </bal-content>
</div>`,
})
Space.args = {}
Space.parameters = {
  ...component.sourceCode(Space),
  controls: { exclude: excludedControls },
}
