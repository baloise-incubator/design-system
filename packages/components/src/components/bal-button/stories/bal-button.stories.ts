import { BalComponentStory, withContent } from '../../../stories/utils'
import { BalButton } from '../../../../.storybook/vue/components'
import docs from './bal-button.docs.mdx'

const component = BalComponentStory({
  component: BalButton,
  argTypes: {
    ...withContent(),
  },
  docs,
})

export default component.story

const Template = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-button v-bind="args">{{ args.content }}</bal-button>`,
})

export const Primary = Template.bind({})
Primary.args = {
  content: 'Primary',
}
Primary.parameters = { ...component.sourceCode(Primary) }

export const Secondary = Template.bind({})
Secondary.args = {
  content: 'Secondary',
  color: 'link',
}

export const Link = Template.bind({})
Link.args = {
  content: 'Link',
  color: 'link',
}

export const Square = Template.bind({})
Square.args = {
  content: '',
  color: 'info',
  icon: 'edit',
  square: true,
  outlined: true,
}
