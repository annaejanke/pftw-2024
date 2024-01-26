const movies = ["Harry Potter", "Something Borrowed", "Guardians of the Galaxy", "Thor", "The Devil Wears Prada" ];

// Prompt the user for input
const user_movie_input = window.prompt("What is your favorite movie?");

// Push user input to movie array
movies.push(user_movie);

//Create output string for both outputs
let output_string = "Favorite Movie's" + movies.toString();

//Outputs
console.log(output_string);
alert(output_string);

