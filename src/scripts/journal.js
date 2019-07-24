// Define the keys and values for a JavaScript object that represents a journal entry about what you learned today

const entryContainer = document.querySelector('.entries');

const displayEntry = (object) => {
    const entryContainer = document.querySelector('.entries');
    const HTMLRepresentation = 
        `<section class="entry">
            <h2 class="entry__topic">${object.topic}</h2>
            <p class="entry__date">Date: ${object.date}</p>
            <p class="entry__mood">Mood: ${object.mood}</p>
            <p class="entry__content">${object.entry}</p>
        </section>`;

    entryContainer.innerHTML += HTMLRepresentation;
};

fetch('http://localhost:3000/journalEntries') // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            displayEntry(entry);
        });
    });


