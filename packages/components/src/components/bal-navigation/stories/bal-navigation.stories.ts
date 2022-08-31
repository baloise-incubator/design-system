import docs from './bal-navigation.docs.mdx'
import { BalComponentStory } from '../../../stories/utils'
import {
  BalNavigation,
  BalNavigationLevels,
  BalNavigationLevelMeta,
  BalPopover,
  BalPopoverContent,
  BalButton,
  BalCard,
  BalStage,
  BalStageBody,
  BalStageBackLink,
  BalButtonGroup,
  BalNavigationPopover,
  BalNavigationLevelBlock,
  BalNavigationLevelMain,
  BalNavigationLevelBlockItem,
  BalHeading,
} from '../../../../.storybook/vue/components'
import { withContent } from '../../../stories/utils'

const component = BalComponentStory({
  title: 'Components/Navigation',
  component: BalNavigation,
  subcomponents: { BalNavigationLevels, BalNavigationLevelMeta, BalPopover, BalPopoverContent, BalButton },
  docs,
  argTypes: {
    ...withContent(),
  },
  layout: 'fullscreen',
})

export default component.story

export const Basic = args => ({
  components: { ...component.components },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div style="height: 1000px"><bal-navigation v-bind="args" meta-value="meta-1">
  <bal-navigation-levels> <!-- hidden in the dom but can be grabbed by the mutation observer -->
    <bal-navigation-level-meta value="meta-1" label="Privatkunden" link="/?path=/story/components-navigation--basic" linkLabel="Zur Privatkundenübersicht">
      <bal-navigation-level-main value="meta-1-main-1" label="Versichern" link="http://" linkLabel="Alle Versicherungslösungen">
        <bal-navigation-level-block label="Wohnen & Recht" link="http://">
          <bal-navigation-level-block-item label="Haushaltsversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Haftpflicht" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Einzel Gegenstände vom Handy bis zum e-Bike" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Rechtsschutz" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Wohneigentum" link="http://">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Fahrzeuge & Reisen" link="http://">
          <bal-navigation-level-block-item label="Auto" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Motorrad" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Velo" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Boot" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Fahrzeug Innenraum (auch Wohnwagen)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Reiseversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Personen (Unfall, Krankheit, Tod)" link="http://">
          <bal-navigation-level-block-item label="Unfallversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Todesfallrisikoversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Krankentaggeldversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Lebensversicherung & Life Coach" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erwerbsunfähigkeits-versicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Unfallversicherung für Hausangestellte" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block color="grey" label="Services">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-2" label="Sparen, Zahlen & Finanzieren" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-3" label="Anlegen & Vorsorgen" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-4" label="Kontakt & Services" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 4 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-5" label="Magazin" link="#" isTabLink={true}>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-2" label="Unternehmen" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-2-main-1" label="Meta 2 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 2 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-2-main-2" label="Meta 2 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 2 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-3" label="Institutionelle Anleger" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-3-main-1" label="Meta 3 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 3 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-2" label="Meta 3 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 3 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-3" label="Meta 3 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-4" label="Meta 3 Main 4" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-4" label="Über uns" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-4-main-1" label="Meta 4 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 4 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-2" label="Meta 4 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 4 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-3" label="Meta 4 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 4 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
  </bal-navigation-levels>

  <bal-button-group slot="meta-actions">
    <bal-button href="tel://00800 24 800 800" square size="small" color="light" inverted icon="call"></bal-button>
    <bal-button square size="small" color="light" inverted icon="web"></bal-button>
    <bal-button square size="small" color="light" inverted icon="location"></bal-button>
    <bal-button square size="small" color="light" inverted icon="search"></bal-button>
    <bal-button color="light" inverted size="small" icon="account">Login</bal-button>
  </bal-button-group>
  <div slot="meta-actions-mobile">
    <bal-button square color="light" icon="search"></bal-button>
    <bal-button square color="light" icon="account"></bal-button>
  </div>
  <div slot="meta-mobile-foot">
    <bal-button href="tel://00800 24 800 800" square inverted icon="call"></bal-button>
    <bal-button square inverted icon="web"></bal-button>
    <bal-button square inverted icon="location"></bal-button>
  </div>
</bal-navigation></div>`,
})
Basic.args = {
  metaValue: 'meta-1',
  ariaLabelMeta: 'aria label meta',
  ariaLabelMain: 'aria label main',
}
Basic.parameters = { ...component.sourceCode(Basic) }

export const MetaWithLinks = args => ({
  components: { ...component.components },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div style="height: 1000px">
<bal-navigation v-bind="args" meta-value="meta-1" aria-label-meta="aria label meta" aria-label-main="aria label main">
  <bal-navigation-levels> <!-- hidden in the dom but can be grabbed by the mutation observer -->
    <bal-navigation-level-meta value="meta-1" label="Privatkunden" link="/?path=/story/components-navigation--basic" linkLabel="Zur Privatkundenübersicht" isTabLink={true}>
      <bal-navigation-level-main value="meta-1-main-1" label="Versichern" link="http://" linkLabel="Alle Versicherungslösungen">
        <bal-navigation-level-block label="Wohnen & Recht" link="http://">
          <bal-navigation-level-block-item label="Haushaltsversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Haftpflicht" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Einzel Gegenstände vom Handy bis zum e-Bike" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Rechtsschutz" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Wohneigentum" link="http://">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Fahrzeuge & Reisen" link="http://">
          <bal-navigation-level-block-item label="Auto" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Motorrad" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Velo" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Boot" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Fahrzeug Innenraum (auch Wohnwagen)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Reiseversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Personen (Unfall, Krankheit, Tod)" link="http://">
          <bal-navigation-level-block-item label="Unfallversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Todesfallrisikoversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Krankentaggeldversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Lebensversicherung & Life Coach" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erwerbsunfähigkeits-versicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Unfallversicherung für Hausangestellte" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block color="grey" label="Services">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-2" label="Sparen, Zahlen & Finanzieren" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-3" label="Anlegen & Vorsorgen" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-4" label="Kontakt & Services" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 4 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-5" label="Magazin" link="#test" isTabLink={true}>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-2" label="Unternehmen" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview" isTabLink={true}>
      <bal-navigation-level-main value="meta-2-main-1" label="Meta 2 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 2 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-3" label="Institutionelle Anleger" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview" isTabLink={true}>
      <bal-navigation-level-main value="meta-3-main-1" label="Meta 3 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 3 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-4" label="Über uns" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview" isTabLink={true}>
      <bal-navigation-level-main value="meta-4-main-1" label="Meta 4 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 4 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
  </bal-navigation-levels>

  <bal-button-group slot="meta-actions">
    <bal-button href="tel://00800 24 800 800" square size="small" color="light" inverted icon="call"></bal-button>
    <bal-button square size="small" color="light" inverted icon="web"></bal-button>
    <bal-button square size="small" color="light" inverted icon="location"></bal-button>
    <bal-button square size="small" color="light" inverted icon="search"></bal-button>
    <bal-button color="light" inverted size="small" icon="account">Login</bal-button>
  </bal-button-group>
  <div slot="meta-actions-mobile">
    <bal-button square color="light" icon="search"></bal-button>
    <bal-button square color="light" icon="account"></bal-button>
  </div>
  <div slot="meta-mobile-foot">
    <bal-button href="tel://00800 24 800 800" square inverted icon="call"></bal-button>
    <bal-button square inverted icon="web"></bal-button>
    <bal-button square inverted icon="location"></bal-button>
  </div>
</bal-navigation></div>`,
})
MetaWithLinks.args = {}
MetaWithLinks.parameters = { ...component.sourceCode(MetaWithLinks) }

export const WithStage = args => ({
  components: { ...component.components, BalCard },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div style="height: 1000px">
<bal-navigation v-bind="args" meta-value="meta-1">
  <bal-navigation-levels> <!-- hidden in the dom but can be grabbed by the mutation observer -->
    <bal-navigation-level-meta value="meta-1" label="Privatkunden" link="/?path=/story/components-navigation--basic" linkLabel="Zur Privatkundenübersicht">
      <bal-navigation-level-main value="meta-1-main-1" label="Versichern" link="http://" linkLabel="Alle Versicherungslösungen">
        <bal-navigation-level-block label="Wohnen & Recht" link="http://">
          <bal-navigation-level-block-item label="Haushaltsversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Haftpflicht" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Einzel Gegenstände vom Handy bis zum e-Bike" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Rechtsschutz" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Wohneigentum" link="http://">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Fahrzeuge & Reisen" link="http://">
          <bal-navigation-level-block-item label="Auto" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Motorrad" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Velo" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Boot" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Fahrzeug Innenraum (auch Wohnwagen)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Reiseversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Personen (Unfall, Krankheit, Tod)" link="http://">
          <bal-navigation-level-block-item label="Unfallversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Todesfallrisikoversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Krankentaggeldversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Lebensversicherung & Life Coach" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erwerbsunfähigkeits-versicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Unfallversicherung für Hausangestellte" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block color="grey" label="Services">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-2" label="Sparen, Zahlen & Finanzieren" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-3" label="Anlegen & Vorsorgen" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-4" label="Kontakt & Services" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 4 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-5" label="Magazin" link="#" isTabLink={true}>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-2" label="Unternehmen" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-2-main-1" label="Meta 2 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 2 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-2-main-2" label="Meta 2 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 2 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-3" label="Institutionelle Anleger" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-3-main-1" label="Meta 3 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 3 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-2" label="Meta 3 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 3 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-3" label="Meta 3 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-4" label="Meta 3 Main 4" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-4" label="Über uns" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-4-main-1" label="Meta 4 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 4 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-2" label="Meta 4 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 4 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-3" label="Meta 4 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 4 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
  </bal-navigation-levels>

  <bal-button-group slot="meta-actions">
    <bal-button href="tel://00800 24 800 800" square size="small" color="light" inverted icon="call"></bal-button>
    <bal-button square size="small" color="light" inverted icon="web"></bal-button>
    <bal-button square size="small" color="light" inverted icon="location"></bal-button>
    <bal-button square size="small" color="light" inverted icon="search"></bal-button>
    <bal-button color="light" inverted size="small" icon="account">Login</bal-button>
  </bal-button-group>
  <div slot="meta-actions-mobile">
    <bal-button square color="light" icon="search"></bal-button>
    <bal-button square color="light" icon="account"></bal-button>
  </div>
  <div slot="meta-mobile-foot">
    <bal-button href="tel://00800 24 800 800" square inverted icon="call"></bal-button>
    <bal-button square inverted icon="web"></bal-button>
    <bal-button square inverted icon="location"></bal-button>
  </div>
</bal-navigation>
<bal-stage color="red" inverted=false>
  <bal-stage-body>
    <bal-stage-back-link href="#" class="mb-5">Back</bal-stage-back-link>
    <bal-heading class="mb-2" space="none">Title</bal-heading>
    <bal-heading space="none" subtitle level="h2" visual-level="h1">Subtitle</bal-heading>
  </bal-stage-body>
</bal-stage>
</div>`,
})
WithStage.args = {
  metaValue: 'meta-1',
  ariaLabelMeta: 'aria label meta',
  ariaLabelMain: 'aria label main',
}
WithStage.parameters = { ...component.sourceCode(WithStage) }

export const WithPopover = args => ({
  components: {
    ...component.components,
    BalButton,
    BalPopover,
    BalPopoverContent,
    BalStage,
    BalStageBody,
    BalStageBackLink,
    BalButtonGroup,
    BalNavigationPopover,
    BalNavigationLevelBlock,
    BalNavigationLevelMain,
    BalNavigationLevelBlockItem,
    BalHeading,
  },
  setup: () => {
    return {
      args,
    }
  },
  template: `<div style="height: 1000px">
<bal-navigation v-bind="args" meta-value="meta-1">
  <bal-navigation-levels> <!-- hidden in the dom but can be grabbed by the mutation observer -->
    <bal-navigation-level-meta value="meta-1" label="Privatkunden" link="/?path=/story/components-navigation--basic" linkLabel="Zur Privatkundenübersicht">
      <bal-navigation-level-main value="meta-1-main-1" label="Versichern" link="http://" linkLabel="Alle Versicherungslösungen">
        <bal-navigation-level-block label="Wohnen & Recht" link="http://">
          <bal-navigation-level-block-item label="Haushaltsversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Haftpflicht" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Einzel Gegenstände vom Handy bis zum e-Bike" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Rechtsschutz" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Wohneigentum" link="http://">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Fahrzeuge & Reisen" link="http://">
          <bal-navigation-level-block-item label="Auto" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Motorrad" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Velo" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Boot" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Fahrzeug Innenraum (auch Wohnwagen)" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Reiseversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block label="Personen (Unfall, Krankheit, Tod)" link="http://">
          <bal-navigation-level-block-item label="Unfallversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Todesfallrisikoversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Krankentaggeldversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Lebensversicherung & Life Coach" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erwerbsunfähigkeits-versicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Unfallversicherung für Hausangestellte" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
        <bal-navigation-level-block color="grey" label="Services">
          <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-2" label="Sparen, Zahlen & Finanzieren" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-3" label="Anlegen & Vorsorgen" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-4" label="Kontakt & Services" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 1 Main 4 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-1-main-5" label="Magazin" link="#" isTabLink={true}>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-2" label="Unternehmen" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-2-main-1" label="Meta 2 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 2 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-2-main-2" label="Meta 2 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 2 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-3" label="Institutionelle Anleger" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-3-main-1" label="Meta 3 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 3 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-2" label="Meta 3 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 3 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-3" label="Meta 3 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-3-main-4" label="Meta 3 Main 4" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
    <bal-navigation-level-meta value="meta-4" label="Über uns" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
      <bal-navigation-level-main value="meta-4-main-1" label="Meta 4 Main 1" link="http://" linkLabel="Go to Main 1">
        <bal-navigation-level-block label="Meta 4 Main 1 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-2" label="Meta 4 Main 2" link="http://" linkLabel="Go to Main 2">
        <bal-navigation-level-block label="Meta 4 Main 2 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
      <bal-navigation-level-main value="meta-4-main-3" label="Meta 4 Main 3" link="http://" linkLabel="Go to Main 3">
        <bal-navigation-level-block label="Meta 4 Main 3 Block 1" link="http://">
          <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
          <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
        </bal-navigation-level-block>
      </bal-navigation-level-main>
    </bal-navigation-level-meta>
  </bal-navigation-levels>

  <bal-button-group slot="meta-actions">
    <bal-navigation-popover
      backdrop={true}
      icon="call"
      size="small"
      inactive-color="light"
      active-color="primary"
      inverted={true}
      square={true}
      arrow={true}
      content-radius="large"
      position="bottom"
      content-width=440
      content-min-width=440
      offsetY=13
      heading="24h Kundenservice"
      >
        <bal-button expanded={true} href="tel://00800 24 800 800" icon="call">00800 24 800 800</bal-button>
    </bal-navigation-popover>
    <bal-button square size="small" color="light" inverted icon="web"></bal-button>
    <bal-navigation-popover
      backdrop={true}
      icon="location"
      size="small"
      inactive-color="light"
      active-color="primary"
      inverted={true}
      square={true}
      arrow={true}
      content-radius="large"
      position="bottom"
      content-width=440
      content-min-width=440
      offsetY=13
      heading="Sprache wählen"
      >
        <ul class="is-flex is-flex-direction-column" style="gap: 1rem">
          <li class="p-4" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">English</li>
          <li class="p-4" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">German</li>
          <li class="p-4" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">French</li>
        </ul>
    </bal-navigation-popover>
    <bal-button square size="small" color="light" inverted icon="search"></bal-button>
    <bal-navigation-popover
      backdrop={true}
      icon="account"
      size="small"
      inactive-color="light"
      active-color="primary"
      inverted={true}
      arrow={true}
      content-radius="large"
      position="bottom"
      content-width=440
      content-min-width=440
      offsetY=13
      heading="Baloise Login"
      label="login"
      >
        <ul class="is-flex is-flex-direction-column" style="gap: 1rem">
          <li class="p-4" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">Login</li>
        </ul>
    </bal-navigation-popover>
  </bal-button-group>
  <div slot="meta-actions-mobile">
    <bal-navigation-popover
      backdrop={true}
      position="bottom"
      square={true}
      icon="search"
      bal-popover-trigger
      content-radius="none"
      content-no-shadow={true}
      content-expanded={true}
      active-color="primary"
      inactive-color="light"
      heading="Suche"
      offsetY=8
      mobile-top={true}
      >
        <div>
          Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </div>
    </bal-navigation-popover>
    <bal-button square color="light" icon="account"></bal-button>
  </div>
  <div slot="meta-mobile-foot">
    <bal-navigation-popover
      backdrop={true}
      position="top"
      square={true}
      icon="call"
      bal-popover-trigger
      content-radius="large-bottom-none"
      content-no-shadow={true}
      content-expanded={true}
      active-color="primary"
      inactive-color="white"
      offsetY=7
      heading="24h Kundenservice"
      >
        <bal-button expanded={true} href="tel://00800 24 800 800" icon="call">00800 24 800 800</bal-button>
    </bal-navigation-popover>
    <bal-button square inverted icon="web"></bal-button>
    <bal-button square inverted icon="location"></bal-button>
  </div>
</bal-navigation>
<bal-stage color="red" inverted=false>
  <bal-stage-body>
    <bal-stage-back-link href="#" class="mb-5">Back</bal-stage-back-link>
    <bal-heading class="mb-2" space="none">Title</bal-heading>
    <bal-heading space="none" subtitle level="h2" visual-level="h1">Subtitle</bal-heading>
  </bal-stage-body>
</bal-stage>
</div>`,
})
WithPopover.args = {
  metaValue: 'meta-1',
  ariaLabelMeta: 'aria label meta',
  ariaLabelMain: 'aria label main',
}
WithPopover.parameters = { ...component.sourceCode(WithPopover) }

export const NavigationPopover = args => ({
  components: { ...component.components },
  setup: () => {
    return {
      args,
    }
  },
  template: `<bal-navigation-popover v-bind="args">
  Hello World
  </bal-navigation-popover>`,
})
NavigationPopover.args = {
  icon: 'account',
  label: 'Username',
  activeColor: 'primary',
  inactiveColor: 'light',
  inverted: false,
  closable: false,
}
NavigationPopover.parameters = { ...component.sourceCode(NavigationPopover) }

export const NavigationPopoverClosable = args => ({
  components: { ...component.components },
  setup: () => {
    return {
      args,
    }
  },
  template: `<bal-navigation-popover v-bind="args">
  Hello World
  </bal-navigation-popover>`,
})
NavigationPopoverClosable.args = {
  heading: 'Heading',
  icon: 'account',
  label: 'Username',
  activeColor: 'primary',
  inactiveColor: 'light',
  inverted: false,
}
NavigationPopoverClosable.parameters = {
  ...component.sourceCode(NavigationPopoverClosable),
}
