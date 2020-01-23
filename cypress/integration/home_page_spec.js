// Arrange - set up the application state (ex: visit a page and query for an element)
// Act - take an action (interact with that element)
// Assert - make an assertion (make an assertion about page content/changes to the app)

// Visit the home page
describe('The Home Page', function() {
    it ('successfully loads the home page', function() {
        cy.visit('http://localhost:8080/src/index.html')
    })
})

// Test creating a journal entry
describe('Enter data for new journal entry and save it', function() {
    it ('successfully creates a new journal entry', function(){
        // Create a testEntry object that we will save to the DB
        const testEntry = {
            date: "2019-01-10",
            topic: "Test Create Entry",
            entry: "Test creating an entry using cypress",
            mood: "Good"
        }
 
        cy.visit('http://localhost:8080/src/index.html')

        // Get a reference to the container that holds the entries and count them
        // const entriesContainer = window.document.querySelector('.entries')
        const entriesContainer = window.document.querySelector('.entries')
        // const numEntries = entriesContainer.childElementCount
        
        
        // Get the date input and enter the testEntry date
        cy.get('.date').type(testEntry.date)

        // Get the topic input and enter the testEntry topic
        cy.get('.topic').type(testEntry.topic)

        // Get the entry input and enter the testEntry entry
        cy.get('#journalEntry').type(testEntry.entry)

        // Click the mood dropdown and select the option that equals the testEntry mood
        cy.get('#moodList').select(testEntry.mood)

        // Save the journal entry
        cy.get('.submit').click()

        // expect(entriesContainer.childElementCount).to.equal(numEntries + 1)
        

    })
})

    // describe('The Login Page', function () {
    //     beforeEach(function () {
    //       // reset and seed the database prior to every test
    //       cy.exec('npm run db:reset && npm run db:seed')
      
    //       // seed a user in the DB that we can control from our tests
    //       // assuming it generates a random password for us
    //       cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
    //         .its('body')
    //         .as('currentUser')
    //     })
      
    //     it('sets auth cookie when logging in via form submission', function () {
    //       // destructuring assignment of the this.currentUser object
    //       const { username, password } = this.currentUser
      
    //       cy.visit('/login')
      
    //       cy.get('input[name=username]').type(username)
      
    //       // {enter} causes the form to submit
    //       cy.get('input[name=password]').type(`${password}{enter}`)
      
    //       // we should be redirected to /dashboard
    //       cy.url().should('include', '/dashboard')
      
    //       // our auth cookie should be present
    //       cy.getCookie('your-session-cookie').should('exist')
      
    //       // UI should reflect this user being logged in
    //       cy.get('h1').should('contain', 'jane.lane')
    //     })
    //   })