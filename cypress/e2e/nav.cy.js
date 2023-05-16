

describe('Navigation', () => {

    it('should navigate to the products page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="products"]').click()

        cy.url().should('include', '/products')

    })
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="about"]').click()

        cy.url().should('include', '/about')

    })
    it('should navigate to the javascript page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('[data-cy="dropDownContent"]').invoke('show')

        cy.get('a[href*="javascript"]').click()

        cy.url().should('include', '/javascript')
    })

})