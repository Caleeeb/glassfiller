// async function recipeFormHandler(event) {
// 	event.preventDefault();

// 	const ingredients = ingredientsArray.map(ingredient => {
//     name: ingredient.name;
//     quantity: ingredient.quantity;
//     unit: ingredient.unit;
//   })

//   if (comment_text) {
// 		const response = await fetch("/api/comments", {
// 			method: "POST",
// 			body: JSON.stringify({
//         title,
// 				ingredients,
// 				// desciption,
//         user_id,
// 			}),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		if (response.ok) {
// 			document.location.reload();
// 		} else {
// 			alert(response.statusText);
// 		}
// 	}
// }

// async function handleNewIngredient(event) {
//   const parentContainer = document.querySelector(".ingredient-container");
//   parentContainer.appendChild('<li class = "ingredient">)
//   //to do: create the input line for the added ingredient

// }

// const ingredientsArray = document.querySelectorAll(".ingredient")
// console.log(ingredientsArray);
// document.onclick(".add-ingredient", handleNewIngredient);
