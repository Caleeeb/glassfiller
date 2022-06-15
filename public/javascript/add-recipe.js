async function addRecipe(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const ingredientList = document.querySelectorAll(".ingredients-row");
  // ingredientList.forEach
  // split (grab in reverse starting with last array position)
  // create a new object with split array and push to new array (map)

  // This isn't totally right yet and hasn't been tested
//   const ingredientsArray = [];
//   ingredientsList.forEach((ingredient) => {
//     const splitArr = ingredient.split(" ");
//     const unit = splitArr[splitArr.length - 1];
//     const quantity = splitArr[splitArr.length - 2];
//     const name = splitArr.slice(0, splitArr.length - 2).join(" ");
//     const obj = { name, quantity, unit };
//     ingredientsArray.push(obj);
//   });

  if (title && description && ingredientList) {
    // /api/users/login cannot be found for some reason
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // after successfully logging in, return to homepage
      document.location.replace("/");
      console.log("logged In");
    } else {
      const res = await response.json();
      console.log(res);
      alert(res.message);
    }
  }
}

function addIngredient(event) {
  event.preventDefault();

  const ingredient = document.querySelector("#name").value.trim();
  const quantity = document.querySelector("#quantity").value.trim();
  const unit = document.querySelector("#unit").value.trim();

  if (ingredient && quantity && unit) {
    var row = document.createElement("p");
    row.classList.add("ingredient-row");
    row.textContent = ingredient + " " + quantity + " " + unit;
    document.getElementById("ingredient-list").appendChild(row);
    document.querySelector("#name").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#unit").value = "";
  }
}

document
  .querySelector("#add-ingredient")
  .addEventListener("click", addIngredient);
document.querySelector(".submit-recipe").addEventListener("click", addRecipe);
