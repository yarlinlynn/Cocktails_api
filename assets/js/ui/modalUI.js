import CocktailAPI from '../api/cocktailAPI.js';
import CocktailDetails from '../utils/Cocktail.js';

export default async function openDrinkDetails(id, api = CocktailAPI) {
  try {
  const drinkDetail = await api.fetchDrinkId(id);

  const cocktail = new CocktailDetails(drinkDetail);

  const modal = document.createElement("section");
  modal.classList.add("drink-details", "show");
  modal.innerHTML = `
    <button class="close-btn">
      <i class="ri-close-circle-fill"></i>
    </button>
    <div class="content">
      <div class="polarid">
        <h2>${cocktail.name}</h2>
        <img src="${cocktail.image}" alt="${cocktail.name}" />
      </div>
      <h4>${cocktail.type}</h4>
      <p><strong>Instructions:</strong> ${cocktail.instructions}</p>
      <h4>Ingredients:</h4>
      <ul>${cocktail.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
    `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.remove();
  });

  } catch (error) {
    console.error("Error fetching drink details:", error);
  }
}
