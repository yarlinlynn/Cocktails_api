// ALL API CALLS

export default class CocktailAPI {
    constructor() {
        this.baseUrl = "https://www.thecocktaildb.com/api/json/v1/1";
    }

    // fetch drinks at random from api
    async fetchRandomDrink(count = 40) {
        try {
            
            const promises = Array.from({ length: count }, () =>
                fetch(`${this.baseUrl}/random.php`).then(res => res.json())
            );

            
            const results = await Promise.all(promises);

            
            const drinks = results
                .map(r => r.drinks?.[0])
                .filter(Boolean);

            return drinks;
        } catch (error) {
            console.error("Error fetching random drinks:", error);
            return [];
        }
    }

    // fetch drink by name using searchbar

    // fetch drink based on alcoholic type

    // fetch drink based on category

    // fetch drink based based on ID opening up a details modal
    async fetchDrinkId(id) {
        try{
            const response = await fetch(`${this.baseUrl}/lookup.php?i=${id}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text(); 
            if (!text) {
            throw new Error("Empty response from API");
            }

            const data = JSON.parse(text);
            return data.drinks ? data.drinks[0] : null;
        } catch(error) {
            console.error("Error fetching drink details:", error);
        }
    }
}