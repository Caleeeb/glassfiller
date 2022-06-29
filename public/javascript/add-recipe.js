async function addRecipe(event) {
	event.preventDefault();

	const title = document.querySelector("#title").value.trim();
	const description = document.querySelector("#description").value.trim();
	const ingredientList = document.querySelectorAll(".ingredient-row");
	const ingredientArray = [];
	ingredientList.forEach((ingredient) => {
		const splitArr = ingredient.textContent.split(" ");
		const unit = splitArr[splitArr.length - 1];
		const quantity = splitArr[splitArr.length - 2];
		const name = splitArr.slice(0, splitArr.length - 2).join(" ");
		const obj = { name, quantity, unit };
		ingredientArray.push(obj);
	});

	console.log(ingredientArray);
	if (title && description && ingredientArray) {
		// /api/users/login cannot be found for some reason
		const response = await fetch("/api/recipes", {
			method: "post",
			body: JSON.stringify({
				title,
				description,
				ingredientArray,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			const res = await response.json();
			console.log(res);
			// after successfully logging in, return to homepage
			document.location.replace(`/recipes/${res.id}`);
		} else {
			const res = await response.json();
			console.log(res);
			// alert(res.message);
		}
	}
}

function addIngredient(event) {
	event.preventDefault();

	const ingredient = document.querySelector("#name").value.trim();
	const quantity = document.querySelector("#quantity").value.trim();
	const unit = document.querySelector("#unit").value.trim();
	// const garnish = document.querySelector("#garnish").value.trim();
	// console.log(ingredient, quantity, unit);

	if (ingredient && quantity) {
		var row = document.createElement("p");
		row.classList.add("ingredient-row");
		row.textContent = ingredient + " " + quantity + " " + unit;
		document.getElementById("ingredient-list").appendChild(row);
		document.querySelector("#name").value = "";
		document.querySelector("#quantity").value = "";
		document.querySelector("#unit").value = "";
		// document.querySelector("#garnish").value = false;
	}
}

document
	.querySelector("#add-ingredient")
	.addEventListener("click", addIngredient);
document.querySelector(".submit-recipe").addEventListener("click", addRecipe);
