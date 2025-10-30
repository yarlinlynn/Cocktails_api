// Reusable functions 
import { renderDrinkToDom } from '../ui/renderUI.js'

// loading state
export async function loadDrinks(api, container) {

    const loadingState = document.createElement("div");
    loadingState.classList.add("loading-state");
    loadingState.innerHTML = `
        <span class="loading-spinner"></span>
        <p class="loading-text">Loading Drinks ...</p>
    `;
    container.innerHTML = ""; 
    container.appendChild(loadingState);

    try {
        const drinks = await api.fetchRandomDrink();

        loadingState.remove();

        renderDrinkToDom(drinks, container);
    } catch (error) {
        console.error("Error loading drinks:", error);
        loadingState.innerHTML = `<p class="loading-text">Failed to load drinks.</p>`;
    }
}
