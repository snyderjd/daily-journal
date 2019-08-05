// Fetches data from the json database

const data = Object.create({
    getJournalEntries: function () {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json());
    },
    saveJournalEntry: function (entryObject) {
        fetch("http://localhost:8088/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        });
    }
});

export default data;




