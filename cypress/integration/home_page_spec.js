// Arrange - set up the application state (ex: visit a page and query for an element)
// Act - take an action (interact with that element)
// Assert - make an assertion (make an assertion about page content/changes to the app)

// Visit the home page
describe('The Home Page', function() {
    it ('successfully loads the home page', function() {
        cy.visit('http://localhost:8080/src/index.html')
    })
})

// describe('The Home Page', function() {
//     it('successfully loads', function() {
//       cy.visit('http://localhost:8080') // change URL to match your dev URL
//     })
//   })