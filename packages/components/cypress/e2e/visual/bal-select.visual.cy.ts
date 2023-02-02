describe('bal-select', () => {
  visualSelectTest('desktop')
  visualSelectTest('mobile')

  visualSelectMultipleTest('desktop')
  visualSelectMultipleTest('mobile')

  function visualSelectTest(platform: 'mobile' | 'desktop') {
    describe(platform, () => {
      beforeEach(() => {
        cy.page('/components/form/bal-select/test/bal-select.visual.html').platform(platform)
      })

      it('basic component', () => {
        cy.getByTestId('basic').compareSnapshot(`select-basic-${platform}`, 0.0)

        cy.getByTestId('basic-input').click()
        cy.compareSnapshot(`select-basic-open-${platform}`, 0.0)

        cy.getByTestId('basic-input').balSelectFindOptions().eq(1).click()
        cy.getByTestId('basic').compareSnapshot(`select-basic-value-${platform}`, 0.0)

        cy.getByTestId('basic-input').click()
        cy.compareSnapshot(`select-basic-open-selected-${platform}`, 0.0)
      })

      it('disabled component', () => {
        cy.getByTestId('disabled').waitForComponents().compareSnapshot(`select-disabled-${platform}`, 0.0)
      })

      it('invalid component', () => {
        cy.getByTestId('invalid').waitForComponents().compareSnapshot(`select-invalid-${platform}`, 0.0)
      })

      it('field component', () => {
        cy.getByTestId('field').waitForComponents().compareSnapshot(`select-field-${platform}`, 0.0)
      })
    })
  }

  function visualSelectMultipleTest(platform: 'mobile' | 'desktop') {
    describe(platform, () => {
      beforeEach(() => {
        cy.page('/components/form/bal-select/test/bal-select-multiple.visual.html').platform(platform)
      })

      it('basic multiple component', () => {
        cy.getByTestId('basic').compareSnapshot(`select-multiple-basic-${platform}`, 0.0)

        cy.getByTestId('basic-input').click()
        cy.compareSnapshot(`select-multiple-basic-open-${platform}`, 0.0)

        cy.getByTestId('basic-input').balSelectFindOptions().eq(1).click()
        cy.getByTestId('basic-input').balSelectFindOptions().eq(2).click()
        cy.getByTestId('basic').compareSnapshot(`select-multiple-basic-value-${platform}`, 0.0)

        cy.getByTestId('basic-input').click()
        cy.compareSnapshot(`select-multiple-basic-open-selected-${platform}`, 0.0)
      })

      it('disabled multiple component', () => {
        cy.getByTestId('disabled').waitForComponents().compareSnapshot(`select-multiple-disabled-${platform}`, 0.0)
      })

      it('invalid multiple component', () => {
        cy.getByTestId('invalid').waitForComponents().compareSnapshot(`select-multiple-invalid-${platform}`, 0.0)
      })

      it('field component', () => {
        cy.getByTestId('field').waitForComponents().compareSnapshot(`select-multiple-field-${platform}`, 0.0)
      })
    })
  }
})
