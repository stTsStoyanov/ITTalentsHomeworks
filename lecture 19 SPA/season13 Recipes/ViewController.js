class ViewController{
    constructor(){
        // window.addEventListener('hashchange', this.handleHashChange);
        // window.addEventListener('load', this.handleHashChange);

        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', this.handleHashChange);

        //managers!
        this.recipieManager = new RecipeManager();
    }



    handleHashChange = () => {
        let hashIds = ["allRecipies", "favoritRecipies", "createRecipies", "myProfile"];

        let hash = window.location.hash.slice(1) || "allRecipies";


        hashIds.forEach(element => {
            let currentHash = document.getElementById(element);

            if(hash === element){
                currentHash.style.display = 'block';
            }else{
                currentHash.style.display = 'none';
            }
        });

        console.log(this.recipieManager.recipeList)

        switch(hash){
            case "allRecipies":
                // this.renderRecipe();
                this.renderAllRecipies();
                break;
            case "favoritRecipies":
            case "createRecipies":
                this.renderCreateRecipies();
                break;
            case "myProfile":
            
            default: hash = "WrongPage";
                break;
        }
    }


    renderRecipe = (recipeList, container) =>{  //handler of inputs
        // recipeList.forEach(el => console.log(el))

        container.innerHTML = "";

        recipeList.forEach(recipe => {

            let card = document.createElement('div');
            card.classList.add = 'card';
            card.style.width = 200;
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.border = '2px solid black'
            card.style.justifyContent = 'center'
            card.style.alignItems = 'center'       


            let linkImg = document.createElement('a');
            linkImg.style.textDecoration = 'none';
            linkImg.href = recipe.href;

            let img = document.createElement('img')
            img.src = recipe.thumbnail;
            img.width = 200;

            linkImg.append(img)

            let name = document.createElement('div');
            name.innerText = recipe.title;
            // name.id = recipe.title
            name.className = recipe.title//'name';

            let recipeCount = document.createElement('div');
            recipeCount.innerText = recipe.ingredients + " ";
            recipeCount.classList.add = ('ingredients');

            let hrefData = document.createElement("div");
            hrefData.innerText = recipe.href;
            hrefData.classList.add = ('hrefData');

            let buttonContainer = document.createElement('div')
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'space-between'
            buttonContainer.style.marginLeft = '25%'
            buttonContainer.style.marginRight = '25%'

            let buttonFav = document.createElement('button');
            buttonFav.innerText = 'Добави в любими';
            buttonFav.classList.add = 'addToFav'

            buttonFav.addEventListener('click', (event) => {
                let targetContainer = document.querySelector('#favoritRecipies .container');
                             

                if(!this.recipieManager.favRecipes.includes(recipe)){

                    this.recipieManager.addToFav(recipe);
                    targetContainer.appendChild(card);

                    console.log(`NOW we are adding element to arr ${this.recipieManager.favRecipes}`)

                }else{

                    targetContainer.removeChild(card);
                    // this.recipieManager.favRecipes.splice(recipe, 1) // otherwise the recipe is sill in my array and i cannot add the cart again!
                    console.log(`NOW we are REMOVING element to arr ${this.recipieManager.favRecipes}`)
                }

            })

            let buttonCook = document.createElement('button');
            buttonCook.innerText = 'Сготви';
            buttonCook.classList.add = 'cookIt'

            buttonContainer.append(buttonFav, buttonCook)


            card.append(
                // img,
                linkImg,
                name,
                recipeCount,
                hrefData,
                buttonContainer
                // buttonFav,
                // buttonCook
            );

            console.log(card);

            container.appendChild(card);
        });


    }

    renderAllRecipies = () =>{
        let cardContainer = document.querySelector('#allRecipies .container');
        let input = document.getElementById('searchInput');
        let input2 = document.getElementById('searchInput2');

        input.addEventListener('input', (event) =>{
            let result = this.recipieManager.search(event.target.value);
            this.renderRecipe(result, cardContainer);
        });

        input2.addEventListener('input', (event) =>{
            let result = this.recipieManager.search(event.target.value);
            this.renderRecipe(result, cardContainer);
        });

        this.renderRecipe(this.recipieManager.recipeList, cardContainer);
    }



    submitForm = (event) => { // handler of deliveryForm eventListener
        console.log("Submit");
        console.log(event.currentTarget.recipeText.value)
        event.preventDefault();

        let recipeName = String(event.currentTarget.name.velue); //moje bi da go naprave na textArea!?!
        let recipeText = event.currentTarget.recipeText.value;
        let recipeLink = event.currentTarget.linkTo.value
        let recipeImg = event.currentTarget.img.value;
        
        this.recipieManager.createRecipe(recipeName, recipeLink, recipeText, recipeImg)
        

        //OTHER WAY TO ADD NEW RECIPE!!!!

        // let newRecipe = [];
        // newRecipe.push(this.recipieManager.createRecipe(recipeName, recipeLink, recipeText, recipeImg));

        // console.log(newRecipe);

        // let div = document.querySelector('#allRecipies .container');

        // this.renderRecipe(newRecipe, div);


    }

    renderCreateRecipies = () => {

        let deliveryForm = document.getElementById('recipeForm');

        deliveryForm.removeEventListener('submit', this.submitForm);

        deliveryForm.addEventListener('submit', this.submitForm)

    }

}

let viewController = new ViewController();