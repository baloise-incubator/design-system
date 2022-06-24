import docs from './bal-main-navigation.docs.mdx'
import { BalComponentStory } from '../../../stories/utils'
import { BalMainNavigation } from '../../../../.storybook/vue/components'
import {
  BalText,
  BalButton,
  BalPopover,
  BalPopoverContent,
  BalList,
  BalListItem,
  BalListItemContent,
  BalListItemTitle,
  BalTabs,
  BalTabItem,
} from '../../../../.storybook/vue/components'
import { ref, watchEffect } from 'vue'

const component = BalComponentStory({
  component: BalMainNavigation,
  status: 'stable',
  docs,
  args: {
    expanded: false,
  },
})

export default component.story

const excludedControls = []

export const Basic = args => ({
  components: {
    ...component.components,
    BalText,
    BalButton,
    BalPopover,
    BalPopoverContent,
    BalList,
    BalListItem,
    BalListItemContent,
    BalListItemTitle,
    BalTabs,
    BalTabItem,
  },
  setup: () => {
    const isActive = ref(true)
    const myActiveTab = ref('tab-a')

    const toggle = () => {
      isActive.value = !isActive.value
    }

    watchEffect(() => {
      isActive.value = args.value
    })

    return {
      args,
      isActive,
      toggle,
      myActiveTab,
    }
  },
  template: `<bal-main-navigation v-bind="args">
  <bal-main-navigation-meta-bar>
    <bal-main-navigation-actions slot="actions">
      <bal-button square size="small" color="light" inverted icon="search"></bal-button>
      <bal-popover v-model="isActive">
        <bal-button class="is-hidden-touch" bal-popover-trigger color="light" inverted size="small" icon="account" @click="toggle()">
          <span>Login</span>
        </bal-button>
        <bal-button class="is-hidden-desktop" bal-popover-trigger square color="light" inverted size="small" icon="account" @click="toggle()"></bal-button>
        <bal-popover-content class="p-2 mt-2" style="border-radius: 12px;">
          <bal-tabs slot="account" border fullwidth interface="tabs" value="tab-a">
            <bal-tab-item value="tab-a" label="myBaloise">Content of Tab A</bal-tab-item>
            <bal-tab-item value="tab-b" label="E-Banking">Content of Tab B</bal-tab-item>
          </bal-tabs>
        </bal-popover-content>
      </bal-popover>
    </bal-main-navigation-actions>
    <bal-main-navigation-links slot="tabs">
      <bal-tabs interface="mainnav" inverted v-model="myActiveTab">
        <bal-tab-item value="tab-a" label="Tab A" href="https://www.google.com"></bal-tab-item>
        <bal-tab-item value="tab-b" label="Tab B"></bal-tab-item>
        <bal-tab-item value="tab-c" label="Tab C"></bal-tab-item>
      </bal-tabs>
    </bal-main-navigation-links>
    <bal-main-navigation-menu slot="menu">
      <bal-main-navigation-menu-content>
        <bal-list class="px-4" border meta-nav-accordion size="large">
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                  <bal-list-item-title>Accordion List Item</bal-list-item-title>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <bal-list-item accordion sub-accordion-item>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                  <bal-list-item-title>Accordion List Item</bal-list-item-title>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </bal-list-item-accordion-body>
          </bal-list-item>
            </bal-list-item-accordion-body>
          </bal-list-item>
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                <bal-list-item-title>Accordion List Item</bal-list-item-title>
                <bal-list-item-subtitle>With subtitle</bal-list-item-subtitle>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </bal-list-item-accordion-body>
          </bal-list-item>
        </bal-list>
      </bal-main-navigation-menu-content>
      <bal-main-navigation-menu-buttons>
        <bal-button href="tel://00800 24 800 800" square inverted icon="call"></bal-button>
        <bal-popover>
          <bal-button bal-popover-trigger square inverted size="small" icon="web" @click="toggle()"></bal-button>
          <bal-popover-content class="p-2">
            <bal-list border>
              <bal-list-item clickable>
                <bal-list-item-content>
                  <bal-list-item-title>English</bal-list-item-title>
                </bal-list-item-content>
              </bal-list-item>
              <bal-list-item clickable>
                <bal-list-item-content>
                  <bal-list-item-title>Français</bal-list-item-title>
                </bal-list-item-content>
              </bal-list-item>
              <bal-list-item clickable>
                <bal-list-item-content>
                  <bal-list-item-title>Italiano</bal-list-item-title>
                </bal-list-item-content>
              </bal-list-item>
            </bal-list>
          </bal-popover-content>
        </bal-popover>
        <bal-button square inverted icon="location"></bal-button>
      </bal-main-navigation-menu-buttons>
    </bal-main-navigation-menu>
  </bal-main-navigation-meta-bar>
  <bal-main-navigation-second-bar>MAIN BAR</bal-main-navigation-second-bar>
</bal-main-navigation>`,
})
Basic.args = {}
Basic.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(Basic),
  controls: { exclude: excludedControls },
}
