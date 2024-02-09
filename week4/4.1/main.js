// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put a h1 inside of it 

// create a new element 
const heading = document.createElement('h1');
heading.innerHTML = 'A group of llamas is called a herd.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = "mediumseagreen";
}
