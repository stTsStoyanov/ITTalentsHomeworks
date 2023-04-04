import { cocktailsManager } from "../cocktailsManager.js";
import { cocktailsController } from "./cocktailsController.js";
import { userManager } from "../userManager.js";

class FilterContoller {
    constructor() {

    }

    displaySettings() {
        let logoutBtn = getEl('logoutBtn');
        let loginLink = getEl('loginLink');
        let logoutLink = getEl('logoutLink');
        let registerLink = getEl('registerLink');

        logoutLink.style.display = 'block';
        logoutLink.classList.add('nav-link');

        loginLink.style.display = 'none';
        loginLink.classList.remove()
        registerLink.style.display = 'none';
        registerLink.classList.remove();

        if (userManager.loggedUser) {
            let navUsername = getEl('navUsername');
            navUsername.innerText = userManager.loggedUser.username;
        }

    }

    render = () => {

        cocktailsManager.categoriesSet() // return array with categories
            .then(data => {
                // console.log(data)

                let container = document.getElementById('categories');
                container.innerHTML = '';

                let ul = createEl('ul');
                ul.classList.add("list-group", "link-opacity-50-hover");

                data.drinks.forEach(element => {
                    let li = createEl('li');
                    li.classList.add("list-group-item", "link-opacity-50-hover");

                    let aTag = createEl('a');
                    aTag.href = '#cocktails'
                    aTag.innerText = element.strCategory;

                    aTag.onclick = (e) => {

                        cocktailsManager.searchByCategory(element.strCategory) // return drinks list corresponding  to the particular category
                            .then(result => {
                                // console.log('tuk:');
                                // console.log(result)
                                cocktailsController.allDrinks(result); // pass the drinks list to the allDrinks render which creates card for every drink
                            })

                    }
                    li.append(aTag)
                    ul.append(li);

                });
                container.append(ul)
                // container.append(div);
            })


        cocktailsManager.glassesSet() // return array with glasses
            .then(data => {

                let container = getEl('glasses');
                container.innerHTML = '';


                data.drinks.forEach(glass => { //glass = type of the glass
                    let div = createEl('div');
                    div.style.width = '250px'
                    div.style.height = '30px';
                    div.style.border = '1px solid gray'
                    div.style.margin = '1px';
                    // div.style.background = 'white'

                    let aTag = createEl('a');
                    aTag.href = '#cocktails';
                    aTag.innerText = glass.strGlass;

                    aTag.onclick = () => {

                        cocktailsManager.searchByGlass(glass.strGlass) // return matches for every glass type
                            .then(result => {// result is all matches per glass category
                                // console.log(result)
                                cocktailsController.allDrinks(result) // 
                            })
                    }

                    div.append(aTag)
                    container.append(div);
                })

            })


        cocktailsManager.ingredientsSet() // return array with ingredients
            .then(data => {

                let container = getEl('ingredients');
                console.innerHTML = '';
                // console.log(data)
                data.drinks.forEach(ingredient => {

                    let card = createEl('div');
                    card.classList.add('card');
                    card.innerHTML =
                        ` <div> 
                            <img src="${`https://thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Medium.png`}" class="card-img-top" alt="...">
                          <div class="card-body">
                           
                          </div>  </div> `;


                    // console.log(ingredient.strIngredient1)

                    let aTag = createEl('a');
                    aTag.href = '#cocktails'
                    aTag.innerText = ingredient.strIngredient1;

                    aTag.onclick = () => {

                        cocktailsManager.searchByIngredient(ingredient.strIngredient1)
                            .then(result => {
                                console.log(result.drinks)
                                cocktailsController.allDrinks(result)
                            })
                    }

                    card.append(aTag)
                    container.append(card);

                })
            })

        cocktailsManager.alcoholicsSet()
            .then(data => {

                // console.log(data.drinks);
                let container = getEl('drinkType');
                container.innerHTML = '';

                data.drinks.forEach(alcoholic => { // alcoholic = type of the drunk, as alcoholic, non-alcoholic and optional alcohol

                    // console.log(alcoholic.strAlcoholic)
                    let aTag = createEl('a');
                    aTag.href = '#cocktails';
                    aTag.innerText = alcoholic.strAlcoholic;

                    cocktailsManager.searchByAlcoholic(alcoholic.strAlcoholic)
                        .then(result => {
                            // console.log(result);

                            aTag.onclick = () => {
                                cocktailsController.allDrinks(result);
                            }
                        })


                    container.append(aTag);
                })
            })

    }
}

export let filterController = new FilterContoller();