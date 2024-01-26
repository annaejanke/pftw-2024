// Declare game array
const games = [
    {title: "Uno", type: "", numberOfPlayers: "", rating: 0, shortDescription: ""},
    {title: "Test2", type: "", numberOfPlayers: "", rating: 0, shortDescription: ""},
    {title: "Test3", type: "", numberOfPlayers: "", rating: 0, shortDescription: ""}
];

// Prompt the user for input
const user_game_input = window.prompt("There are 3 games you can choose from. Pick a number between 1 and 3 and I'll tell you about that game!");

// Try to convert input into number
let user_game_number = parseInt(user_game_input);

// Check if user gave us a number
if (isNaN(user_game_number)) {
    alert("You input an invalid number. Please refresh the page and try again.")
}

// Check if user number is between 1-3
if (user_game_number >= 4) {
    alert("You input a number that does not match a game. Please refresh the page and try again.")
}

if (user_game_number <= 0) {
    alert("You input a number that does not match a game. Please refresh the page and try again.")
}

let user_selected_game = games[user_game_number - 1];

// Create one string for both outputs console and alert
let output_string = "You selected game number " + user_game_number + ". That game's title is: " + user_selected_game.title
 + ". The number of players for this game is: " + user_selected_game.numberOfPlayers + ". I personally give the game a " + 
 user_selected_game.rating + " out of 5 stars. The following is a short description of how to play: " + user_selected_game.shortDescription;

//Ouputs 
console.log(output_string);
alert(output_string);