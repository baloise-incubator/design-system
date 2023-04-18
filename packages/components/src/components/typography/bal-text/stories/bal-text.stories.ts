import docs from './bal-text.docs.mdx'
import { BalComponentStory, withContent } from '../../../../stories/utils'
import { BalText } from '../../../../../.storybook/vue/generated/components'

const component = BalComponentStory({
  title: 'Components/Typography/Text',
  component: BalText,
  argTypes: {
    ...withContent(),
  },
  docs,
})

export default component.story

const Template = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-text v-bind="args">{{ args.content }}</bal-text>`,
})

export const Basic = Template.bind({})
Basic.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  color: '',
  size: '',
  bold: false,
  paragraph: false,
}
Basic.parameters = { ...component.sourceCode(Basic) }
