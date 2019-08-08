// createEntry takes in an object and returns an HTML representation of the object 

const entryComponent = Object.create({
    
    // Take in an object and return an HTML representation of the object
    createEntry: function (object) {
        const HTMLRepresentation =
            `<section class="entry">
                <h2 class="entry__topic">${object.topic}</h2>
                <p class="entry__date">Date: ${object.date}</p>
                <p class="entry__mood">Mood: ${object.mood}</p>
                <p class="entry__content">${object.entry}</p>
                <button class="deleteButton deleteEntry--${object.id}">Delete Entry</button>
                <a href="#journal__fields"><button class="editButton editEntry--${object.id}">Edit Entry</button><a>
            </section>`;

        return HTMLRepresentation;
    },

    // Create an object for a new entry with the input field values that are passed in
    createEntryObject: function (date, topic, entry, mood) {
        return {
            date: date,
            topic: topic,
            entry: entry,
            mood: mood
        };
    },
    
    // Make sure topic length does not exceed specified number of characters
    topicLengthCheck: (topicString, max) => {
        if (topicString.length < max) {
            return true;
        } else {
            window.alert(`Topic field must be no more than ${max} characters.`);
            return false;
        }
    },

    // Return HTML needed for input fields to populate on the page
    createForm: () => {
        const formHTML = `  <fieldset id="journal__fields" class="journal__fields">
                                <input type="hidden" id="entryId" value="" />
                                <label for="journalDate">Date of Entry</label>
                                <input type="date" class="date">
                                <label for="journalTopic">Topics Covered</label>
                                <input type="text" class="topic">
                                <label for="journalEntry">Journal Entry</label>
                                <textarea name="journalEntry" class="entryContent" id="journalEntry" placeholder="Enter journal entry text" cols="50" rows="10"></textarea>
                                <label for="mood">Mood for the Day</label>
                                <select name="moodList" id="moodList" class="mood">
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

