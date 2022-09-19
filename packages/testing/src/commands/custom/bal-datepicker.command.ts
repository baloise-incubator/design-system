import { getYear, getMonth } from 'date-fns'
import { log, wrapOptions } from '../helpers'

const formatDateString = (date: Date) => {
  const day = `${date.getDate()}`
  const month = `${date.getMonth() + 1}`
  const pad = (text: string) => (text.length === 1 ? `0${text}` : text)

  return `${date.getFullYear()}-${pad(month)}-${pad(day)}`
}

const selectorDayBox = (date: Date) => `[data-date="${formatDateString(date)}"]`

Cypress.Commands.add(
  'balDatepickerToggle',
  {
    prevSubject: true,
  },
  (subject, options) => {
    log('balDatepickerToggle', '', subject, options)
    const o = wrapOptions(options)
    return cy.wrapComponent(subject, o).find('.datepicker-trigger-icon', o).click(o).wrapComponent(subject, o)
  },
)

Cypress.Commands.add(
  'balDatepickerIsOpen',
  {
    prevSubject: true,
  },
  (subject, options) => {
    log('balDatepickerIsOpen', '', subject, options)
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find('bal-popover', o)
      .should('have.attr', 'aria-presented', 'true')
      .wrapComponent(subject, o)
  },
)

Cypress.Commands.add(
  'balDatepickerIsClosed',
  {
    prevSubject: true,
  },
  (subject, options) => {
    log('balDatepickerIsClosed', '', subject, options)
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find('bal-popover', o)
      .should('not.have.attr', 'aria-presented')
      .wrapComponent(subject, o)
  },
)

Cypress.Commands.add(
  'balDatepickerPick',
  {
    prevSubject: true,
  },
  (subject, date, options) => {
    log('balDatepickerPick', formatDateString(date), subject, options)
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .balDatepickerIsOpen(o)
      .within(() => {
        cy.get('.bal-datepicker-pagination__month-and-year__select--month select', o)
          .first(o)
          .select(getMonth(date).toString(), o)
        cy.get('.bal-datepicker-pagination__month-and-year__select--year select', o)
          .first(o)
          .select(getYear(date).toString(), o)
        cy.get(selectorDayBox(date), o).click(o)
      })
      .wrapComponent(subject, o)
  },
)

Cypress.Commands.add(
  'balDatepickerIsDateInRange',
  {
    prevSubject: true,
  },
  (subject, date, options) => {
    log('balDatepickerIsDateInRange', formatDateString(date), subject, options)
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find(selectorDayBox(date), { ...o, force: true })
      .should('not.have.class', 'is-disabled')
      .wrapComponent(subject, o)
  },
)

Cypress.Commands.add(
  'balDatepickerIsDateNotInRange',
  {
    prevSubject: true,
  },
  (subject, date, options) => {
    log('balDatepickerIsDateNotInRange', formatDateString(date), subject, options)
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find(selectorDayBox(date), { ...o, force: true })
      .should('have.class', 'is-disabled')
      .wrapComponent(subject, o)
  },
)
