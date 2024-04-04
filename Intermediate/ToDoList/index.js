
let items = [];
const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";



function renderItems() {
    itemsDiv.innerHTML = null;

    for(const [idx, item] of Object.entries(items)) {
        // Creates a div tag within the main.html file and assigns it to a JS var.
        const container = document.createElement("div")
        // Setting the margin-bottom attribute of the button tag to a pixel value.
        container.style.marginBottom = "10px"
        // Adding padding to each container div with a value of 5px
        container.style.padding = "5px"

        // This line creates a p tag within the main.html file and assigns it to a JS var.
        const text = document.createElement("p")
        // Changing the display type of the p tag to inlines instead of the default block
        text.style.display = "inline"
        // Adding a 10px value to the margin-right of the p tag in main.html.
        text.style.marginRight = "10px"
        // This line sets the value of the text to the value entered in the input so that it appears inside the p tag.
        text.textContent = item;

        // This line creates a button tag within the main.html file and assigns it to a JS var.
        const button = document.createElement("button")
        // This line sets the value of the text so that it appears inside the button.
        button.textContent = "Remove"
        // This line is setting the "onclick()" attribute of the button tag to call the deleteItem() function.
        button.onclick = () => deleteItem(idx)

        // Appending the list item and delete button to the container div in main.html
        container.appendChild(text)
        container.appendChild(button)

        // Appending the container to the itemsDiv tag in main.html
        itemsDiv.appendChild(container);
    }
}

function loadItems() {
    // Getting the list data from the local storage.
    const oldItems = localStorage.getItem(storageKey)
    // Checking to make sure there is a value and if so, convert it back to an array.
    if (oldItems) items = JSON.parse(oldItems)
    // Update the list in main.html to display the loaded items.
    renderItems()
}

// Using local storage with the browser to store the items on the list.
function saveItems() {
    // Converting the items array to a string.
    const stringItems = JSON.stringify(items);
    // 'localStorage' is the built-in variable that you can use to write to the browsers local storage
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    const value = input.value

    // Error checking to make sure the user is not giving an empty list item.
    if (!value) {
        alert("You cannot add an empty item.")
        return
    }
    // Adding the value to the array items.
    items.push(value)
    // Update the list in main.html to display the list with the new item.
    renderItems()
    // Resetting the input value so that it is blank when you click the add button.
    input.value = ""
    // Save to memory.
    saveItems()
}

function deleteItem(index) {
    // splice(): takes in an index and amount value to cut a segment our of an array. In this instance, I am sending the index value of the selected item on the list and a amount of 1 to remove that item off of the list.
    items.splice(index, 1)
    // Update the list in main.html to display the list with item deleted.
    renderItems()
    // Save to memory.
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)