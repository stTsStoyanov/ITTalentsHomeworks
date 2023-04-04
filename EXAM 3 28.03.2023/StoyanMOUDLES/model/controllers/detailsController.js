import { cocktailsManager } from "../cocktailsManager.js";

class DetailsController {
    constructor() {

    }

    render = (id) => { // drink ID

        cocktailsManager.listFav()
            .then(favDrinksServer => { // get all fav drinks

                let container = getEl('details');
                container.style.border = '2px solid gray'
                container.style.margin = '25px';
                container.innerHTML = '';

                cocktailsManager.detailsById(id) // get deatils for the drink by id
                    .then(data => { // the details

                        // CREATING CARD CONTAINER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                        let div = createEl('div');
                        div.style.display = 'flex';
                        div.style.width = '800px';

                        let pictureContainer = createEl('div');
                        pictureContainer.style.display = 'flex';
                        pictureContainer.style.flexDirection = 'column';
                        pictureContainer.style.justifyContent = 'center';
                        pictureContainer.style.padding = '20px';
                        pictureContainer.style.width = '400px';
                        pictureContainer.style.background = 'green'
                        let img = createEl('img');
                        img.src = data.drinks[0].strDrinkThumb;
                        img.width = '350';
                        img.hight = '350';
                        let alcoholic = createEl('h3');
                        alcoholic.innerText = data.drinks[0].strAlcoholic;
                        pictureContainer.style.borderRight = '2px solid gray';
                        pictureContainer.append(img, alcoholic);

                        let textContainer = createEl('div');
                        textContainer.style.display = 'flex';
                        textContainer.style.flexDirection = 'column';
                        textContainer.style.width = '400px';
                        textContainer.style.padding = '20px'
                        // textContainer.style.background = 'pink'

                        let h1 = createEl('h1');
                        let tag = createEl('h3');
                        tag.innerText = data.drinks[0].strTags ? data.drinks[0].strTags : 'There are no tags';
                        let h2 = createEl('h3');
                        let h3 = createEl('h3');
                        let h4 = createEl('h3');
                        h1.innerText = data.drinks[0].strDrinkAlternate ? data.drinks[0].strDrink + ", " + data.drinks[0].strDrinkAlternate : data.drinks[0].strDrink;
                        h2.innerText = data.drinks[0].strGlass;
                        h3.innerText = data.drinks[0].strInstructions;
    
                        textContainer.append(h1, tag, h2, h3);
                        //CREATED CARD CONTAINER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                        let ingradientForCardFav = createEl('div');// container for all ingradients

                        let allKeys = Object.keys(data.drinks[0]); // get all data.drinks KEYs in allKeys prop
                        for (let i = 0; i < allKeys.length; i++) {// iteration over these keys
                            if (allKeys[i].includes('strIngredient')) {
                                // console.log(allKeys[i])
                                if (data.drinks[0][allKeys[i]] != null) {
                                    let p = `<p class="card-text">${data.drinks[0][allKeys[i]]}</p>`;
                                    textContainer.innerHTML += (p);

                                    ingradientForCardFav.innerHTML += p; // adding the ingradients in another div i case that the card goes to fav section!
                                }
                            }
                        }

                        let buttons = createEl('div');
                        buttons.style.display = 'flex';
                        buttons.style.justifyContent = 'center';
                        buttons.style.margin = '15px';

                        let add = createEl('input');
                        add.type = 'submit';
                        add.value = 'Add to fav';
                        add.style.width = '100px';

                        favDrinksServer.favorites.forEach(favData => { // iterating over the favorit drinks, if the drink is in fav list change the value of the button from "add fo fav" to "remove from fav"
                            if (favData == id) {
                                add.value = 'Remove from fav';
                            }
                        })

                        let otherCocktails = getEl('otherCocktails');
                        let favCocktails = getEl('favCocktails');

                        add.onclick = (event) => {
                            location.hash = 'cocktails';

                            let favBtn = getEl('favBtn');
                            let name1 = 'Add to fav';
                            let name2 = 'Remove from fav';
                            if (event.target.value == 'Add to fav') {
                                cocktailsManager.addToFav(data.drinks[0].idDrink) // add the drink to favorite
                                    .then(el => {
                                        event.target.value = name2;
                                        this.cardRender(data, ingradientForCardFav)  // call cardRender and pass data which is detailed info regarding the drink and ingradient which is container with all ingradients
                                            .then(resultCard => { //resultCard is the HTML of my card with all data added to the card such as pic, titel, ingradients and so on!
                                                favCocktails.append(resultCard) // append resultCard /the HTML of the card/ to the favorite section
                                     
                                            })
                                    })
                            } else {
                                cocktailsManager.removeFromFav(data.drinks[0].idDrink) // remove the drink from favorite
                                    .then(el => {
                                        event.target.value = name1;
                                        this.cardRender(data, ingradientForCardFav)
                                            .then(resultCard => {
                                                otherCocktails.append(resultCard)
                                            })
                                    })
                            }
                            console.log(event.target.value);

                        }


                        buttons.append(add);

                        textContainer.append(buttons);


                        div.append(pictureContainer, textContainer);
                        container.append(div);
                    })




            })


    }

    // the idea of cardRender is -> if i read details of a drink and i like the drink by clicking on the "Add to fav" button to create card with that drink and place it in favorite drinks section or "Remove from fav" depends on the user/me!
    
    cardRender = (data, ingradients) => { // data is detailed info for the drink
                                         // ingradients is div container with all the ingradiants for the drink

        return cocktailsManager.listFav() // request for favorite driks, returns array with driks
            .then(favDrinksServer => { // array with fav drinks

                let otherCocktails = getEl('otherCocktails');
                let favCocktails = getEl('favCocktails');

                let card = createEl('div');
                card.classList.add('card')
                card.style.width = '250px'
                card.innerHTML =

                    `  
                    <img src="${data.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.drinks[0].strDrink}</h5>
                    </div>  
                    `;

                if (data.drinks[0].strDrinkAlternate) { // if other name 
                    let h = `<h5 class="card-title">${data.drinks[0].strDrinkAlternate}</h5>`
                    card.append(h);
                }

                card.append(ingradients); // appending the ingradients list to the card


                let buttons = createEl('div');
                buttons.style.display = 'flex';
                buttons.style.justifyContent = 'space-between';


                let favBtn = createEl('input');
                favBtn.setAttribute("id", "favBtn")
                favBtn.type = 'submit';
                favBtn.value = 'Add to fav';
                favBtn.style.width = '100px'


                let details = createEl('input');
                details.type = 'submit';
                details.value = 'Details';
                details.style.width = '100px';


                details.onclick = (event) => {
                    location.hash = 'details';
                    this.render(data.drinks[0].idDrink);
                }



                favBtn.onclick = (event) => { // onclick to favorit drinks button
                    let name1 = 'Add to fav';// name in case that the drink IS NOT in favotires
                    let name2 = 'Remove from fav'; // name in case that the drink IS in favorites
                    if (event.target.value == 'Add to fav') { // if true drink must be added to FAV
                        cocktailsManager.addToFav(data.drinks[0].idDrink) // make request and add to FAV
                            .then(el => {
                                event.target.value = name2;
                                favCocktails.append(card); // append the card to section with fav driks
                            })
                    } else {
                        cocktailsManager.removeFromFav(data.drinks[0].idDrink) // make request and remove from FAV
                            .then(el => {
                                event.target.value = name1;
                                otherCocktails.append(card);// append the card to section with all driks list
                            })
                    }
                }


                let flag = false;

                favDrinksServer.favorites.forEach(favData => {// iterating trough the data from FAV Drinks

                    if (favData == data.drinks[0].idDrink) { // if the current drink is in FAV drinks 
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

                return card;

            })

    }
}


export let detailsController = new DetailsController();