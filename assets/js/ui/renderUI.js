
// import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
// import Draggable from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/Draggable.js";
// gsap.registerPlugin(Draggable);
import openDrinkDetails from '../ui/modalUI.js';

export function renderDrinkToDom(drinks, container, api) {
  if (!drinks || drinks.length === 0) {
    container.innerHTML = `<p class="no-results">No drinks found.</p>`;
    return;
  }

  // Render drinks list
  container.innerHTML = drinks
    .map(drink => `
      <section class="drink" data-id="${drink.idDrink}">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <p class="drink-name">${drink.strDrink}</p>
      </section>
    `)
    .join("");

  // Add click listeners
  const drinkElements = container.querySelectorAll(".drink");
  drinkElements.forEach(element => {
    element.addEventListener("click", async () => {
      const drinkId = element.dataset.id;
      await openDrinkDetails(drinkId, api); 
    });
  });
}

