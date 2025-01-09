const title = document.querySelector('#title');

function changeColor()
{ // Rename function to avoid conflict with variable name
    let color = 'blue'; // Color should be a string

    title.setAttribute('style', 'color: ' + color); // Correct the style syntax
}