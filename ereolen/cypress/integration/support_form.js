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
        // Silence StandardJS.
        if (err) {
          return false
        }

        return false
      })

      cy.setCookie('CookieInformationConsent', 'test')

      // Set some useful aliases
      // https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Elements
      cy.visit('/support-formular')
      cy.get('[name=ereol_support_problem]').as('Problem')
      cy.get('[name=ereol_support_name]').as('Name')
      cy.get('[name=ereol_support_email]').as('Email')
      cy.get('[name="ereol_support_date[date]"]').as('Date')
      cy.get('[name=ereol_support_book_type]').as('BookType')
      cy.get('[name=ereol_support_product]').as('Product')
      cy.get('[name=ereol_support_description]').as('Description')
      cy.get('[name=ereol_support_book_title]').as('BookTitle')
      cy.get('[name=ereol_support_device]').as('Device')
      cy.get('[name=ereol_support_model]').as('Model')
      cy.get('[name=ereol_support_operating_system]').as('OperatingSystem')
      cy.get('[name=ereol_support_form] [type=submit]').as('Send')

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      cy.get('@Send').click()
      cy.contains('Feltet Navn er obligatorisk.')

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('@Name').type('Tester')
      cy.get('@Email').type('test@example.com')
      cy.get('@BookType').select('Ebog')
      cy.get('@Product').select('ereolen app')
      cy.get('@BookTitle').type('Test 2021')
      cy.get('@Device').select('Andet')
      cy.get('@Model').type('Test')
      cy.get('@OperatingSystem').type('Test')
      cy.get('@Send').click()

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('@Name').type('Tester')
      cy.get('@Email').type('test@example.com')
      cy.get('@BookType').select('Ebog')
      cy.get('@Product').select('ereolen app')
      cy.get('@Description').type('0101601234')
      cy.get('@BookTitle').type('Test 2021')
      cy.get('@Device').select('Andet')
      cy.get('@Model').type('Test')
      cy.get('@OperatingSystem').type('Test')
      cy.get('@Send').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('@Name').type('Tester')
      cy.get('@Email').type('test@example.com')
      cy.get('@BookType').select('Ebog')
      cy.get('@Product').select('ereolen app')
      cy.get('@Description').type('1234567890 is not a CPR number, but 0101601234 is')
      cy.get('@BookTitle').type('Test 2021')
      cy.get('@Device').select('Andet')
      cy.get('@Model').type('Test')
      cy.get('@OperatingSystem').type('Test')
      cy.get('@Send').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('@Name').type('Tester')
      cy.get('@Email').type('test@example.com')
      cy.get('@BookType').select('Ebog')
      cy.get('@Product').select('ereolen app')
      cy.get('@Description').type('120206 5513')
      cy.get('@BookTitle').type('Test 2021')
      cy.get('@Device').select('Andet')
      cy.get('@Model').type('Test')
      cy.get('@OperatingSystem').type('Test')
      cy.get('@Send').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.').should('not.exist')

      cy.visit('/support-formular')
      cy.get('@Problem').select('Download')
      // We don't fill in the name because we don't want to submit the form for real.
      // cy.get('@Name').type('Tester')
      cy.get('@Email').type('test@example.com')
      cy.get('@BookType').select('Ebog')
      cy.get('@Product').select('ereolen app')
      cy.get('@Description').type('120206 5518')
      cy.get('@BookTitle').type('Test 2021')
      cy.get('@Device').select('Andet')
      cy.get('@Model').type('Test')
      cy.get('@OperatingSystem').type('Test')
      cy.get('@Send').click()
      cy.contains('Beskrivelse indeholder tal som kunne være et CPR nummer.')
    })
  })
