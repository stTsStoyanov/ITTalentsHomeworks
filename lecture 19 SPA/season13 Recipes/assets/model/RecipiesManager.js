class Recipe{
    constructor(title, href, ingredients, thumbnail) {
        this.title = title;
        this.href = href;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
    }
}

class RecipeManager{
    constructor(){
        this.recipeList = DATA.map(recipie => new Recipe(
            recipie.title,
            recipie.href,
            recipie.ingredients,
            recipie.thumbnail
        ));
    }

    favRecipes = [];

    addToFav(titleRecipe){
        let recipeInFav = this.favRecipes.find(element => element.title === titleRecipe.title);
        let indexRecipeInFav = this.favRecipes.findIndex(element => element.title === titleRecipe.title);

        if(!recipeInFav){
            this.favRecipes.push(titleRecipe);
        }else{
            // this.favRecipes.splice(titleRecipe, 1) // ne raboti korektno
            this.favRecipes.splice(indexRecipeInFav, 1) //ne raboti korektno
        }

    }

    createRecipe(title, href, ingredients, thumbnail){
        this.recipeList.unshift(new Recipe(
            title,
            href,
            ingredients,
            thumbnail
        ));
        // return new Recipe(
        //     title,
        //     href,
        //     ingredients,
        //     thumbnail
        // );
    }

    search(keyword){
        return this.recipeList.filter(element => {
            return element.ingredients.toLowerCase().includes(keyword.trim().toLowerCase());
        })
    }
}