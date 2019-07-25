// Gets a reference to the container in the DOM and creates a new HTML element to display journal entries

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
