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
    const modal = ref()

    function openModal() {
      modal.value?.open()
    }

    // function closeModal() {
    //   modal.value?.$el.close()
    // }

    const toggle = () => {
      isActive.value = !isActive.value
    }

    watchEffect(() => {
      isActive.value = args.value
    })

    return {
      args,
      isActive,
      myActiveTab,
      modal,
      toggle,
      openModal,
      // closeModal,
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
        <bal-list border meta-nav-accordion size="large">
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                  <bal-list-item-title>Privatkunden</bal-list-item-title>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <bal-list-item accordion sub-accordion-item>
                <bal-list-item-accordion-head>
                  <bal-list-item-content>
                      <bal-list-item-title>Versichern</bal-list-item-title>
                  </bal-list-item-content>
                </bal-list-item-accordion-head>
                <bal-list-item-accordion-body>
                  <bal-main-navigation-menu-panel link-href="/" link-name="Alle Versicherungslösungen">
                    <div slot="left">
                      <bal-main-navigation-menu-panel-list headline="Wohnen & Recht" href="https://google.com">
                        <div slot="links">
                          <bal-main-navigation-menu-panel-list-item href="/">Haushaltsversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Haftpflicht</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Einzel Gegenstände vom Handy bis zum e-Bike</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Rechtsschutz</bal-main-navigation-menu-panel-list-item>
                        </div>
                      </bal-main-navigation-menu-panel-list>
                      <bal-main-navigation-menu-panel-list headline="Wohneigentum" href="https://google.com">
                        <div slot="links">
                          <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                        </div>
                      </bal-main-navigation-menu-panel-list>
                      <bal-main-navigation-menu-panel-list headline="Fahrzeuge & Reisen" href="https://google.com">
                        <div slot="links">
                          <bal-main-navigation-menu-panel-list-item href="/">Auto</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Motorrad</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Velo</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Boot</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Fahrzeug Innenraum (auch Wohnwagen)</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Reiseversicherung</bal-main-navigation-menu-panel-list-item>
                        </div>
                      </bal-main-navigation-menu-panel-list>
                      <bal-main-navigation-menu-panel-list headline="Personen (Unfall, Krankheit, Tod)" href="https://google.com">
                        <div slot="links">
                          <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Todesfallrisikoversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Krankentaggeldversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Lebensversicherung & Life Coach</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Erwerbsunfähigkeitsversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung für Hausangestellte</bal-main-navigation-menu-panel-list-item>
                        </div>
                      </bal-main-navigation-menu-panel-list>
                    </div>
                    <div slot="right">
                      <bal-main-navigation-menu-panel-list is-service headline="Services" href="https://google.com">
                        <div slot="links">
                          <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                          <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                        </div>
                      </bal-main-navigation-menu-panel-list>
                    </div>
                  </bal-main-navigation-menu-panel>
                </bal-list-item-accordion-body>
              </bal-list-item>
              <bal-list-item accordion sub-accordion-item>
                <bal-list-item-accordion-head>
                  <bal-list-item-content>
                      <bal-list-item-title>Sparen, Zahlen & Finanzieren</bal-list-item-title>
                  </bal-list-item-content>
                </bal-list-item-accordion-head>
              </bal-list-item>
              <bal-list-item accordion sub-accordion-item>
                <bal-list-item-accordion-head>
                  <bal-list-item-content>
                      <bal-list-item-title>Anlegen & Vorsorgen</bal-list-item-title>
                  </bal-list-item-content>
                </bal-list-item-accordion-head>
              </bal-list-item>
              <bal-list-item accordion sub-accordion-item>
                <bal-list-item-accordion-head>
                  <bal-list-item-content>
                      <bal-list-item-title>Kontakt & Services</bal-list-item-title>
                  </bal-list-item-content>
                </bal-list-item-accordion-head>
              </bal-list-item>
              <bal-list-item accordion sub-accordion-item>
                <bal-list-item-accordion-head>
                  <bal-list-item-content>
                      <bal-list-item-title>Magazin</bal-list-item-title>
                  </bal-list-item-content>
                </bal-list-item-accordion-head>
              </bal-list-item>
            </bal-list-item-accordion-body>
          </bal-list-item>
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                <bal-list-item-title>Unternehmen</bal-list-item-title>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </bal-list-item-accordion-body>
          </bal-list-item>
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                <bal-list-item-title>Institutionelle Anleger</bal-list-item-title>
              </bal-list-item-content>
            </bal-list-item-accordion-head>
            <bal-list-item-accordion-body>
              <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </bal-list-item-accordion-body>
          </bal-list-item>
          <bal-list-item accordion>
            <bal-list-item-accordion-head>
              <bal-list-item-content>
                <bal-list-item-title>Über uns</bal-list-item-title>
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
<!--        <bal-popover>-->
<!--          <bal-button bal-popover-trigger square inverted size="small" icon="web" @click="toggle()"></bal-button>-->
<!--          <bal-popover-content style="inset: 8px auto auto 0!important;" class="p-2">-->
<!--            <bal-heading class="is-flex is-justify-content-center" level="h4">Sprache wählen</bal-heading>-->
<!--            <bal-button class="mb-2" expanded color="light">English</bal-button>-->
<!--            <bal-button class="mb-2" expanded color="light">Deutsch</bal-button>-->
<!--            <bal-button class="mb-2" expanded color="light">Français</bal-button>-->
<!--          </bal-popover-content>-->
<!--        </bal-popover>-->
        <bal-button square inverted size="small" icon="web" @click="openModal()"></bal-button>
        <bal-modal ref="modal">
          <bal-modal-header>Modal Title</bal-modal-header>
          <bal-modal-body>
            <bal-heading class="is-flex is-justify-content-center" level="h4">Sprache wählen</bal-heading>
            <bal-button class="mb-2" expanded color="light">English</bal-button>
            <bal-button class="mb-2" expanded color="light">Deutsch</bal-button>
            <bal-button class="mb-2" expanded color="light">Français</bal-button>
          </bal-modal-body>
        </bal-modal>
        <bal-button square inverted icon="location"></bal-button>
      </bal-main-navigation-menu-buttons>
    </bal-main-navigation-menu>
  </bal-main-navigation-meta-bar>
  <bal-main-navigation-second-bar>
    <div slot="second-tabs">
        <bal-tabs interface="header">
          <bal-tab-item value="tab-g" label="LONG LONG LONG very long Tab G" icon="nav-go-down" inMainNavigation>
            <bal-main-navigation-menu-panel class="p-4" link-href="/" link-name="Alle Versicherungslösungen">
              <div slot="left">
                <bal-main-navigation-menu-panel-list headline="Wohnen & Recht" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Haushaltsversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Haftpflicht</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Einzel Gegenstände vom Handy bis zum e-Bike</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Rechtsschutz</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
                <bal-main-navigation-menu-panel-list headline="Wohneigentum" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
                <bal-main-navigation-menu-panel-list headline="Fahrzeuge & Reisen" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Auto</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Motorrad</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Velo</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Boot</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Fahrzeug Innenraum (auch Wohnwagen)</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Reiseversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
                <bal-main-navigation-menu-panel-list headline="Personen (Unfall, Krankheit, Tod)" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Todesfallrisikoversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Krankentaggeldversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Lebensversicherung & Life Coach</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erwerbsunfähigkeitsversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung für Hausangestellte</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
              </div>
              <div slot="right">
                <bal-main-navigation-menu-panel-list is-service headline="Services" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
              </div>
            </bal-main-navigation-menu-panel>
          </bal-tab-item>
          <bal-tab-item value="tab-h" label="Long text Tab H" icon="nav-go-down" inMainNavigation>
            <bal-main-navigation-menu-panel class="p-4" link-href="/" link-name="Alle Versicherungslösungen">
              <div slot="left">
                <bal-main-navigation-menu-panel-list headline="Wohnen & Recht" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Haushaltsversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Haftpflicht</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Einzel Gegenstände vom Handy bis zum e-Bike</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Rechtsschutz</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
                <bal-main-navigation-menu-panel-list headline="Wohneigentum" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
              </div>
              <div slot="right">
                <bal-main-navigation-menu-panel-list is-service headline="Services" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
                <bal-main-navigation-menu-panel-list is-service headline="Second" href="https://google.com">
                  <div slot="links">
                    <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
                    <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
                  </div>
                </bal-main-navigation-menu-panel-list>
              </div>
            </bal-main-navigation-menu-panel>
          </bal-tab-item>
          <bal-tab-item value="tab-i" label="Very very long text Tab I" icon="nav-go-down" inMainNavigation>Content of Tab I</bal-tab-item>
          <bal-tab-item value="tab-l" label="Very long text Tab L" icon="nav-go-down" inMainNavigation>Content Very long tab Item text L</bal-tab-item>
          <bal-tab-item value="tab-m" label="Short Text" href="#" inMainNavigation></bal-tab-item>
        </bal-tabs>
      </div>
  </bal-main-navigation-second-bar>
</bal-main-navigation>`,
})
Basic.args = {}
Basic.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(Basic),
  controls: { exclude: excludedControls },
}

export const MenuPanel = args => ({
  components: {
    ...component.components,
  },
  setup: () => {
    return {
      args,
    }
  },
  template: `<bal-main-navigation-menu-panel class="p-4" link-href="/" link-name="Alle Versicherungslösungen">
    <div slot="left">
      <bal-main-navigation-menu-panel-list headline="Wohnen & Recht" href="https://google.com">
        <div slot="links">
          <bal-main-navigation-menu-panel-list-item href="/">Haushaltsversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Haftpflicht</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Einzel Gegenstände vom Handy bis zum e-Bike</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Rechtsschutz</bal-main-navigation-menu-panel-list-item>
        </div>
      </bal-main-navigation-menu-panel-list>
      <bal-main-navigation-menu-panel-list headline="Wohneigentum" href="https://google.com">
        <div slot="links">
          <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
        </div>
      </bal-main-navigation-menu-panel-list>
      <bal-main-navigation-menu-panel-list headline="Fahrzeuge & Reisen" href="https://google.com">
        <div slot="links">
          <bal-main-navigation-menu-panel-list-item href="/">Auto</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Motorrad</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Velo</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Boot</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Fahrzeug Innenraum (auch Wohnwagen)</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Reiseversicherung</bal-main-navigation-menu-panel-list-item>
        </div>
      </bal-main-navigation-menu-panel-list>
      <bal-main-navigation-menu-panel-list headline="Personen (Unfall, Krankheit, Tod)" href="https://google.com">
        <div slot="links">
          <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Todesfallrisikoversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Krankentaggeldversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Lebensversicherung & Life Coach</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Erwerbsunfähigkeitsversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Unfallversicherung für Hausangestellte</bal-main-navigation-menu-panel-list-item>
        </div>
      </bal-main-navigation-menu-panel-list>
    </div>
    <div slot="right">
      <bal-main-navigation-menu-panel-list is-service headline="Services" href="https://google.com">
        <div slot="links">
          <bal-main-navigation-menu-panel-list-item href="/">Gebäudeversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Erdbebenversicherung</bal-main-navigation-menu-panel-list-item>
          <bal-main-navigation-menu-panel-list-item href="/">Bauversicherung</bal-main-navigation-menu-panel-list-item>
        </div>
      </bal-main-navigation-menu-panel-list>
    </div>
</bal-main-navigation-menu-panel>`,
})
MenuPanel.args = {}
MenuPanel.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(MenuPanel),
  controls: { exclude: excludedControls },
}

export const LoginPanel = args => ({
  components: {
    ...component.components,
  },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div class="columns">
    <div class="column is-full is-6-desktop">
      <bal-card class="m-4">
        <bal-card-content>
          <bal-tabs slot="account" border fullwidth interface="tabs" value="tab-a">
            <bal-tab-item value="tab-a" label="myBaloise">
              <bal-heading level="h4">Bei myBaloise anmelden</bal-heading>
              <bal-field>
                <bal-field-label>E-Mail Address</bal-field-label>
                <bal-field-control :loading="args.loading">
                    <bal-input placeholder="Enter your e-mail" type="email"></bal-input>
                </bal-field-control>
              </bal-field>
              <bal-field>
                <bal-field-label>Password</bal-field-label>
                <bal-field-control :loading="args.loading">
                    <bal-input placeholder="Enter your password" type="password"></bal-input>
                </bal-field-control>
              </bal-field>
              <bal-button expanded>Login</bal-button>
              <bal-button expanded flat color="link">Passwort vergessen?</bal-button>
              <bal-button expanded flat color="link">Neuen Account erstellen</bal-button>
            </bal-tab-item>
            <bal-tab-item value="tab-b" label="E-Banking">

            </bal-tab-item>
          </bal-tabs>
        </bal-card-content>
      </bal-card>
    </div>
  </div>`,
})
LoginPanel.args = {}
LoginPanel.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(LoginPanel),
  controls: { exclude: excludedControls },
}

export const LanguagePanel = args => ({
  components: {
    ...component.components,
  },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div class="columns">
    <div class="column is-full is-6-desktop">
      <bal-card class="m-4">
        <bal-card-content>
          <bal-heading class="is-flex is-justify-content-center" level="h4">Sprache wählen</bal-heading>
          <bal-button class="mb-2" expanded color="light">English</bal-button>
          <bal-button class="mb-2" expanded color="light">Deutsch</bal-button>
          <bal-button class="mb-2" expanded color="light">Français</bal-button>
        </bal-card-content>
      </bal-card>
    </div>
  </div>`,
})
LanguagePanel.args = {}
LanguagePanel.parameters = {
  layout: 'fullscreen',
  ...component.sourceCode(LanguagePanel),
  controls: { exclude: excludedControls },
}
