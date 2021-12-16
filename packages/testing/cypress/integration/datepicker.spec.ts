import { now } from '@baloise/web-app-utils'
import { app } from '../support/app'

describe('Datepicker', () => {
  let page = app.getDatepickerPage()

  it('should open and close the datepicker', () => {
    page.open()
    cy.get(page.datepicker).balDatepickerToggle().balDatepickerIsOpen().balDatepickerToggle().balDatepickerIsClosed()
  })

  it('should pick the date in datepicker', () => {
    page.open()
    cy.get(page.datepicker).balDatepickerToggle().balDatepickerPick(now())
  })

  it('should type and assert the date in the datepicker', () => {
    page.open()
    cy.get(page.datepicker).type('20.02.2021').should('have.value', '20.02.2021')
    cy.get(page.datepicker).clear().type('03.03.2021').should('not.have.value', '20.02.2021')
  })

  it('should assert that the datepicker is disabled or not', () => {
    page.open()
    cy.get(page.datepicker).should('not.be.disabled')
    cy.get(page.datepickerDisabled).should('be.disabled')
  })

  it('should assert if date is in range in the Datepicker', () => {
    page.open()
    cy.get(page.datepickerRange).balDatepickerToggle()
    cy.get(page.datepickerRange).balDatepickerIsDateInRange(new Date(2021, 0, 6))
  })

  // todo: fails on github need to investigate why
  it.skip('should assert if date is not in range in the Datepicker', () => {
    page.open()
    cy.get(page.datepickerRange).balDatepickerToggle()
    cy.get(page.datepickerRange).balDatepickerIsDateNotInRange(new Date(2021, 0, 5))
  })
})
