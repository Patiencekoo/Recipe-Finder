// Sample recipe data
const recipes = [
  {
      name: "Pancakes",
      ingredients: ["eggs", "flour", "milk", "sugar"],
      steps: "Mix all ingredients, heat a pan, and cook pancakes.",
      image: "image/pancake.jpg" 
  },
  {
      name: "Omelette",
      ingredients: ["eggs", "cheese", "onions"],
      steps: "Beat eggs, add onions and cheese, cook in a pan.",
      image: "https://via.placeholder.com/150?text=Omelette" 
  },
  {
      name: "Sugar Cookies",
      ingredients: ["flour", "sugar", "butter"],
      steps: "Mix ingredients, form dough, bake cookies.",
      image: "image/cookie.jpg" // Updated placeholder image
  }
];

// Function to search for recipes based on entered ingredients
function searchRecipes() {
  const input = document.getElementById('ingredient-input').value.toLowerCase().split(',').map(item => item.trim());
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = ''; // Clear previous results

  // Filter recipes based on the ingredients input by the user
  const filteredRecipes = recipes.filter(recipe => {
      return recipe.ingredients.every(ingredient => input.includes(ingredient));
  });

  // Display the filtered recipes
  if (filteredRecipes.length > 0) {
      filteredRecipes.forEach(recipe => {
          const recipeItem = document.createElement('div');
          recipeItem.classList.add('recipe-item');
          recipeItem.innerHTML = `
              <h3>${recipe.name}</h3>
              <img src="${recipe.image}" alt="${recipe.name}">
              <h4>Ingredients:</h4>
              <ul>
                  ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
              </ul>
              <p><strong>Steps:</strong> ${recipe.steps}</p>
          `;
          recipeList.appendChild(recipeItem);
      });
  } else {
      recipeList.innerHTML = '<p>No recipes found with those ingredients.</p>';
  }
}

// Set event listener on the search button
document.getElementById('search-button').addEventListener('click', searchRecipes);
