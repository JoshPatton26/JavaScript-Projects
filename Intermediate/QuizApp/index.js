// holds the data for the questions
let questions = [
    {
      qid: 1,
      qtopic: "Default",
      text: "What is the capital of France?",
      ansOne: "London",
      ansTwo: "Paris",
      ansThree: "Berlin",
      ansFour: "Madrid",
      correctAnswer: "B"
    },
    {
      qid: 2,
      qtopic: "Default",
      text: "What is the powerhouse of the cell?",
      ansOne: "Nucleus",
      ansTwo: "Mitochondria",
      ansThree: "Endoplasmic Reticulum",
      ansFour: "Chloroplast",
      correctAnswer: "B"
    },
    {
      qid: 3,
      qtopic: "Default",
      text: "Who wrote 'Romeo and Juliet'?",
      ansOne: "William Shakespeare",
      ansTwo: "Charles Dickens",
      ansThree: "Jane Austen",
      ansFour: "Leo Tolstoy",
      correctAnswer: "A"
    },
    {
      qid: 4,
      qtopic: "Default",
      text: "What is the chemical symbol for water?",
      ansOne: "H2O",
      ansTwo: "CO2",
      ansThree: "NaCl",
      ansFour: "O2",
      correctAnswer: "A"
    },
    {
      qid: 5,
      qtopic: "Planets",
      text: "Which planet is known as the Red Planet?",
      ansOne: "Mars",
      ansTwo: "Jupiter",
      ansThree: "Venus",
      ansFour: "Mercury",
      correctAnswer: "A"
    },
    {
      qid: 6,
      qtopic: "Default",
      text: "What is the tallest mammal?",
      ansOne: "Elephant",
      ansTwo: "Giraffe",
      ansThree: "Blue Whale",
      ansFour: "Polar Bear",
      correctAnswer: "B"
    },
    {
      qid: 7,
      qtopic: "Default",
      text: "What is the largest ocean on Earth?",
      ansOne: "Atlantic Ocean",
      ansTwo: "Arctic Ocean",
      ansThree: "Indian Ocean",
      ansFour: "Pacific Ocean",
      correctAnswer: "D"
    },
    {
      qid: 8,
      qtopic: "Default",
      text: "What is the chemical symbol for gold?",
      ansOne: "Au",
      ansTwo: "Ag",
      ansThree: "Fe",
      ansFour: "Cu",
      correctAnswer: "A"
    },
    {
      qid: 9,
      qtopic: "Default",
      text: "Which gas do plants use to perform photosynthesis?",
      ansOne: "Oxygen",
      ansTwo: "Nitrogen",
      ansThree: "Carbon Dioxide",
      ansFour: "Hydrogen",
      correctAnswer: "C"
    },
    {
      qid: 10,
      qtopic: "Default",
      text: "Who discovered penicillin?",
      ansOne: "Alexander Fleming",
      ansTwo: "Louis Pasteur",
      ansThree: "Marie Curie",
      ansFour: "Isaac Newton",
      correctAnswer: "A"
    }
  ];
// Used to store the index value which is used to locate each question within the questions array.
let idx = 0;
// Used to store the values of the question being displayed on the flashcard.
let curQues = "";
// Array used to store the questions that are filtered based on "topic"
let filteredQues = [];
// Array used to store to data that we want to save to local storage.
let newTopic = [];
// Used as a key to access the localstorage data that we save in there.
const storageKey = "newTopics";

// ############################################
// Accessing the dropdown option tag to 
// const topicTitle = document.getElementById("topicTitle")

// Accessing the flashcards's elements to display the question and answer options of the specific object in questions array.
const ques = document.getElementById("question")
const ans1 = document.getElementById("aLabel")
const ans2 = document.getElementById("bLabel")
const ans3 = document.getElementById("cLabel")
const ans4 = document.getElementById("dLabel")

// Accessing the radio buttons to change colors in respects to true/false upon submitting an answered question. 
// green = correct answer, red = wrong answer. Set back to blue when going to next question.
let radbtns = document.getElementsByName("mcq")
// Accessing the input tag that is used to add a new topic to the dropdown menu.
let topicInput = document.getElementById("topicInput");
// Accessing the select tag from main.html used to display all the topics saved to localstorage. 
// Also used to filter the questions based off the selected option item.
let topicDD = document.getElementById("topics");

// Function used to display the question data on the flashcard in main.html. 
// This function uses the filter function to filter the items to display based on the selected topic in the dropdown.
function displayQues(index, topic) {
  // Saves the filtered questions from the array that match the selected topic.
  filteredQues = questions.filter(question => question.qtopic === topic)
  // Checks to make sure the selected topic has questions that match, if not, display the default 
  // flashcard that instructs the user to add questions for that topic.
  if (filteredQues.length > 0){
    // Setting the html elements to the value of the current question object.
    curQues = filteredQues[index];
    // ################## May not need anymore ###################
    // topicTitle.textContent = curQues.qtopic
    ques.textContent = curQues.text,    
    ans1.textContent = "A: "+ curQues.ansOne
    ans2.textContent = "B: "+ curQues.ansTwo
    ans3.textContent = "C: "+ curQues.ansThree
    ans4.textContent = "D: "+ curQues.ansFour 
  } else {
    ques.textContent = "No questions available for this topic.";
    ans1.textContent = "A: ";
    ans2.textContent = "B: ";
    ans3.textContent = "C: ";
    ans4.textContent = "D: ";
  }
}

// Function used to update the questions displayed on the flashcards by calling the displayQues function and passing the topic as an argument. 
// Also used to set the radio buttons back to blue when going to the prev or next question.
function updateQues() {
    radbtns.forEach(btns => {
      btns.style.accentColor = "blue"
    })
    
    displayQues(idx, topicDD.value)
}

// Function used to modify the idx value then calls updateQues to change the question data on the flashcard to the previous question.
// Also resets the form so that the radio button that was previously selected, gets unchecked when going to the prev question.
function prevQues() {
    idx = (idx - 1 + filteredQues.length) % filteredQues.length;
    updateQues()
    document.getElementById("subform").reset();

}

// Function used to modify the idx value then calls updateQues to change the question data on the flashcard to the next question.
// Also resets the form so that the radio button that was previously selected, gets unchecked when going to the next question.
function nextQues() {
    idx = (idx + 1) % filteredQues.length;
    updateQues()
    document.getElementById("subform").reset();
}

// Function used to modify the idx value then calls updateQues to change the question data on the flashcard to the random question.
// Also resets the form so that the radio button that was previously selected, gets unchecked when going to the random question.
function randQues() {
    const rand = Math.floor(Math.random() * filteredQues.length);
    idx = rand;
    updateQues()
    document.getElementById("subform").reset();
}

// Function used to check the answer upon clicking the "submit" button on each flashcard.
// Also used to change the color of the radio button to green or red.
function checkAns(event){
    event.preventDefault();

    const input = document.getElementsByName("mcq")
    
    for (i = 0; i < input.length; i++) {
        if (input[i].checked) {
            if (input[i].value === curQues.correctAnswer) {
                input[i].style.accentColor = "green"
            }else{
                input[i].style.accentColor = "red"
            }
        }
    }
}

// Function used to render the topics listed in the dropdown by creating each html element as it loops through the data saved to local memory.
function renderTopics() {
  // Set the dropdown element to null to recreate the saved topics. Avoids duplicates.
  topicDD.innerHTML = "";

  // Accessing and modifying the option tags within the select tag in main.html.
  const newTp = document.createElement("option");
  newTp.setAttribute("class", "topicOptns");
  newTp.setAttribute("value", "Default");
  newTp.textContent = "Default";

  // Add the "Default" option to the select tag.
  topicDD.appendChild(newTp)

  // Loops through the newTopics array and for each element it created am option tag and modifies the attributes to fit the other functions.
  for(const [count, tpc] of Object.entries(newTopic)) {
    const newTp = document.createElement("option");
    newTp.setAttribute("class", "topicOptns");
    newTp.setAttribute("value", tpc);
    newTp.textContent = tpc;

    // Appends the new option to the select tag.
    topicDD.appendChild(newTp)
  }
}

// Function used to save the topics entered by the user by saving them to the browsers local storage.
function saveTopics() {
  // Converting the items array to a string.
  const stringItems = JSON.stringify(newTopic);
  // 'localStorage' is the built-in variable that you can use to write to the browsers local storage
  localStorage.setItem(storageKey, stringItems)
}

// Function used to add a new topic to the list of topics displayed on topics.html
function addTopic() {
  const value = topicInput.value

  // Error checking to make sure the user is not giving an empty list item.
  if (!value) {
      alert("You cannot add an empty item.")
      return
  }
  // Adding the value to the array items.
  newTopic.push(value)
  // Update the list in topics.html to display the list with the new item.
  renderTopics()
  // Resetting the input value so that it is blank when you click the add button.
  topicInput.value = ""
  // Save to memory.
  saveTopics()
}

// Function used to delete a topic from the list when the "x" button is clicked. It does this by using splice() to cut a segment out of the array.
function deleteTopic(indx) {
  // splice(): takes in an index and amount value to cut a segment our of an array. In this instance, I am sending the index value of the selected item on the list and a amount of 1 to remove that item off of the list.
  newTopic.splice(indx, 1)
  // Update the list in topics.html to display the list with item deleted.
  renderTopics()
  // Save to memory.
  saveTopics()
}

// Function used to load the list of topics from local storage, then calls renderTopics for them to be displayed.
function loadTopics() {
  // Getting the list data from the local storage.
  const oldItems = localStorage.getItem(storageKey)
  // Checking to make sure there is a value and if so, convert it back to an array.
  if (oldItems) newTopic = JSON.parse(oldItems)
  // Update the list in topics.html to display the loaded items.
  renderTopics()

  const selectedValue = localStorage.getItem('selectedTopic');
    if (selectedValue) {
      // Set the selected value of the <select> element
      topicDD.value = selectedValue;
    }
}

// Accessing the elements of addQues.html to gather the input and create a new question object in the questions array.
let quesTopic = document.getElementById("ques-topic")
let quesInput = document.getElementById("quest")
let optionA = document.getElementById("ans-one")
let optionB = document.getElementById("ans-two")
let optionC = document.getElementById("ans-three")
let optionD = document.getElementById("ans-four")
let corAns = document.getElementById("correct-ans")


function saveQues() {
  localStorage.setItem('questions', JSON.stringify(questions));
}

function loadQues() {
  const storedQues = localStorage.getItem('questions')
  if (storedQues) {
    questions = JSON.parse(storedQues)
  }
}

function addQues() {
  const memQues = localStorage.getItem('questions') ;
  let parsedQues = [];

  if (memQues) {
    parsedQues = JSON.parse(memQues);
  }

  const newQues = {
    qid: questions.length > 0 ? parsedQues[parsedQues.length - 1].qid + 1 : 1,
    qtopic: quesTopic.value,
    text: quesInput.value,
    ansOne: optionA.value,
    ansTwo: optionB.value,
    ansThree: optionC.value,
    ansFour: optionD.value,
    correctAnswer: corAns.value
  };

  console.log(newQues)

  parsedQues.push(newQues);

  localStorage.setItem('questions', JSON.stringify(parsedQues));
  // saveQues();

  idx = filteredQues.length;
}

// #############################################################

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === '/Intermediate/QuizApp/templates/main.html') {
      // Execute your code here
      let topicDD = document.getElementById("topics")

      if(topicDD) {
        topicDD.addEventListener('change', function() {
          if (window.location.pathname === '/Intermediate/QuizApp/templates/main.html') {
            localStorage.setItem('selectedTopic', topicDD.value);
            location.reload();
          }
        });
      }
      loadTopics()
      loadQues()
      displayQues(idx, topicDD.value); 
  } else if (window.location.pathname === '/Intermediate/QuizApp/templates/addQues.html') {
    // loadTopics()
    loadQues()
    // displayQues(idx, topicDD.value); 
}
});