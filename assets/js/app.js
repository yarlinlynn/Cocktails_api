import CocktailAPI from './api/cocktailAPI.js';
import { loadDrinks } from './utils/helpers.js';

document.addEventListener("DOMContentLoaded", function() {

    const drinksContainer = document.querySelector(".drinks-container")
    // const loadingDrinksContainer = document.querySelector(".loading")

    const api = new CocktailAPI();
    api.fetchRandomDrink().then(drinks => console.log(drinks));

    loadDrinks(api, drinksContainer)
})



