import { cocktailsManager } from "../cocktailsManager.js";
import { userManager } from "../userManager.js";
import { detailsController } from "./detailsController.js";


class CocktailsController {
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

    drinkOfTheDay = () => {
        cocktailsManager.cocktailOfTheDay()
            .then(data => {
                let ofTheDay = getEl('ofTheDay');
                ofTheDay.style.border = '1px solid gray'
                ofTheDay.style.padding = '10px';
                ofTheDay.innerHTML = '';

                let card = createEl('div');
                card.classList.add('card')
                card.style.width = '250px'
                card.innerHTML =

                    `  
                    <h5 class="card-title">COCKTAIL OF THE DAY</h5>
                    <img src="${data.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.drinks[0].strDrink}</h5>
                    </div>  `;

                if (data.drinks[0].strDrinkAlternate) { // if other name 
                    let h = `<h5 class="card-title">${data.drinks[0].strDrinkAlternate}</h5>`
                    card.append(h);
                }

                let allKeys = Object.keys(data.drinks[0]); // get all keys of drinks response
                // console.log(allKeys)
                for (let i = 0; i < allKeys.length; i++) { // iterating over all keys
                    if (allKeys[i].includes('strIngredient')) { // if the key is ingrediant
                        // console.log(allKeys[i])
                        if (data.drinks[0][allKeys[i]] != null) { // if the current drink have that ingrediant
                            let p = `<p class="card-text">${data.drinks[0][allKeys[i]]}</p>`; // create paragraph with the ingrediant 
                            card.innerHTML += p; //add the ingrediant to the cocktail card
                        }
                    }
                }

                let buttons = createEl('div'); // buttons container
                buttons.style.display = 'flex';
                buttons.style.justifyContent = 'center';


                let details = createEl('input'); // create button for drink details
                details.type = 'submit';
                details.value = 'Details';
                details.style.width = '100px';


                details.onclick = (event) => { // on click go to details page
                    location.hash = 'details';
                    detailsController.render(data.drinks[0].idDrink);  // render the details for the drink 
                }

                buttons.append(details)
                card.append(buttons)

                ofTheDay.append(card);

            })
    }



    renderDrinks = () => {

        let searchCocktailsInput = getEl('searchCocktailsInput');

        searchCocktailsInput.oninput = debounce((event) => {
            event.preventDefault();

            let keyword = event.target.value;

            cocktailsManager.searchByName(keyword)
                .then(cocktail => {
                    this.allDrinks(cocktail)
                })

        }, 500)


        cocktailsManager.cocktailsByChar()
            .then(data => {
                this.allDrinks(data)
            })
    }

    // favorits = (id, card) => {
    //     let favCocktails = getEl('favCocktails');
    //     // favCocktails.innerHTML = '';

    //     cocktailsManager.listFav(id)
    //         .then(data => {
    //             console.log(data)
    //             data.favorites.forEach(element => {
    //                 console.log(element)
    //             });
    //         })
    // }


    allDrinks = (data) => { // render drinks according the passed argument


        // console.log('In cocktailController, allDrinks(data) printing the passed DATA:')
        // console.log(data)

        let otherCocktails = getEl('otherCocktails'); // section with other cocktails
        otherCocktails.innerHTML = '';

        let favCocktails = getEl('favCocktails'); // section with favorites
        favCocktails.style.display = 'flex';


        cocktailsManager.listFav() // request for favorite driks, returns array with driks
            .then(favDrinksServer => { // array with fav drinks 
                                        //if i have fav drinks i will receive array with drinks otherwise i will receive empty array



                for (let i = 0; i < data.drinks.length; i++) { // data is the response of cocktailsByChar or searchByName, this is what func allDrinks get as a input


                    let card = createEl('div');
                    card.classList.add('card')
                    card.style.width = '250px'
                    card.innerHTML =

                        ` <div> 
                            <img src="${data.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${data.drinks[i].strDrink}</h5>
                        </div>  `;


                    let buttons = createEl('div'); // buttons container
                    buttons.style.display = 'flex';
                    buttons.style.justifyContent = 'space-between';


                    let favBtn = createEl('input'); // button to add/remove drink to/from favorites
                    favBtn.setAttribute("id", "favBtn")
                    favBtn.type = 'submit';
                    favBtn.value = 'Add to fav';
                    favBtn.style.width = '100px'



                    let details = createEl('input'); // button to see details regarding the drink 
                    details.type = 'submit';
                    details.value = 'Details';
                    details.style.width = '100px';



                    details.onclick = (event) => {
                        location.hash = 'details';
                        detailsController.render(data.drinks[i].idDrink); // call detailsController.render and pass to render the drink ID
                    }




                    if (data.drinks[i].strDrinkAlternate) { // if other name 
                        let h = `<h5 class="card-title">${data.drinks[i].strDrinkAlternate}</h5>` // create h5 with that alternate name
                        card.append(h); // append that alternate name
                    }

                    let allKeys = Object.keys(data.drinks[i]); // get all data.drinks KEYs in allKeys prop
                    // console.log(allKeys)
                    for (let j = 0; j < allKeys.length; j++) {// iteration over these keys
                        if (allKeys[j].includes('strIngredient')) { //if that key includes 'strIngredient' -> i have ingredient which i must include in my cocktail card
                            // console.log(allKeys[j])
                            if (data.drinks[0][allKeys[j]] != null) { // if the value of the porperty is != null
                                let p = `<p class="card-text">${data.drinks[0][allKeys[j]]}</p>`; // create p with the ingradient!
                                card.innerHTML += p; // add that ingradient to the card HTML
                            }
                        }
                    }




                    // if (favDrinksServer.favorites.includes(data.drinks[i].idDrink)) {
                    //     favCocktails.append(card);
                    // } else {
                    //     otherCocktails.append(card);
                    // }



                    favBtn.onclick = (event) => { // onclick to favorit drinks button
                        let name1 = 'Add to fav';// name in case that the drink IS NOT in favotires
                        let name2 = 'Remove from fav'; // name in case that the drink IS in favorites
                        if (event.target.value == 'Add to fav') { // if true drink must be added to FAV
                            cocktailsManager.addToFav(data.drinks[i].idDrink) // make request and add to FAV
                                .then(el => {
                                    event.target.value = name2;
                                    favCocktails.append(card); // append the card to section with fav driks
                                    // this.favorits()
                                })
                        } else {
                            cocktailsManager.removeFromFav(data.drinks[i].idDrink) // make request and remove from FAV
                                .then(el => {
                                    event.target.value = name1;
                                    otherCocktails.append(card);// append the card to section with all driks list
                                })
                        }
                        console.log(event.target.value);
                    }




                    let flag = false;
                    favDrinksServer.favorites.forEach(favData => {// iterating trough the data from FAV Drinks
                        // console.log(favData)
                        // console.log('sledvashtoto e ot data');

                        // console.log(data.drinks[i].idDrink)// print the drink id!

                        if (favData == data.drinks[i].idDrink) { // if the current drink is in FAV drinks 
                            flag = true; //  flag is true so the card goes in fav section
                            favBtn.value = 'Remove from fav' // change the value of the button to remove from fav, because in case of click the card will be removed from FAV section!
                        }
                    })

                    buttons.append(favBtn, details)
                    card.append(buttons)


                    if (flag) {// the drink is in favorits
                        favCocktails.append(card);
                    } else {// the drink is in the list of regular Cocktails
                        otherCocktails.append(card);
                    }


                }

            })

    }


}

export let cocktailsController = new CocktailsController();