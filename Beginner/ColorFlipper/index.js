
// This will access the "body" element of main.html.
const body = document.getElementsByTagName("body")[0]

// //  Modifying the body attribute.
// body.style.backgroundColor = "Blue"

// Creating an function that takes in a name and changes the color of the background of the body element in main.html
function setColor(name) {
    body.style.backgroundColor = name;
}

// Creating a function to generate a random RGB value to change the background.
function randomColor() {
    // Math.random * 255 generates a random number between 0 - 255.
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}