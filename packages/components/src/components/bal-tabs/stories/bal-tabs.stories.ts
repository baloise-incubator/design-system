import docs from './bal-tabs.docs.mdx'
import { BalComponentStory } from '../../../stories/utils'
import { BalTabs, BalTabItem } from '../../../../.storybook/vue/components'

const component = BalComponentStory({
  component: BalTabs,
  subcomponents: { BalTabItem },
  docs,
})

export default component.story

export const Basic = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<div class="container"><bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item value="tab-a" label="Tab A">Content of Tab A</bal-tab-item>
  <bal-tab-item value="tab-b" label="Tab B">Content of Tab B</bal-tab-item>
  <bal-tab-item bubble value="tab-c" label="Tab C">Content of Tab C</bal-tab-item>
  <bal-tab-item value="tab-d" label="Tab D" hidden>Hidden Content of Tab D</bal-tab-item>
  <bal-tab-item value="tab-e" label="Tab E" disabled>Content of Tab E</bal-tab-item>
  <bal-tab-item value="tab-f" label="Tab F">Content of Tab F</bal-tab-item>
</bal-tabs></div>`,
})
Basic.args = {
  interface: 'tabs',
  value: 'tab-b',
  border: true,
  fullwidth: true,
  expanded: false,
  vertical: false,
  selectOnMobile: false,
}
Basic.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(Basic),
  controls: { exclude: ['clickable'] },
}

export const Vertical = Basic.bind({})
Vertical.args = {
  interface: 'tabs',
  value: 'tab-b',
  border: true,
  fullwidth: true,
  expanded: false,
  vertical: true,
  selectOnMobile: false,
}
Vertical.parameters = {
  ...component.sourceCode(Vertical),
  controls: { exclude: ['clickable'] },
}

export const Mobile = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item value="tab-a" label="Account" icon="account">Content of Tab A</bal-tab-item>
  <bal-tab-item value="tab-b" label="Calendar" icon="date" bubble="99+">Content of Tab B</bal-tab-item>
  <bal-tab-item value="tab-c" label="Settings" icon="settings" bubble>Content of Tab C</bal-tab-item>
  <bal-tab-item disabled value="tab-d" label="Support" icon="consultant">Content of Tab D</bal-tab-item>
</bal-tabs>`,
})
Mobile.args = {
  interface: 'tabs',
  value: 'tab-b',
  border: true,
  fullwidth: true,
  expanded: true,
  vertical: false,
  verticalOnMobile: false,
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'small',
  },
  layout: 'fullscreen',
  ...component.sourceCode(Mobile),
  controls: { exclude: ['clickable'] },
}

export const Steps = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item done value="tab-a" label="Finished Step"><p class="my-5">Content of Tab A</p></bal-tab-item>
  <bal-tab-item failed value="tab-b" label="Failed Step"><p class="my-5">Content of Tab B</p></bal-tab-item>
  <bal-tab-item value="tab-c" label="Active Step"><p class="my-5">Content of Tab C</p></bal-tab-item>
  <bal-tab-item value="tab-d" label="Tab D"><p class="my-5">Content of Tab D</p></bal-tab-item>
  <bal-tab-item disabled value="tab-e" label="Disabled Step"><p class="my-5">Content of Tab E</p></bal-tab-item>
</bal-tabs>`,
})

Steps.args = {
  value: 'tab-c',
  clickable: true,
  interface: 'o-steps',
}
Steps.parameters = {
  ...component.sourceCode(Steps),
  controls: {
    exclude: ['expanded', 'selectOnMobile', 'iconPosition', 'fullwidth', 'vertical', 'verticalOnMobile', 'border'],
  },
}

export const Navigation = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item value="tab-a" label="Tab A" icon="nav-go-down">Content of Tab A</bal-tab-item>
  <bal-tab-item value="tab-b" label="Tab B" icon="nav-go-down">Content of Tab B</bal-tab-item>
  <bal-tab-item value="tab-c" label="Tab C" icon="nav-go-down">Content of Tab C</bal-tab-item>
</bal-tabs>`,
})
Navigation.args = {
  interface: 'navigation',
  value: 'tab-a',
  border: true,
  float: 'right',
  spaceless: true,
  fullwidth: true,
  expanded: false,
  vertical: false,
  selectOnMobile: false,
}
Navigation.parameters = {
  ...component.sourceCode(Navigation),
  controls: { exclude: ['clickable'] },
}

export const MetaNavigation = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item value="tab-a" label="Tab A">Content of Tab A</bal-tab-item>
  <bal-tab-item value="tab-b" label="Tab B">Content of Tab B</bal-tab-item>
  <bal-tab-item value="tab-c" label="Tab C">Content of Tab C</bal-tab-item>
</bal-tabs>`,
})
MetaNavigation.args = {
  interface: 'meta',
  value: 'tab-a',
  border: false,
  inverted: true,
  spaceless: true,
  fullwidth: true,
  expanded: false,
  vertical: false,
  selectOnMobile: false,
}
MetaNavigation.parameters = {
  ...component.sourceCode(MetaNavigation),
  controls: { exclude: ['clickable'] },
  backgrounds: { default: 'blue' },
}

export const BasicWithSlider = args => ({
  components: { ...component.components },
  setup: () => ({ args }),
  template: `<bal-tabs v-bind="args" v-model="args.value">
  <bal-tab-item value="tab-0" label="Tab 0">Content of Tab 0</bal-tab-item>
  <bal-tab-item value="tab-1" label="Tab 1">Content of Tab 1</bal-tab-item>
  <bal-tab-item value="tab-2" label="Tab 2">Content of Tab 2</bal-tab-item>
  <bal-tab-item value="tab-3" label="Tab 3">Content of Tab 3</bal-tab-item>
  <bal-tab-item value="tab-4" label="Tab 4">Content of Tab 4</bal-tab-item>
  <bal-tab-item value="tab-5" label="Tab 5">Content of Tab 5</bal-tab-item>
  <bal-tab-item value="tab-6" label="Tab 6">Content of Tab 6</bal-tab-item>
  <bal-tab-item value="tab-7" label="Tab 7">Content of Tab 7</bal-tab-item>
  <bal-tab-item value="tab-8" label="Tab 8">Content of Tab 8</bal-tab-item>
  <bal-tab-item value="tab-9" label="Tab 9">Content of Tab 9</bal-tab-item>
  <bal-tab-item value="tab-10" label="Tab 10">Content of Tab 10</bal-tab-item>
  <bal-tab-item value="tab-11" label="Tab 11">Content of Tab 11</bal-tab-item>
  <bal-tab-item value="tab-12" label="Tab 12">Content of Tab 12</bal-tab-item>
  <bal-tab-item value="tab-13" label="Tab 13">Content of Tab 13</bal-tab-item>
  <bal-tab-item value="tab-14" label="Tab 14">Content of Tab 14</bal-tab-item>
  <bal-tab-item value="tab-15" label="Tab 15">Content of Tab 15</bal-tab-item>
  <bal-tab-item value="tab-16" label="Tab 16">Content of Tab 16</bal-tab-item>
  <bal-tab-item value="tab-17" label="Tab 17">Content of Tab 17</bal-tab-item>
  <bal-tab-item value="tab-18" label="Tab 18">Content of Tab 18</bal-tab-item>
  <bal-tab-item value="tab-19" label="Tab 19">Content of Tab 19</bal-tab-item>
  <bal-tab-item value="tab-20" label="Tab 20">Content of Tab 20</bal-tab-item>
  <bal-tab-item value="tab-21" label="Tab 21">Content of Tab 21</bal-tab-item>
  <bal-tab-item value="tab-22" label="Tab 22">Content of Tab 22</bal-tab-item>
  <bal-tab-item value="tab-23" label="Tab 23">Content of Tab 23</bal-tab-item>
  <bal-tab-item value="tab-24" label="Tab 24">Content of Tab 24</bal-tab-item>
  <bal-tab-item value="tab-25" label="Tab 25">Content of Tab 25</bal-tab-item>
  <bal-tab-item value="tab-26" label="Tab 26">Content of Tab 26</bal-tab-item>
  <bal-tab-item value="tab-27" label="Tab 27">Content of Tab 27</bal-tab-item>
</bal-tabs>`,
})
BasicWithSlider.args = {
  interface: 'tabs',
  value: 'tab-1',
  border: true,
  fullwidth: true,
  expanded: false,
  vertical: false,
  selectOnMobile: false,
}
BasicWithSlider.parameters = {
  ...component.sourceCode(BasicWithSlider),
  controls: { exclude: ['clickable'] },
}
