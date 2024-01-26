// variable but has multiple slots
// let grid = undefined;
// let stroke1 = prompt("What is your favorite movie?", "Harry Potter");

// Open Terminal == Control + ` (button left of the 1)

const movie = ["Harry Potter", "Something Borrowed", "Guardians of the Galaxy", "Thor", "The Devil Wears Prada" ];
const user_movie = window.prompt("What is your favorite movie?");

movie.push(user_movie);

console.log("Favorite Moveis: " + movie.toString());

alert("Favorite Movies: " + movie.toString());

