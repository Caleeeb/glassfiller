async function recipeFormHandler(event) {
	event.preventDefault();

const ingredientsArray = [{name:'Lime Juice', quantity: '3/4', unit: "oz"}, {name:'Orgeat', quantity: '1/2', unit: "oz"}];

	const ingredients = ingredientsArray.map(ingredient => ({
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit
  }));

  if (recipe_added) {
		const response = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({
                title,
		        ingredients,
				description,
               // user_id, grab from back end instead req.sessions
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

// async function handleNewIngredient(event) {
//   const parentContainer = document.querySelector(".ingredient-container");
//   parentContainer.appendChild('<li class = "ingredient">)
//   //to do: create the input line for the added ingredient
// };

// const ingredientsArray = document.querySelectorAll(".ingredient")
// console.log(ingredientsArray);
// document.onclick(".add-ingredient", handleNewIngredient);
