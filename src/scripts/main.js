/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

data.getJournalEntries().then(parsedEntries => {
    parsedEntries.forEach(entry => {
        const HTMLRepresentation = entryComponent.createEntry(entry);
        entriesDOM.addHTML(HTMLRepresentation);
    });
});



