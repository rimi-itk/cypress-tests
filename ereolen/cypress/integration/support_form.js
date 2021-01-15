/// <reference types="cypress" />

context('Support form',
  {
    // @see https://docs.cypress.io/guides/references/configuration.html#Actionability
    scrollBehavior: 'nearest'
  },
  () => {
    it('Fills in support form', () => {
      // @see https://docs.cypress.io/api/events/catalog-of-events.html#Examples
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })

      cy.setCookie('CookieInformationConsent', 'test')

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      cy.get('[name=ereol_support_form] [type=submit]').click()
      cy.contains('Feltet Navn er obligatorisk.')

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('[name=ereol_support_name]').type('Tester')
      cy.get('[name=ereol_support_email]').type('test@example.com')
      cy.get('[name=ereol_support_book_type]').select('Ebog')
      cy.get('[name=ereol_support_product]').select('ereolen app')
      cy.get('[name=ereol_support_book_title]').type('Test 2021')
      cy.get('[name=ereol_support_device]').select('Andet')
      cy.get('[name=ereol_support_model]').type('Test')
      cy.get('[name=ereol_support_operating_system]').type('Test')
      cy.get('[name=ereol_support_form] [type=submit]').click()

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('[name=ereol_support_name]').type('Tester')
      cy.get('[name=ereol_support_email]').type('test@example.com')
      cy.get('[name=ereol_support_book_type]').select('Ebog')
      cy.get('[name=ereol_support_product]').select('ereolen app')
      cy.get('[name=ereol_support_description]').type('0101601234')
      cy.get('[name=ereol_support_book_title]').type('Test 2021')
      cy.get('[name=ereol_support_device]').select('Andet')
      cy.get('[name=ereol_support_model]').type('Test')
      cy.get('[name=ereol_support_operating_system]').type('Test')
      cy.get('[name=ereol_support_form] [type=submit]').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('[name=ereol_support_name]').type('Tester')
      cy.get('[name=ereol_support_email]').type('test@example.com')
      cy.get('[name=ereol_support_book_type]').select('Ebog')
      cy.get('[name=ereol_support_product]').select('ereolen app')
      cy.get('[name=ereol_support_description]').type('1234567890 is not a CPR number, but 0101601234 is')
      cy.get('[name=ereol_support_book_title]').type('Test 2021')
      cy.get('[name=ereol_support_device]').select('Andet')
      cy.get('[name=ereol_support_model]').type('Test')
      cy.get('[name=ereol_support_operating_system]').type('Test')
      cy.get('[name=ereol_support_form] [type=submit]').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('[name=ereol_support_name]').type('Tester')
      cy.get('[name=ereol_support_email]').type('test@example.com')
      cy.get('[name=ereol_support_book_type]').select('Ebog')
      cy.get('[name=ereol_support_product]').select('ereolen app')
      cy.get('[name=ereol_support_description]').type('120206 5513')
      cy.get('[name=ereol_support_book_title]').type('Test 2021')
      cy.get('[name=ereol_support_device]').select('Andet')
      cy.get('[name=ereol_support_model]').type('Test')
      cy.get('[name=ereol_support_operating_system]').type('Test')
      cy.get('[name=ereol_support_form] [type=submit]').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.').should('not.exist')

      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('[name=ereol_support_name]').type('Tester')
      cy.get('[name=ereol_support_email]').type('test@example.com')
      cy.get('[name=ereol_support_book_type]').select('Ebog')
      cy.get('[name=ereol_support_product]').select('ereolen app')
      cy.get('[name=ereol_support_description]').type('120206 5518')
      cy.get('[name=ereol_support_book_title]').type('Test 2021')
      cy.get('[name=ereol_support_device]').select('Andet')
      cy.get('[name=ereol_support_model]').type('Test')
      cy.get('[name=ereol_support_operating_system]').type('Test')
      cy.get('[name=ereol_support_form] [type=submit]').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')
    })
  })
