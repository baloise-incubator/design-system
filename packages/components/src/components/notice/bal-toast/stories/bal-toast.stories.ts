import { BalComponentStory } from '../../../../stories/utils'
import { BalToast, BalButton } from '../../../../../.storybook/vue/components'
import { balToastController } from '../../../../../dist/'
import docs from './bal-toast.docs.mdx'

const component = BalComponentStory({
  title: 'Components/Notice/Toast',
  component: BalToast,
  status: 'stable',
  args: {
    message: '<b>Message: </b>Hello World Hello World Hello World Hello World Hello World Hello World Hello World',
    duration: 2000,
    color: '',
  },
  docs,
  layout: 'fullscreen',
})

export default component.story

const Template = args => ({
  components: { ...component.components, BalButton },
  setup: () => ({
    args,
    openToast: () => balToastController.create(args),
  }),
  template: `<bal-button @click="openToast" class="m-4">Trigger a Toast</bal-button>`,
})

export const Basic = Template.bind({})
Basic.args = {
  color: 'warning',
}
