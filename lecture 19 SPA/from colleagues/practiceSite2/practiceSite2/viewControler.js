class ViewControler {
    constructor() {
        window.addEventListener("load", this.handelHesh);
        window.addEventListener("hashchange", this.handelHesh);
        this.dunerManager = new DunerManager
        this.cartManager = new CartManager
    }

    handelHesh = () => {
        const arrOfIds = ["menuPage", "cartPage", "orderPage"];
        let hashPage = window.location.hash.slice(1) || "menuPage";
        arrOfIds.forEach(id => {
            let page = document.getElementById(id);
            if (hashPage === id) {
                page.style.display = "block"
            } else {
                page.style.display = "none"
            }
        });

        switch (hashPage) {
            case "menuPage": this.renderMenuPage();
            case "cartPage": this.renderCartPage();
            case "orderPage": this.renderChachOutPage()



        }



    }

    renderDuners = (result, container) => {
        container.innerText = ""
        result.forEach(duner => {

            let card = document.createElement("div")
            card.classList.add("card")

            let img = document.createElement("img");
            img.src = duner.image;
            img.width = "200"
            img.classList.add("img")

            let name = document.createElement("div");
            name.innerText = duner.name;
            name.classList.add("name")

            let weight = document.createElement("div");
            weight.innerText = duner.weight;
            weight.classList.add("weight")

            let category = document.createElement("div");
            category.innerText = duner.category;
            category.classList.add("category")

            let price = document.createElement("div");
            price.innerText = duner.price;
            price.classList.add("price")

            let inputDuner = document.createElement("input");
            inputDuner.type = "number";
            inputDuner.value = "1";
            inputDuner.classList.add("inputDuner")

            let addBtn = document.createElement("button");
            addBtn.innerText = "Add To Cart"
            addBtn.classList.add("addBtn")
            addBtn.addEventListener("click", () => {
                this.cartManager.addToCart(duner, Number(inputDuner.value))

                krugche.style.display = "flex"
                krugche.innerText = this.cartManager.cartItems.length;

            })

            card.append(img, name, weight, category, price, inputDuner, addBtn);
            container.appendChild(card)



        });

    }

    renderMenuPage = () => {

        let searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("input", (event) => {
            let result = this.dunerManager.searchF(event.target.value);
            console.log(result)
            this.renderDuners(result, container)

        })
        let container = document.getElementById("container");
        this.renderDuners(this.dunerManager.dunerList, container)

        let krugche = document.getElementById("krugche");
        if (this.cartManager.cartItems == 0) {
            krugche.style.display = "none"
        }

    }
    renderCartPage = () => {
        let cartPage = document.getElementById("cartPage");
        cartPage.innerHTML = ""
        if (this.cartManager.cartItems.length) {
            let sum = this.cartManager.getTotalSum();

            let cartItemList = document.createElement("ol");

            this.cartManager.cartItems.forEach(cartItem => {
                let row = document.createElement("li");

                let name = document.createElement("span");
                name.innerText = cartItem.name

                let price = document.createElement("span");
                price.innerText = cartItem.price;

                let cartInput = document.createElement("input");
                cartInput.type = "number";
                cartInput.value = cartItem.count;
                cartInput.addEventListener("input", (event) => {
                    this.cartManager.editCartItem(cartItem, Number(event.target.value))
                    orderLabel.innerText = this.cartManager.getTotalSum();
                    if (!Number(event.target.value)) {
                        row.parentElement.removeChild(row);
                    }
                    if (!Number(orderLabel.innerText)) {
                        orderLabel.style.display = "none"
                        orderButn.style.display = "none"


                    }

                })


                let delBtn = document.createElement("button");
                delBtn.innerText = "X"
                delBtn.addEventListener("click", (event) => {
                    this.cartManager.editCartItem(cartItem, Number(event.target.value))
                    row.parentElement.removeChild(row);
                    if (this.cartManager.cartItems.length) {
                        krugche.innerText = this.cartManager.cartItems.length;
                    } else {
                        krugche.style.display = "none"
                    }

                    orderLabel.innerText = this.cartManager.getTotalSum();
                    if (!Number(orderLabel.innerText)) {
                        orderLabel.style.display = "none"
                        orderButn.style.display = "none"


                    }


                })

                row.append(name, price, cartInput, delBtn);
                cartItemList.appendChild(row)

            });
            cartPage.appendChild(cartItemList)

            let orderLabel = document.createElement("span")
            orderLabel.innerText = "Order Total Sum: " + sum;
            let orderButn = document.createElement("button");
            orderButn.innerText = "Order Now"
            orderButn.addEventListener("click", () => {
                window.location.hash = "orderPage"
            })


            cartPage.append(orderLabel, orderButn)

        } else {
            let nothigInCart = document.createElement("div");
            nothigInCart.innerText = "Нямаш нищо в количката бе човек, кво правиш?"
            let img = document.createElement("img");
            img.src = "https://www.clipartmax.com/png/middle/263-2633028_anger-angry-person-cartoon.png"
            img.width = "200"
            cartPage.append(nothigInCart, img)

        }
        let historiBox = document.createElement("ol");
        this.cartManager.orderHistory.forEach(order => {
            let row = document.createElement("li");
            let date = document.createElement("span");
            date.innerText = order.date;
            let adress = document.createElement("span");
            adress.innerText = order.address;
            let product = document.createElement("span");
            product.innerText = order.productList;


            row.append(date, adress, product)
            historiBox.appendChild(row)
            cartPage.appendChild(historiBox)
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        this.cartManager.deliver(event.currentTarget.address.value);
        this.cartManager.cartItems.length = 0;
        krugche.style.display = "none"
        window.location.hash = "cartPage"

    }
    renderChachOutPage = () => {
        let deliveryForm = document.getElementById("deliveryForm")

        deliveryForm.removeEventListener("submit", this.submitForm)
        deliveryForm.addEventListener("submit", this.submitForm)





    }



}
let vierControler = new ViewControler()
