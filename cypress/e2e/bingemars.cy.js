describe('Homepage Test', () => {
  it('Contains correct header text and action button text and svg', () => {
    cy.visit('/')
    cy.get('[data-test="header-text"]').should('contain.text', 'Watch all the pictures from the') // best practice
    cy.get('.red-planet').should('contain.text', "Red Planet") // not best practice becuase selector is too generic
    cy.get('[data-test="cta-button"]').should('contain.text', 'Latest Photos')

    cy.get('[data-test="rover-potraits-svg"]').should('be.visible')
  })
})