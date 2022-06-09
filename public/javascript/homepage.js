const seedIngredients = require("../../seeds/ingredient-seeds");

async function render() {
   const response = await fetch( {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
   }); 
   if(response.ok) {
    const drinkTitle = document.querySelector('.title');
    const drinkDescription = document.querySelector('.desc');
console.log(seedIngredients);
    for (i = 0; i < Recipes.length)
   }
}