import docs from './bal-time-input.docs.mdx'
import { BalComponentStory, stencilArgType } from '../../../../stories/utils'
import {
  BalTimeInput,
  BalField,
  BalFieldControl,
  BalFieldLabel,
  BalFieldMessage,
} from '../../../../../.storybook/vue/generated/components'
import { configArgTypes, configDefaultArgs, reduceConfigArgs, setConfig } from '../../../../stories/utils/config'

const balFieldArgTypes = stencilArgType(BalField)

const component = BalComponentStory({
  title: 'Components/Form/Time Input',
  component: BalTimeInput,
  argTypes: {
    invalid: balFieldArgTypes.invalid,
    hasFieldMessage: {
      description: 'Show a hint or validation message below the control',
      table: {
        category: 'custom',
      },
    },
    ...configArgTypes,
  },
  args: {
    ...configDefaultArgs,
    invalid: false,
    hasFieldMessage: true,
  },
  docs,
})

export default component.story

const excludedControls = ['name']

export const Basic = args => ({
  components: {
    ...component.components,
    BalField,
    BalFieldControl,
    BalFieldLabel,
    BalFieldMessage,
  },
  setup: () => {
    setConfig(args)
    return {
      args: reduceConfigArgs(args),
    }
  },
  template: `<bal-time-input v-bind="args" v-model="args.value"></bal-time-input>`,
})
Basic.args = {
  placeholder: 'Enter a time',
  inverted: false,
  disabled: false,
  invalid: false,
}
Basic.parameters = {
  ...component.sourceCode(Basic),
  controls: {
    exclude: excludedControls,
  },
}
