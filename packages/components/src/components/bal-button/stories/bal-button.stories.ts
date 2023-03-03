import { BalComponentStory, stencilArgType } from '../../../stories/utils'
import { BalButton, BalButtonGroup } from '../../../../.storybook/vue/generated/components'
import docs from './bal-button.docs.mdx'

const balCheckboxGroupArgTypes = stencilArgType(BalButtonGroup)

const component = BalComponentStory({
  component: BalButton,
  docs,
  argTypes: {
    groupDirection: balCheckboxGroupArgTypes.direction,
    groupPosition: balCheckboxGroupArgTypes.position,
  },
  args: {
    content: 'Primary',
    color: 'primary',
    icon: '',
    size: '',
    disabled: false,
    loading: false,
    inverted: false,
    expanded: false,
    square: false,
  },
})

export default component.story

const excludedControls = ['bottomRounded', 'download', 'isActive', 'name', 'rel', 'target', 'topRounded', 'value']

const Template = args => ({
  components: { ...component.components },
  template: `<bal-button v-bind="args">{{ args.content }}</bal-button>`,
  setup: () => ({ args }),
})

export const Basic = Template.bind({})
Basic.args = {
  content: 'Primary',
  icon: 'plus',
}
Basic.parameters = {
  ...component.sourceCode(Basic),
  controls: { exclude: excludedControls },
}

export const ButtonVariants = args => ({
  components: { ...component.components, BalButtonGroup },
  setup: () => ({ args }),
  template: `<bal-button-group :direction="args.groupDirection" :position="args.groupPosition">
  <bal-button v-bind="args">Primary</bal-button>
  <bal-button v-bind="args" color="info">Secondary</bal-button>
  <bal-button v-bind="args" color="info" outlined>Tertiary</bal-button>
  <bal-button v-bind="args" color="link">Link</bal-button>
</bal-button-group>`,
})
ButtonVariants.args = {
  groupDirection: 'column',
  groupPosition: 'center',
}
ButtonVariants.parameters = {
  ...component.sourceCode(ButtonVariants),
  controls: { exclude: [...excludedControls, 'color', 'expanded', 'href'] },
}

export const ButtonStates = args => ({
  components: { ...component.components, BalButtonGroup },
  setup: () => ({ args }),
  template: `<bal-button-group>
  <bal-button loading>Loading</bal-button>
  <bal-button disabled>Disabled</bal-button>
</bal-button-group>`,
})
ButtonStates.parameters = {
  ...component.sourceCode(ButtonStates),
  controls: { exclude: [...excludedControls, 'color', 'expanded', 'href'] },
}

export const AlertButtons = args => ({
  components: { ...component.components, BalButtonGroup },
  setup: () => ({ args }),
  template: `<bal-button-group>
  <bal-button v-bind="args" color="info-light">Info</bal-button>
  <bal-button v-bind="args" color="success">Success</bal-button>
  <bal-button v-bind="args" color="warning">Warning</bal-button>
  <bal-button v-bind="args" color="danger">Danger</bal-button>
</bal-button-group>`,
})
AlertButtons.parameters = {
  ...component.sourceCode(AlertButtons),
  controls: { exclude: [...excludedControls, 'color', 'expanded', 'href'] },
}

export const SquareButtons = args => ({
  components: { ...component.components, BalButtonGroup },
  setup: () => ({ args }),
  template: `<bal-button-group>
  <bal-button v-bind="args" icon="plus"></bal-button>
  <bal-button v-bind="args" color="info" icon="account"></bal-button>
  <bal-button v-bind="args" color="info" outlined>42</bal-button>
</bal-button-group>`,
})
SquareButtons.args = {
  square: true,
}
SquareButtons.parameters = {
  ...component.sourceCode(SquareButtons),
  controls: { exclude: [...excludedControls, 'color', 'expanded', 'href'] },
}

export const ButtonGroup = args => ({
  components: { ...component.components, BalButtonGroup },
  setup: () => ({ args }),
  template: `<bal-button-group>
  <bal-button v-bind="args" color="link">Left</bal-button>
  <bal-button v-bind="args">Aligned</bal-button>
</bal-button-group>
<bal-button-group position="center">
  <bal-button v-bind="args" color="link">Center</bal-button>
  <bal-button v-bind="args">Aligned</bal-button>
</bal-button-group>
<bal-button-group position="right">
  <bal-button v-bind="args" color="link">Right</bal-button>
  <bal-button v-bind="args">Aligned</bal-button>
</bal-button-group>`,
})
ButtonGroup.parameters = {
  ...component.sourceCode(ButtonGroup),
  controls: { exclude: [...excludedControls, 'color', 'expanded', 'href'] },
}

export const Link = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-button v-bind="args">Link</bal-button>`,
})
Link.args = {
  color: 'link',
  flat: false,
  inverted: false,
  iconRight: 'plus',
}
Link.parameters = { ...component.sourceCode(Link), controls: { exclude: excludedControls } }

export const NativeButton = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `
<div class="buttons p-small">
  <button class="button is-primary">Primary</button>
  <button class="button is-info">Secondary</button>
  <button class="button is-text">Text</button>
  <button class="button is-link">Link</button>
  <button class="button is-light">Light</button>
  <button class="button is-success">S5s</button>
  <button class="button is-warning">W5g</button>
  <button class="button is-danger">D4r</button>
  <button class="button is-disabled">Disabled</button>
</div>
<div class="buttons has-background-primary p-small">
  <button class="button is-inverted is-primary">Primary</button>
  <button class="button is-inverted is-info">Secondary</button>
  <button class="button is-inverted is-text">Text</button>
  <button class="button is-inverted is-link"><span>Link</span></button>
  <button class="button is-inverted is-light">Light</button>
  <button class="button is-inverted is-success">S5s</button>
  <button class="button is-inverted is-warning">W5g</button>
  <button class="button is-inverted is-danger">D4r</button>
  <button class="button is-inverted is-disabled">Disabled</button>
</div>
`,
})
NativeButton.args = {}
NativeButton.parameters = { ...component.sourceCode(NativeButton), controls: { exclude: excludedControls } }

export const NativeLink = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `
<div class="columns m-none">
  <div class="column">
      <a class="is-link">Link</a>
  </div>
  <div class="column has-background-primary">
      <a class="is-link is-inverted">Link</a>
  </div>
</div>`,
})
NativeLink.args = {}
NativeLink.parameters = { ...component.sourceCode(NativeLink), controls: { exclude: excludedControls } }
