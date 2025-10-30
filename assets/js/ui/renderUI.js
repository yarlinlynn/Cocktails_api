
// import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
// import Draggable from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/Draggable.js";
// gsap.registerPlugin(Draggable);

// render drinks fetched from API to the DOM

export function renderDrinkToDom(drinks, container, api) {
  if (!drinks || drinks.length === 0) {
    container.innerHTML = `<p class="no-results">No drinks found.</p>`;
    return;
  }

  container.innerHTML = drinks
    .map(drink => `
      <section class="drink" data-id="${drink.idDrink}">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <p class="drink-name">${drink.strDrink}</p>
      </section>
    `)
    .join("");

    const drinkElements = document.querySelectorAll(".drink");
    drinkElements.forEach(element => {
        element.addEventListener("click", async () => {
            const drinkId = element.dataset.id;
            // drinkDetailsPage(drinkId)
            try {
                const drinkDetails = await api.fetchDrinkId(drinkId);
                console.log(drinkDetails); 
            } catch (error) {
                console.error("Error fetching drink details:", error);
            }
        })
    })
}
