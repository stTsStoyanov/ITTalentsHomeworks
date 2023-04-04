class CocktailsManager{
    constructor() {
        
    }

    listFav = () =>{ // rewuest for drinks in favorit list
        const sessionId = JSON.parse(localStorage.getItem('loggedTEST')).sessionId;
        return makeAPICall(SERVER_URL + '/favorite-cocktails',{
            method: "GET",
            headers: {
                'identity' : sessionId
            }
        })

    }

    addToFav = (coctailId) =>{ // request to add the drink in favorits
        const sessionId = JSON.parse(localStorage.getItem('loggedTEST')).sessionId;
        return makeAPICall(SERVER_URL + '/favorite-cocktails',{
            method: "POST",
            headers: {
                'identity' : sessionId,
                'Content-Type' : 'application/json'           
            },
            body: JSON.stringify({
                'id' : coctailId 
            })
        })
    }

    removeFromFav = (coctailId) =>{ // request to remove drink from favorits
        const sessionId = JSON.parse(localStorage.getItem('loggedTEST')).sessionId;
        return makeAPICall(SERVER_URL + `/favorite-cocktails`,{
            method: "DELETE",
            headers: {
                'identity' : sessionId,
                'cocktailId' : coctailId
            }
        })
    }


    cocktailOfTheDay = () =>{ // request to get cocktail of the day
        return makeAPICall('https://thecocktaildb.com/api/json/v1/1/random.php',{
            method: "GET"
        })
    }

    cocktailsByChar = () =>{ // request for driks by first letter
        return makeAPICall('https://thecocktaildb.com/api/json/v1/1/search.php?f=s',{
            method: "GET"
        })
    }
    
    searchByName = (keyword) =>{ // request for a drink by name 
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`,{
            method: "GET"
        })
    }

    
    detailsById = (id) =>{ // request for detail regarding drink
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,{
            method: "GET"
        })
    }




    categoriesSet = () =>{ // request for a drink categories, response a list of all categories
        return makeAPICall('https://thecocktaildb.com/api/json/v1/1/list.php?c=list',{
            method: "GET"
        })
    }


    searchByCategory = (keyword) =>{ // search by a category
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`,{
            method: "GET"
        })
    }

   
    glassesSet = () =>{ // request for a drinks glasses, response a list of all glasses
        return makeAPICall('https://thecocktaildb.com/api/json/v1/1/list.php?g=list',{
            method: "GET"
        })
    }

    searchByGlass = (keyword) =>{
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/filter.php?g=${keyword}`,{
            method: "GET"
        })
    }

    ingredientsSet = () =>{
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/list.php?i=list`,{
            method: "GET"
        })
    }

    searchByIngredient = (keyword) => {
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`,{
            method: "GET"
        })
    }

    getIngredientImg = (keyword) =>{
        return makeAPICall(`https://thecocktaildb.com/images/ingredients/${keyword}-Medium.png`,{
            method: "GET"
        })
    }

    alcoholicsSet = () =>{
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/list.php?a=list`,{
            method: "GET"
        })
    }

    searchByAlcoholic = (keyword) =>{
        return makeAPICall(`https://thecocktaildb.com/api/json/v1/1/filter.php?a=${keyword}`,{
            method: "GET"
        })
    }
 
}

export let cocktailsManager = new CocktailsManager();