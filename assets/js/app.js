import CocktailAPI from './api/cocktailAPI.js';
import { loadDrinks } from './utils/helpers.js';

document.addEventListener("DOMContentLoaded", () => {

    const drinksContainer = document.querySelector(".drinks-container")

    const api = new CocktailAPI();
    api.fetchRandomDrink().then(drinks => console.log(drinks));

    loadDrinks(api, drinksContainer)
})



