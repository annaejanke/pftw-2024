// Declare game array
const games = [
  { title: 'Go Fish', type: 'Card Game', numberOfPlayers: '2+', rating: 2.0, shortDescription: 'The goal of the game is to collect as many complete sets of four numerically matching cards (one from each suit) as you can. Players can collect the cards they need from other players, or by fishing from the cards in the center.' },
  { title: 'Crazy Eights', type: 'Card Game', numberOfPlayers: '2+', rating: 4.0, shortDescription: 'The goal is to be the first player to get rid of all the cards in your hand. Five cards are dealt to each player, The remaining cards of the deck are placed face down at the center of the table as the stock pile. The top card is then turned face up to start the game as the first card in the discard pile. Players discard by matching rank or suit with the top card of the discard pile, starting with the player left of the dealer. They can also play any 8 at any time, which allows them to declare the suit that the next player is to play; that player must then follow the named suit or play another 8. If a player is unable to play, that player draws cards from the stock pile until a play can be made, or until the stock pile is exhausted. If the player cannot play when the stock pile is exhausted, that player must pass the turn to the player on the left.' },
  { title: 'Hearts', type: 'Card Game', numberOfPlayers: '4+', rating: 5.0, shortDescription: 'The goal is to be the player with the lowest score at the end of the game. When one player hits the agreed-upon score or higher, the game ends; and the player with the lowest score wins. Deal the cards one at a time. Each player must follow suit if possible. If a player is void of the suit led, a card of any other suit may be discarded. However, if a player has no clubs when the first trick is led, a heart or the queen of spades cannot be discarded. The highest card of the suit led wins a trick and the winner of that trick leads next. There is no trump suit. The winner of the trick collects it and places it face down. Hearts may not be led until a heart or the queen of spades has been discarded. The queen does not have to be discarded at the first opportunity. The queen can be led at any time.' }
];

// Prompt the user for input
const userGameInput = window.prompt("There are 3 games you can choose from. Pick a number between 1 and 3 and I'll tell you about that game!");

// Try to convert input into number
const userGameNumber = parseInt(userGameInput);

// Check if user gave us a number
if (isNaN(userGameNumber)) {
  alert('You input an invalid number. Please refresh the page and try again.')
}

// Check if user number is between 1-3
if (userGameNumber >= 4) {
  alert('You input a number that does not match a game. Please refresh the page and try again.')
}

if (userGameNumber <= 0) {
  alert('You input a number that does not match a game. Please refresh the page and try again.')
}

const userSelectedGame = games[userGameNumber - 1];

// Create one string for both outputs console and alert
const outputString = 'You selected game number ' + userGameNumber + ". That game's title is: " + userSelectedGame.title +
 '. The number of players for this game is: ' + userSelectedGame.numberOfPlayers + '. I personally give the game a ' +
 userSelectedGame.rating + ' out of 5 stars. The following is a short description of how to play: ' + userSelectedGame.shortDescription;

// Ouputs
console.log(outputString);
alert(outputString);
