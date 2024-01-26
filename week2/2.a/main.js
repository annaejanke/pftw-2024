// Quiz Questions credit: https://www.funtrivia.com/en/Geography/Minnesota-3921.html
const questions = [
  {
    question: "What is Minnesota's state bird?",
    answer: 'Loon'
  },
  {
    question: 'What fictional spokeswoman was created by General Mills in the 1920s?',
    answer: 'Betty Crocker'
  },
  {
    question: 'What is the stage name of the famous musician, Robert Zimmerman?',
    answer: 'Bob Dylan'
  },
  {
    question: 'What was the name of the first enclosed shopping mall built in Minnesota?',
    answer: 'Southdale'
  },
  {
    question: 'What is the largest lake completely inside Minnesota?',
    answer: 'Red Lake'
  },
  {
    question: 'What is the state fish?',
    answer: 'Walleye'
  },
  {
    question: 'What is the name of the river which starts in Lake Itasca?',
    answer: 'Mississippi'
  },
  {
    question: 'How many Legos have been lost in the Lego play area at the Mall of America?',
    answer: '170,000 and counting'
  }
];

// Find a random question
// Math random gives us something between 0 and 1 (less than)
// We multiple that by the array length, and then floor it so that we get an interger between 0-7.
// We will use that integer to access the question in the array
const questionIndex = Math.floor(Math.random() * questions.length);

const questionForUser = questions[questionIndex];

// Prompt the user with the question
const userGuess = window.prompt(questionForUser.question);

// Respond to user with their answer and the real answer

const output = 'You answered ' + userGuess + '. The correct answer was ' + questionForUser.answer + '.';

alert(output);
