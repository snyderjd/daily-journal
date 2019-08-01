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

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (event) => {

    // Get references to the inputs and their values

    const entryDate = document.querySelector('.date');
    const dateValue = entryDate.value;

    const entryTopic = document.querySelector('.topic');
    const topicValue = entryTopic.value;

    const entryContent = document.querySelector('.entryContent');
    const entryContentValue = entryContent.value;

    const entryMood = document.querySelector('.mood');
    const moodValue = entryMood.value;

    // create a new Journal entry using the values in the form input fields

    const newEntry = createEntryObject(dateValue, topicValue, entryContentValue, moodValue);

    saveJournalEntry(newEntry)
        .then(data.getJournalEntries().then(parsedEntries => {
            parsedEntries.forEach(entry => {
                const HTMLRepresentation = entryComponent.createEntry(entry);
                entriesDOM.addHTML(HTMLRepresentation);
            });
        }));
});




