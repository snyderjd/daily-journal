// Arrange - set up the application state (visit a page and query for an element)
// Act - take an action (interact with that element)
// Assert - make an assertion (make an assertion about page content/changes to the app)

describe('My First Test', function() {
    it('Does not do much', function() {
        expect(true).to.equal(true)
    });
});

describe('My Second Test', function() {
    it ('Clicks an element', function() {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})