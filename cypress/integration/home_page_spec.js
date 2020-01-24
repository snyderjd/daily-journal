// Arrange - set up the application state (ex: visit a page and query for an element)
// Act - take an action (interact with that element)
// Assert - make an assertion (make an assertion about page content/changes to the app)

// Visit the home page
describe('The Home Page', function() {
    it ('successfully loads the home page', function() {
        cy.visit('http://localhost:8080/src/index.html')
    })
})

// Test reading journal entries
describe('Reads journal entries', function() {
    it ('ensures journal entries are present on the page after loading', function() {
        cy.visit('http://localhost:8080/src/index.html')
        // If there are buttons with 'Edit Entry' and 'Delete Entry' on the page, journal
        // entries have been successfully read and loaded from the db
        cy.contains('Edit Entry')
        cy.contains('Delete Entry')
    })
})

// Test creating a journal entry
describe('Create a new journal entry', function() {
    it ('Enters the info for a new journal entry and submits it', function(){
        // Create a testEntry object that we will save to the DB
        const testEntry = {
            date: "2020-01-10",
            topic: "Test Create Entry",
            entry: "Test creating an entry using cypress",
            mood: "Good"
        }
 
        cy.visit('http://localhost:8080/src/index.html')
        
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

        // Assert - verify that the new entry is now displayed on the page
        cy.contains(testEntry.entry)

    })
})

// Test editing a journal entry
describe('Edit a journal entry', function() {
    it ('Edits a journal entry and saves it to the database', function() {
        cy.visit('http://localhost:8080/src/index.html')

        // Save a new entry to the database
        cy.request('POST', 'http://localhost:5002/journalEntries', 
            {
                date: "2020-01-15",
                topic: "Edit Journal Entry",
                entry: "New journal entry to test edit functionality",
                mood: "Terrible",
                id: 999
            })

        const editedEntry = {
            date: "2020-01-04",
            topic: "Edited Journal Entry",
            entry: "Successfully edited this journal entry using cypress",
            mood: "Average"
        }

        cy.visit('http://localhost:8080/src/index.html')

        // Edit the entry that was just posted
        cy.get('.editEntry--999').click()

        // Clear date input and enter a new date
        cy.get('.date').clear()
        cy.get('.date').type(editedEntry.date)

        // Clear topic input and enter a new topic
        cy.get('.topic').clear()
        cy.get('.topic').type(editedEntry.topic)

        // Clear entry input and enter new entry content
        cy.get('#journalEntry').clear()
        cy.get('#journalEntry').type(editedEntry.entry)

        // Click mood dropdown and select a different mood
        cy.get('#moodList').select(editedEntry.mood)

        // Save the journal entry
        cy.get('.submit').click()

        // ASSERT - verify the content of the edited journal entry is on the page
        cy.contains(editedEntry.entry)

        // Delete the journal entry from the DB
        cy.request('DELETE', 'http://localhost:5002/journalEntries/999')
        cy.visit('http://localhost:8080/src/index.html')

    })
})

// Test deleting a journal entry
describe('Delete a journal entry', function() {
    it ('deletes a journal entry by clicking the delete button', function() {
        // Post a new journal entry to be deleted
        cy.request('POST', 'http://localhost:5002/journalEntries',
            {
                date: "2020-01-18",
                topic: "Delete Journal Entry",
                entry: "Journal entry to test delete functionality",
                mood: "Average",
                id: 998
            })
            
        cy.visit('http://localhost:8080/src/index.html')

        // Click the delete button for the new entry
        cy.get('.deleteEntry--998').click()

        // Assert - page should not contain the content of the deleted entry
        cy.visit('http://localhost:8080/src/index.html')
        cy.contains('Journal entry to test delete functionality').should('not.exist')

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