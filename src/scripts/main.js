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

    if (dateValue === '' || topicValue === '' || entryContentValue === '' || moodValue === '') {

        window.alert('Please fill out all of the input fields.');

    } else if (entryCharsArray.every(char => okayChars.includes(char))
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
            alert(`Only the following characters may be entered: ${okayChars}. Also, no curse words!`);
        }
});

// Filter journal entries by mood

const filterButtons = document.getElementsByName('moodFilter__button');

filterButtons.forEach(button => {
    button.addEventListener('click', event => {
        document.querySelector('.entries').innerHTML = '';

        data.getJournalEntries().then(parsedEntries => {
            const filteredEntries = parsedEntries.filter(entry => entry.mood === button.value);

            filteredEntries.forEach(entry => {
                const HTMLRepresentation = entryComponent.createEntry(entry);
                entriesDOM.addHTML(HTMLRepresentation);
            });
        });
    });
});

// Add event listener to entries container to delete entries
const entryContainer = document.querySelector('.entries');

// When delete button is clicked, clear the entry container contents, delete the entry from the server, and render the remaining entries from the server
entryContainer.addEventListener('click', event => {
    
    if (event.target.classList[1].startsWith('deleteEntry')) {

        const entryID = event.target.classList[1].split('--')[1]; 
        entryContainer.innerHTML = '';
        
        data.deleteEntry(entryID)
            .then(data.getJournalEntries)
            .then(parsedEntries => {
                parsedEntries.forEach(entry => {
                    const HTMLRepresentation = entryComponent.createEntry(entry);
                    entriesDOM.addHTML(HTMLRepresentation);
                });
            });
    }
});



