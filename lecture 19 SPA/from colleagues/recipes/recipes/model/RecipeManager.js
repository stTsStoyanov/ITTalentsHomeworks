class Recipe {
    constructor (title,href,ingredients,thumbnail) {
        this.title = title;
        this.href = href;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
    }
}

class RecipeManager {
    constructor () {
        this.recipes = data.map(recipe => new Recipe(
            recipe.title,
            recipe.href,
            recipe.ingredients,
            recipe.thumbnail
        ))
    }

    
}