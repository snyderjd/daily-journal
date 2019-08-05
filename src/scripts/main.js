import data from "./data.js";
import entryComponent from "./entryComponent.js";
import entriesDOM from "./entriesDOM.js";

// Main application logic that uses the functions and objects defined in the other JavaScript files

// Create form for journal entries and render on the page;
const formContainer = document.querySelector('.journal__form');
const inputForm = entryComponent.createForm();
formContainer.innerHTML += inputForm;

// Complete request to get Journal Entries and render them on the page
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
    
    const newEntry = entryComponent.createEntryObject(dateValue, topicValue, entryContentValue, moodValue);

    const okayChars = 'abcdefghijklmnopqrstuvwxyz1234567890(){}:;!.,- ';
    const curseWords = ['fuck', 'shit', 'damn'];

    const entryChars = `${topicValue.toLowerCase()} ${entryContentValue.toLowerCase()}`;
    const entryCharsArray = entryChars.split('');
    const entryWords = entryChars.split(' ');

    if  (entryCharsArray.every(char => okayChars.includes(char)) 
        && entryWords.every(word => !curseWords.includes(word))
        && entryComponent.topicLengthCheck(topicValue, 40)) {

        // Save the new journal entry (POST) to the entries.json file and then invoke the GET request to render it on the page 
        data.saveJournalEntry(newEntry)
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




