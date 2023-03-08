class ViewController {

    constructor() {
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', this.handleHashChange);
        // duner manager and cart manager
        this.dunerManager = new DunerManager();
        this.cartManager = new CartManager();

    }

    handleHashChange = (event) => { //handler of 'hashchange' and 'load'!
        let hash = window.location.hash.slice(1) || "menu";// slice, because the first element is # and we do not want it!

        let pageIds = ["menu", "cart", "order"];// id's of our pages ---> from HTML

        pageIds.forEach(element => {
            let currentPage = document.getElementById(element);

            if (hash === element) {
                currentPage.style.display = 'block';
            } else {
                currentPage.style.display = 'none';
            }
        })

        switch (hash) {
            case "menu":
                this.renderMenuPage(); // without this line i won't display my duner cards!!!!!!!
            case "cart":
                this.renderCartPage();
            case "order":
                this.renderOrderPage();
        }
    }

    renderDuners = (dunerList, container) => {
        container.innerHTML = "";

        dunerList.forEach(duner => {

            let card = document.createElement('div');
            card.classList.add = 'card';
            card.style.width = 200;
        

            let img = document.createElement('img')
            img.src = duner.image;
            img.width = 200;

            let name = document.createElement('div');
            name.innerText = duner.name;
            name.classList.add = ('name');

            let weight = document.createElement('div');
            weight.innerText = duner.weight + 'гр.';
            weight.classList.add = ('weight');

            let category = document.createElement("div");
            category.innerText = duner.category;
            category.classList.add = ('category');

            let price = document.createElement('div');
            price.innerText = duner.price + 'лв.';
            price.classList.add = ('price')

            let input = document.createElement('input');
            input.type = 'number';
            input.value = 1;

            let button = document.createElement('button');
            button.innerText = 'Add to card';

            button.addEventListener('click', () => {
                this.cartManager.addToCart(duner, Number(input.value));
                // console.log(this.cartManager.cartItems);
            })

            card.append(
                img,
                name,
                weight,
                category,
                price,
                input,
                button
            );

            console.log(card);

            container.appendChild(card);
        });


    }

    renderMenuPage = () => {
        let cardContainer = document.querySelector('#menu .container');
        let searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('input', (event) => {
            let result = this.dunerManager.search(event.target.value);

            this.renderDuners(result, cardContainer);
        })

        this.renderDuners(this.dunerManager.dunerList, cardContainer);

    }


    renderCartPage = () => {
        let cartContainer = document.querySelector('#cart .container');
        cartContainer.innerHTML = "";

        if (this.cartManager.cartItems.length) { // if there is someting in the cart???

            let orderedList = document.createElement('ol');

            this.cartManager.cartItems.forEach(duner => {

                let row = document.createElement('li');

                let name = document.createElement('span');
                name.innerText = duner.name + " ";

                let price = document.createElement('span');
                price.innerText = Number(duner.price).toFixed(2) + "лв. ";

                let inputCount = document.createElement('input');
                inputCount.type = 'number';
                inputCount.value = Number(duner.count);
                inputCount.addEventListener('input', (event) => {
                    this.cartManager.editCartItem(duner, Number(event.target.value));

                    orderSum.innerText = `Total: ${this.cartManager.getTotalSum().toFixed(2)}лв. `;

                    if (Number(event.target.value) === 0) {  //if the count of my duner kind is 0, delete the row with that duner
                        row.parentElement.removeChild(row);
                    }
                });

                let deleteBut = document.createElement('button');
                deleteBut.innerText = "X";
                deleteBut.addEventListener('click', () => {
                    this.cartManager.editCartItem(duner, 0); //remove the duner from duner array list
                    row.parentElement.removeChild(row); // remove the row with that duner
                })

                row.append(
                    name,
                    price,
                    inputCount,
                    deleteBut
                );

                orderedList.append(row);

            })

            cartContainer.append(orderedList);

            let orderInfo = document.createElement('div');
            let orderSum = document.createElement('span');
            orderSum.innerText = `Total: ${this.cartManager.getTotalSum().toFixed(2)}лв. `;

            let orderBtn = document.createElement('button');
            orderBtn.innerText = "Order"
            orderBtn.addEventListener('click', () => {
                location.hash = 'order';
            });


            orderInfo.append(orderSum, orderBtn);
            cartContainer.append(orderInfo);


        } else {
            cartContainer.append(document.createElement('span').innerText = 'There is nothing in cart...');
        }

        cartContainer.append(document.createElement('br'));


        // let historiBox = document.createElement("ol");
        // this.cartManager.orderHistory.forEach(order => {
        //     let row = document.createElement("li");
        //     let date = document.createElement("span");
        //     date.innerText = order.date;
        //     let adress = document.createElement("span");
        //     adress.innerText = order.address;
        //     let product = document.createElement("span");
        //     product.innerText = order.productList;


        //     row.append(date, adress, product)
        //     historiBox.appendChild(row)
        //     cartContainer.appendChild(historiBox)
        // });

       
        // divHistory.style.flexDirection ='column';

        this.cartManager.orderHistory.forEach(element =>{
            let divHistory = document.createElement('div');
            divHistory.style.display = 'flex';
            divHistory.style.margin = '10px';
            divHistory.style.marginRight = '5px';


            let date = document.createElement('span');
            date.innerText = element.date +" ";
            date.style.border = '1px solid black';
    
            let addressEnd = document.createElement('span');
            addressEnd.innerText = element.address+" ";
    
            let products = document.createElement('span');
            products.innerText = element.productList+" ";
            products.style.border = '1px solid black';
    
            let totalPrice = document.createElement('span');
            totalPrice.innerText = " "+element.total.toFixed(2)+"лв.";
            totalPrice.style.border = '1px solid black';
    
            divHistory.append(
                date,
                addressEnd,
                products,
                totalPrice
            );

            cartContainer.append(divHistory);

        })

    }





    submitForm = (event) => { // handler of deliveryForm eventListener
        console.log("Submit");
        console.log(event.currentTarget.address.value)
        event.preventDefault();
        this.cartManager.deliver(event.currentTarget.address.value);

        this.cartManager.cartItems.length = 0;

        location.hash = 'cart';
    }

    renderOrderPage = () => {

        let deliveryForm = document.getElementById('deliveryForm');

        deliveryForm.removeEventListener('submit', this.submitForm);

        deliveryForm.addEventListener('submit', this.submitForm)

    }




    // renderOrderPage = (event) => {
    //     // event.preventDefault();

    //     let divContainer = document.querySelector('#cart .container');
    //     let address = document.getElementById('textArea').value;
    //     let deliverBtn = document.getElementById('deliver');

    //     deliverBtn.addEventListener('submit', () => {
    //         event.preventDefault();
    //         this.cartManager.deliver(address);

    //         let div = document.createElement('div');

    //         let date = document.createElement('span');
    //         date.innerText = this.cartManager.orderHistory.date;

    //         let addressEnd = document.createElement('span');
    //         addressEnd.innerText = address;

    //         let products = document.createElement('span');
    //         products.innerText = this.cartManager.orderHistory.productList;

    //         let totalPrice = document.createElement('span');
    //         totalPrice.innerText = this.cartManager.getTotalSum();

    //         div.append(
    //             date,
    //             addressEnd,
    //             products,
    //             totalPrice
    //             );
    //         divContainer.append(div);

    //         location.hash = 'cart';
    //     });

    // }







}

let viewController = new ViewController();