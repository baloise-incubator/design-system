import { Platforms } from '../../../src/types'
import { compareSnapshotOptions } from './snapshot-util'

describe.skip('bal-navigation', () => {
  testNavigationOnDesktop('widescreen')
  testNavigationOnDesktop('highDefinition')
  testNavigationOnDesktop('desktop')

  testNavigationOnTouch('tablet')
  testNavigationOnTouch('mobile')

  function testNavigationOnDesktop(platform: Platforms) {
    describe(platform, () => {
      beforeEach(() => {
        cy.visit('/components/bal-navigation/test/bal-navigation.visual.html').platform(platform).waitForDesignSystem()
      })

      it('closed menu on top', () => {
        cy.compareSnapshot(`navigation-desktop-${platform}-closed-top`, compareSnapshotOptions(platform, 0, 0, 0.1))
      })
      it('closed menu on bottom', () => {
        cy.scrollTo('bottom')
        cy.compareSnapshot(
          `navigation-desktop-${platform}-closed-bottom`,
          compareSnapshotOptions(platform, 0, 200, 0.1),
        )
      })
      it('open menu', () => {
        cy.scrollTo('top')
        cy.contains('Versichern').click()
        cy.compareSnapshot(`navigation-desktop-${platform}-open`, compareSnapshotOptions(platform, 0, 0, 0.1))
      })
    })
  }

  function testNavigationOnTouch(platform: Platforms) {
    describe(platform, () => {
      beforeEach(() => {
        cy.visit('/components/bal-navigation/test/bal-navigation.visual.html').platform(platform).waitForDesignSystem()
      })

      it('closed menu on top', () => {
        cy.compareSnapshot(`navigation-touch-${platform}-closed-top`, compareSnapshotOptions(platform, 0, 0, 0))
      })
      it('closed menu on bottom', () => {
        cy.scrollTo('bottom')
        cy.compareSnapshot(`navigation-touch-${platform}-closed-bottom`, compareSnapshotOptions(platform, 0, 200, 0))
      })
      it('open menu', () => {
        cy.scrollTo('top')
        cy.getByTestId('navigation-burger').click()
        cy.compareSnapshot(`navigation-touch-${platform}-open`, compareSnapshotOptions(platform, 0, 0, 0))
      })
    })
  }
})

describe.skip('bal-navigation-colors', () => {
  testNavigationOnDesktop('widescreen')

  function testNavigationOnDesktop(platform: Platforms) {
    describe(platform, () => {
      beforeEach(() => {
        cy.visit('/components/bal-navigation/test/bal-navigation-colors.visual.html')
          .platform(platform)
          .waitForDesignSystem()
      })

      it('open menu', () => {
        cy.contains('Versichern').click()
        cy.compareSnapshot(`navigation-colors-desktop-${platform}-open`, compareSnapshotOptions(platform, 0, 0, 0.1))
      })
    })
  }
})
