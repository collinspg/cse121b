/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Chibuike Collins Okolie";
let currentYear = 2024;
let profilePicture = "images/firefox2.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Picture of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["Grounut Soup and Eba", "Plantain", "Jollof Rice and Chicken", "Fufu and Egusi"];
foodElement.innerHTML = favFoods.join(", ");

let newFavFood = "Pasta";
favFoods.push(newFavFood);

foodElement.innerHTML += `<br>${favFoods.join(", ")}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;