function toggleMenu()
{
    const headerRight = document.querySelector('.header-right');

    // Toggle the 'show' class to display or hide the links
    headerRight.classList.toggle('show');
}


// Fetch data from the API
fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image')
    .then(response => response.json())
    .then(data =>
    {
        const recipes = data.recipes; // Access the recipes array
        const recipeContainer = document.getElementById('recipe-container');

        // Create and append cards for each recipe
        recipes.forEach(recipe =>
        {
            const card = document.createElement('div');
            card.className = 'card';

            // Create an image element
            const img = document.createElement('img');
            img.src = recipe.image; // Set image source
            img.alt = recipe.name; // Set alt text

            // Create a title element
            const title = document.createElement('h3');
            title.textContent = recipe.name; // Set title text

            // Append image and title to the card
            card.appendChild(img);
            card.appendChild(title);

            // Append card to the recipe container
            recipeContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
