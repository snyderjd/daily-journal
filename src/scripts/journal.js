// Define the keys and values for a JavaScript object that represents a journal entry about what you learned today

const journalEntries = [
    {
        date: "07/02/19",
        topic: "Orientation",
        entry: "In the morning we watched the front-end capstone project presentations by Cohort 32. It was neat to see the wide variety of applications they have built and how much they have learned in such a short period of time. In the afternoon we listed to a talk from John.",
        mood: "Good"
    },
    {
        date: "07/12/2019",
        topic: "JavaScript DOM Manipulation and Objects",
        entry: "Today we learned how to manipulate html elements in the DOM and learned the basics of JavaScript objects and how to access their properties and values",
        mood: "Good"
    },
    {
        date: "07/15/2019",
        topic: "JavaScript Functions",
        entry: "We started learning about and getting practice with functions in JavaScript. We learned the syntax of how they are laid out, the difference between declaring a function and a function expression, as well as the syntax for arrow functions.",
        mood: "Good"
    }
];

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

journalEntries.forEach(entry => {
    displayEntry(entry);
});


