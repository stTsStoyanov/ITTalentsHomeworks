class VController {
    constructor () {
        window.addEventListener("load", this.handleHashChange);
        window.addEventListener("hashchange",this.handleHashChange);
        this.recipeManager = new RecipeManager();
        this.ingredientsManager = new IngredientsManager();
        this.favoritesManager = new FavoriteManager();
        this.cookManager = new CookManager();
        this.data = data;
    }

    handleHashChange = () => {
        let hash = location.hash.slice(1) || "all";
        let hashList = ["all","favorites","create","profile"];

        hashList.forEach(id => {
            let page = document.getElementById(id);
            if (hash === id) {
                page.style.display = "flex";
                page.style.backgroundColor = "#62972e";
                page.style.flexDirection = "row";
                page.style.flexWrap = "wrap";
            } else {
                page.style.display = "none";
            }

            
        })

        switch (hash) {
            case "all":
                this.renderAll();
            case "favorites":
                this.renderFavorites();
            case "create":
                this.renderCreateRecipe();
            case "profile": 
                this.renderProfile();
        }
    }

    
        
    renderCards = (recipes,container) => {
        container.innerHTML = "";
        recipes.forEach(recipe => {
            let card = document.createElement("div");
            card.id = "card";
            card.style.display = "grid";
            card.style.gridTemplateRows = " 150px repeat(4,50px)";
            card.style.textAlign = "center";
            card.style.width = "20%";
            card.style.height = "20%";
            card.style.backgroundColor = "#04537d";
            
            let img = document.createElement("img");
            img.src = recipe.thumbnail;
            img.style.height = "150px";
            img.style.width = "200px";

            let linkToRecipe = document.createElement("a");
            linkToRecipe.href = recipe.href;
            linkToRecipe.appendChild(img);


            let heading = document.createElement("h2");
            heading.innerText = recipe.title;

            let ingredients = document.createElement("p");
            ingredients.innerText = recipe.ingredients;
            recipe.ingredients.split(",").forEach(ingredient => {
                this.ingredientsManager.ingredients.push(ingredient);
            })
            ingredients.style.textAlign = "center";

            let favoritesBtn = document.createElement("button"); 
            favoritesBtn.style.width = "100px";

            if (!this.favoritesManager.favorites.includes(recipe)) {
                favoritesBtn.innerText = "Add to favorites";
                
            } else {
                favoritesBtn.innerText = "Remove";
            }
            
            
            favoritesBtn.classList.add("favoritesBtn");
            favoritesBtn.addEventListener("click", () => {
                if (this.favoritesManager.favorites.includes(recipe)) {
                    this.favoritesManager.favorites = this.favoritesManager.favorites.filter(e => e.title !== recipe.title);
                    favoritesBtn.innerText = "Add to favorites";
                    this.renderCards(this.favoritesManager.favorites,document.getElementById("favorites"));
                } else {
                    this.favoritesManager.favorites.push(recipe);
                    favoritesBtn.innerText = "Remove";
                    this.renderCards(this.favoritesManager.favorites,document.getElementById("favorites"));
                }
            })
            
            

            let cookBtn = document.createElement("button");
            cookBtn.style.width = "100px";
            cookBtn.innerText = "Cook";
            cookBtn.addEventListener("click", () => {
                if (this.cookManager.cooked.find(e => e.name === recipe.title)) {
                    this.cookManager.cooked.find(e => e.name === recipe.title).cookCount++;
                } else {
                    this.cookManager.cooked.push(new CookedRecipe(recipe.title));
                }
                console.log(this.cookManager.cooked);
            });

            card.append(
                linkToRecipe,
                heading,
                ingredients,
                favoritesBtn,
                cookBtn
            );
            this.ingredientsManager.reducedIngredients = new Set(this.ingredientsManager.ingredients);

            container.appendChild(card);
        })

        
        
    }
    
    renderAll = () => {
        
        let container = document.querySelector("#all .recipesContainer");
        container.innerHTML = "";
        let select = document.createElement("select");
        console.log("active")

        let placeHolder = document.createElement("option");
        placeHolder.innerText = "Filter by ingredient";
        select.append(placeHolder);
        container.appendChild(select);

        

        let searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search recipes by name";

        searchInput.addEventListener("input", (event) => {
            let filtered = this.recipeManager.recipes.filter(recipe => 
                recipe.title.toLowerCase().includes(searchInput.value.toLowerCase())
            )
            div.innerHTML = "";
            console.log(filtered);
            this.renderCards(filtered,div);
        })

        container.appendChild(searchInput);

        let div = document.createElement("div");
        container.appendChild(div);
        
        

        
        

        div.innerHTML = "";
        this.renderCards(this.recipeManager.recipes,div);

        this.ingredientsManager.reducedIngredients.forEach(ingredient => {
            let option = document.createElement("option");
            option.innerText = ingredient.trim();
            option.value = ingredient.trim();
            
            option.addEventListener("click",() => {
                
                
                let filteredRecipes = this.recipeManager.recipes.filter(recipe => recipe.ingredients.includes(option.value));
                div.innerHTML = "";
                console.log(filteredRecipes);
                this.renderCards(filteredRecipes,div);
            })

            select.appendChild(option);
        })

        
    }

    renderFavorites = () => {
        this.renderCards(this.favoritesManager.favorites,document.getElementById("favorites"));
        
    }

    renderCreateRecipe = () => {
        document.getElementById("create").innerHTML = "";

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Name of recipe";

        
        let ingredients = document.createElement("textarea");
        ingredients.style.height = "50px";
        ingredients.placeholder = "Ingredients here";

        let linkToRec = document.createElement("input");
        linkToRec.type = "text";
        linkToRec.placeholder = "link here";

        let imageLink = document.createElement("input");
        imageLink.type = "text";
        imageLink.placeholder = "image link here";

        let createBtn = document.createElement("button");
        createBtn.style.width = "50px"
        createBtn.innerText = "create";

        createBtn.addEventListener("click", () => {
            
            if (nameInput.value.length > 0 &&
                 ingredients.value.length > 0 &&
                  linkToRec.value.length > 0 &&
                   imageLink.value.length > 0) {
                console.log("creating");
                this.recipeManager.recipes.unshift(new Recipe(nameInput.value,imageLink.value,ingredients.value,linkToRec.value));
            }
        })

        document.getElementById("create").append(nameInput,ingredients,linkToRec,imageLink,createBtn);

    }

    renderProfile = () => {
        let container = document.getElementById("profile");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.minHeight = "100%";
        container.innerHTML = "";
        
        let editProfilePhoto = document.createElement("input");
        editProfilePhoto.type = "text";
        editProfilePhoto.style.width = "150px";
        editProfilePhoto.style.marginTop = "100px"
        editProfilePhoto.placeholder = "Url for new image";

        let submitBtn = document.createElement("button");
        submitBtn.innerText = "Change profile photo";
        submitBtn.style.marginBottom = "200px";
        submitBtn.addEventListener("click", () => {
            document.getElementById("profilePhoto").src = editProfilePhoto.value || "./assets/images/profile.png";
        });



        let historyContainer = document.createElement("table");
        
        let thOne = document.createElement("th");
        thOne.style.margin = "50px";
        thOne.innerText = "Title";
        let thTwo = document.createElement("th");
        thTwo.style.margin = "50px";
        thTwo.innerText = "Cook count";    

        this.cookManager.cooked.forEach(recipe => {
            let trOne = document.createElement("tr");
            trOne.innerText = recipe.name;
            thOne.appendChild(trOne);

            let trTwo = document.createElement("tr");
            trTwo.innerText = recipe.cookCount;
            thTwo.appendChild(trTwo);
        })

        container.append(editProfilePhoto,submitBtn);
        historyContainer.append(thOne,thTwo);
        container.appendChild(historyContainer);

    }
}

let vController = new VController();

