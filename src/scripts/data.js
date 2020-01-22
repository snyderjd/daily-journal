// Fetches data from the json database

const data = Object.create({

    // Request journal entry data from the server
    getJournalEntries: function () {
        return fetch("http://localhost:8080/journalEntries", {cache: "no-cache"})
            .then(response => response.json());
    },

    getJournalEntry: (entryID) => {
        return fetch(`http://localhost:8080/journalEntries/${entryID}`)
            .then(response => response.json());
    },

    editJournalEntry: (entryObject, entryID) => {
        return fetch(`http://localhost:8080/journalEntries/${entryID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
        .then(response => response.json());
    },

    // Send an entry object to the server to be saved
    saveJournalEntry: function (entryObject) {
        fetch("http://localhost:8080/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject),
            cache: "no-cache"
        })
        .then(response => response.json());
    },

    // Delete an entry from the server
    deleteEntry: (entryID) => {
        return fetch(`http://localhost:8080/journalEntries/${entryID}`, {
            method: "DELETE"
        }).then(response => response.json());
    }
});

export default data;




