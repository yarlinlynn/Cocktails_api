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
}