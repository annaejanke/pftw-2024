const movies = [' Harry Potter', ' Something Borrowed', ' Guardians of the Galaxy', ' Thor', ' The Devil Wears Prada'];

// Prompt the user for input
const userMovieInput = window.prompt('What is your favorite movie?');

// Push user input to movie array
movies.push(' ' + userMovieInput);

// Create output string for both outputs
const outputString = "Favorite Movie's: " + movies.toString();

// Outputs
console.log(outputString);
alert(outputString);
