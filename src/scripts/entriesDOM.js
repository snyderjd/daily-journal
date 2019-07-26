// Gets a reference to container where the entries will be inserted
const entryContainer = document.querySelector('.entries');

// addHTML takes in a string representation of HTML and adds it to a referenced container in the DOM
const entriesDOM = Object.create({
    addHTML: function (HTMLString) {
        entryContainer.innerHTML += HTMLString;
    }
});