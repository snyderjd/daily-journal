// createEntry takes in an object and returns an HTML representation of the object 

const entryComponent = Object.create({
    
    createEntry: function (object) {
        const HTMLRepresentation =
            `<section class="entry">
                <h2 class="entry__topic">${object.topic}</h2>
                <p class="entry__date">Date: ${object.date}</p>
                <p class="entry__mood">Mood: ${object.mood}</p>
                <p class="entry__content">${object.entry}</p>
            </section>`;

        return HTMLRepresentation;
    },
    createEntryObject: function (date, topic, entry, mood) {
        return {
            date: date,
            topic: topic,
            entry: entry,
            mood: mood
        };
    },
    
    topicLengthCheck: (topicString, max) => {
        if (topicString.length < max) {
            return true;
        } else {
            window.alert(`Topic field must be no more than ${max} characters.`);
            return false;
        }
    }

});

export default entryComponent;

