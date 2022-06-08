async function recipeFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector(".recipe-name").value.trim();
	const name = document.querySelector(".name").value.trim();
	const quantity = document.querySelector(".quantity").value.trim();
	const unit = document.querySelector(".unit").value.trim();
	const description = document.querySelector(".desciption").value;

	if (recipe_added) {
		const response = await fetch("/api/recipes", {
			method: "POST",
			body: JSON.stringify({
				title,
				description,
				name,
				quantity,
				unit,
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
document.onclick("submit-recipe", recipeFormHandler);
