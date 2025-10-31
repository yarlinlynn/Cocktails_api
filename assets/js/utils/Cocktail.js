// CLASS FOR DRINK DETAILS

export default class CocktailDetails {
    constructor( { idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strInstructions, ...rest } ) {
        this.id = idDrink;
        this.name = strDrink;
        this.image = strDrinkThumb;
        this.category = strCategory;
        this.type = strAlcoholic;
        this.instructions = strInstructions;
        this.ingredients = this.extractIngredients(rest);
    }

    extractIngredients(rest) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = rest[`strIngredient${i}`];
      const measure = rest[`strMeasure${i}`];
      if (ingredient) ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
    }
    return ingredients;
  }
}