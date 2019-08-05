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
    },

    createForm: () => {
        const formHTML = `<fieldset class="journal__fields">
            <label for="journalDate">Date of Entry</label>
            <input type="date" class="date" required>
            <label for="journalTopic">Topics Covered</label>
            <input type="text" class="topic" required>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" class="entryContent" id="journalEntry" placeholder="Enter journal entry text" cols="50" rows="10" required></textarea>
            <label for="mood">Mood for the Day</label>
            <select name="moodList" id="moodList" class="mood" required>
                <option value="Great">Great</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
                <option value="Terrible">Terrible</option>
            </select>
            <button type="submit" class="submit">Record Journal Entry</button>
        </fieldset>`;
        
        return formHTML;
    }

});

export default entryComponent;

