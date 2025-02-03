


function toggleMenu()
{
    const headerRight = document.querySelector('.header-right');

    // Toggle the 'show' class to display or hide the links
    headerRight.classList.toggle('show');
}


fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image').then((data) => { return data.json(); }).then((value) => { console.log(value); });

