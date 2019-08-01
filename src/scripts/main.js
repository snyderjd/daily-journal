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

// Get references to the input containers
const entryDate = document.querySelector('.date');
const entryTopic = document.querySelector('.topic');
const entryContent = document.querySelector('.entryContent');
const entryMood = document.querySelector('.mood');

// Save journal entry to the database when user clicks submit
submitButton.addEventListener('click', (event) => {

    // Get references to the inputs and their values
    const dateValue = entryDate.value;
    const topicValue = entryTopic.value;
    const entryContentValue = entryContent.value;
    const moodValue = entryMood.value;

    // create a new Journal entry using the values in the form input fields
    
    const newEntry = createEntryObject(dateValue, topicValue, entryContentValue, moodValue);

    const okayChars = 'abcdefghijklmnopqrstuvwxyz1234567890(){}:;!.,- ';
    const curseWords = ['fuck', 'shit', 'damn'];

    const entryChars = `${topicValue.toLowerCase()} ${entryContentValue.toLowerCase()}`;
    const entryCharsArray = entryChars.split('');
    const entryWords = entryChars.split(' ');

    if (entryCharsArray.every(char => okayChars.includes(char)) 
        && entryWords.every(word => !curseWords.includes(word))) {

        saveJournalEntry(newEntry)
            .then(data.getJournalEntries()
            .then(parsedEntries => {
                parsedEntries.forEach(entry => {
                    const HTMLRepresentation = entryComponent.createEntry(entry);
                    entriesDOM.addHTML(HTMLRepresentation);
                });
        }));

    } else {
        window.alert(`Only the following characters may be entered: ${okayChars} Also, no curse words!`);
    }  

});




