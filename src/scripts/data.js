// Fetches data from the json database

// fetch('http://localhost:8088/journalEntries') // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedEntries => {
//         parsedEntries.forEach(entry => {
//             displayEntry(entry);
//         });
//     });

const data = Object.create({
    getJournalEntries: function () {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json());
    }
});

const saveJournalEntry = (entryObject) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    });
};


