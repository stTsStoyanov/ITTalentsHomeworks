class ViewController{

    constructor(){
        window.addEventListener('hashchange', this.hashChange); // sledi za hash promqna
        window.addEventListener('load', this.hashChange); // sledi za load na stranicata
        // i have to place the duner manager
        this.dunerManager = new DunerManager();
        // i have to place the card manager
        this.cartManager = new CartManager();
    }

    hashChange = () => { //  handler of 'hashchange' and 'load'!!!

        let hash = window.location.hash.slice(1) || 'menu'; // vzimam vsichki hash-ove, pred vseki hash ima #, sus slice maham diesa, i slagam logichesko || za da vzema 'menu' by default

        console.log(hash);
        let padeIds = ["menu", "cart", "order"];

        padeIds.forEach(id => {

            let pageToBeDisplayed = document.getElementById(id);

            if(hash === id){
                pageToBeDisplayed.style.display = 'block';
            }else{
                pageToBeDisplayed.style.display = 'none';
            }
        });

        // console.log(this.dunerManager.dunerList)// test do i have list of duners .... -----> dunerManager is part of DunerManager.js

        switch(hash){
            case "menu":
                this.renderMenuPage();
                console.log("menu from switch");
            case "cart":
                this.renderCartPage();
                console.log("cart from switch");
            case "order":
                this.renderOrderPage();
                console.log("order from switch");
        }

        let spanCount = document.getElementById('totalCountShop');
        if(this.cartManager.getElementCount()){
            spanCount.innerText = this.cartManager.getElementCount();
            // spanCount
        }else{
            spanCount.innerText = "";
        }
        // }else if(this.cartManager.getElementCount() === 0 ){
        //     spanCount.innerText = "";
        //     // spanCount.style.display = 'none';
        // }
        
    }



    renderDuner = (listOfDuners, container) =>{ //part of ViewControler..... ----> creates card for every single duner and append it to parent container

        container.innerHTML = "";

        // container.style.display = 'flex';
        // container.style.flexWrap = 'wrap';
        // container.style.gap = '10px';

        listOfDuners.forEach(element => {
            
            let card = document.createElement('div');
            card.classList.add = 'card';

            let img = document.createElement('img');
            img.src = element.image;
            img.width = 200; // it must be just 200 not '200' or '200px'!?!??!?!?!?!?!??!?!?!?!?!?

            let name = document.createElement('div');
            name.classList.add = 'name';
            name.innerText = element.name;

            let weight = document.createElement('div');
            weight.classList.add = 'weight';
            weight.innerText = element.weight +'грама';

            let category = document.createElement('div');
            category.classList.add = 'category';
            category.innerText = element.category;

            let price = document.createElement('div');
            price.classList.add = 'price';
            price.innerText = element.price+'лв.';

            let input = document.createElement('input');
            input.type = 'number';
            input.value = 1;

            let button = document.createElement('button');
            button.innerText = 'Add to cart';
            // i have to addEventListener to that button!!!!
            button.addEventListener('click', (event) => {
                this.cartManager.addToCart(element, Number(input.value));
      



                // тест да видя как ми работи каунтъра!
                // let spanCount = document.getElementById('totalCountShop');
                // if(this.cartManager.getElementCount() > 0){
                //     spanCount.innerText = this.cartManager.getElementCount();
                //     // spanCount
                // }else if(this.cartManager.getElementCount() === 0 ){
                //     spanCount.innerText = "";
                //     // spanCount.style.display = 'none';
                // }


            })

            card.append(
                img,
                name,
                weight,
                category,
                price,
                input,
                button
            )

            container.appendChild(card);

        });

    }



    renderMenuPage = () =>{
                          //part of ViewControler
                          // get the value of input via eventListener and call renderDuner(WITH PARAMS) or just call renderDuner(WITH PARAMS)
                          // this func handle how many duner cards i will have on the screen. If i have value in input, i will render the duners which respond to the search
                          // In other case i will render all duners!

        let input = document.getElementById('dunerInput');
        let divContainer = document.querySelector('#menu .container');

        input.addEventListener('input', (event)=>{
            //get the value of input, go to DunerManager and search for particuler duner
            let result = this.dunerManager.search(event.target.value);// target or curentTarget in this case is the same! There is not nested element in the input.

            // call renderDuner with information and part of HTML where to plase the content
            this.renderDuner(result, divContainer);
        })


        // in case that the event listener is not active, no input we call the func renderDuner() with information ----> the information is our full list of duners!
        this.renderDuner(this.dunerManager.dunerList, divContainer);
    }

    renderCartPage = () => {
        
        let divContainer = document.querySelector('#cart .container');
        divContainer.innerHTML = "";

        

        if(this.cartManager.cartList.length){// check if i have added duners to my carT list!

            let orderedList = document.createElement('ol');
            let endTotalSum = this.cartManager.getTotalSum();

            this.cartManager.cartList.forEach(element =>{

                let row = document.createElement('li');

                let name = document.createElement('span');
                name.innerText = element.name;

                let price = document.createElement('span');
                price.innerText = element.price;

                let input = document.createElement('input');
                input.type = 'number';
                input.value = element.count;

                input.addEventListener('input', (event) =>{
                    // add logic!
                    let newCount = Number(event.target.value);
                    this.cartManager.editCartItem(element, newCount);

                    if(newCount === 0){
                        row.parentElement.removeChild(row);
                    }

                    let total = document.getElementById('totalLabel');
                    // total.innerText = `Total: ${this.cartManager.getTotalSum().toFixed(2)}`;
                    total.innerText = "Total: " + this.cartManager.getTotalSum().toFixed(2); 
                })

                let button = document.createElement('button');
                button.innerText ="X";

                button.addEventListener('click', () =>{
                    this.cartManager.editCartItem(element, 0);
                    row.parentElement.removeChild(row);
                    let total = document.getElementById('totalLabel');
                    total.innerText = `Total: ${this.cartManager.getTotalSum().toFixed(2)}`

                    // this.cartManager.editCartItem(element, 0);
                    // row.parentElement.removeChild(row);
                    // document.getElementById('totalLabel').innerText = "Total: " +
                    //     this.cartManager.getTotalSum().toFixed(2);


                    // тест да видя как ще ми работи каунтъра за общ брой дюнери най-добре !!!!
                    // let spanCount = document.getElementById('totalCountShop');
                    // if(this.cartManager.getElementCount() > 0){
                    //     spanCount.innerText = this.cartManager.getElementCount();
                    //     // spanCount
                    // }else if(this.cartManager.getElementCount() === 0 ){
                    //     spanCount.innerText = "";
                    //     // spanCount.style.display = 'none';
                    // }
                })

                row.append(
                    name,
                    price,
                    input,
                    button
                );

                orderedList.append(row);

                let orderDiv = document.createElement('div');

                let totalSum = document.createElement('span');
                totalSum.classList.add = 'totalLabel';
                totalSum.innerText = `Total: ${endTotalSum}лв.`;

                let orderBtn = document.createElement('button');
                orderBtn.innerText = "Order";
                orderBtn.addEventListener('click', ()=>{
                    location.hash = 'order'
                })

                orderDiv.append(totalSum, orderBtn);
                orderedList.append(orderDiv);
            })

            divContainer.append(orderedList);
            
        }else{
            divContainer.innerHTML ="";
            let p = document.createElement('p')
            p.innerText = "Ne si dobavil nishto v cart => nema duner!!!!";
            p.style.fontSize = '25px'
            divContainer.append(p);
        }

    }


    submitForm = (event) =>{ // hendler of deliveryForm
        event.preventDefault();
        this.cartManager.delivery(event.currentTarget.address.value);
    }

    // historyInfo = (event) =>{ // hendler of submitBtn
    //     let divContainer = document.querySelector('#cart .container');
    //     // let parentForm = event.target.parentElement; // it works!!! 
    //     let historyContainer = document.createElement('div');
    //     let dateContainer = document.createElement('div');
    //     let addressContainer = document.createElement('div');
    //     let productsContainer = document.createElement('div');
    //     let totalSumContainer = document.createElement('div');

    //     let getForm = document.querySelectorAll('#orderForm');
    //     let name = getForm[0][0];
    //     let phone = getForm[0][1];
    //     let address = getForm[0][2];
    //     let date = this.cartManager.orderHistory.date;

    //     // let products = this.cartManager.cartList.map( item => `${item.name} ${item.price}`).join(', ');
    //     let products = this.cartManager.orderHistory;
    //     let total = this.cartManager.getTotalSum();

    //     dateContainer.append(date);
    //     addressContainer.append(address);
    //     productsContainer.append(products);
    //     totalSumContainer.append(total);

    //     historyContainer.append(dateContainer, addressContainer, productsContainer, totalSumContainer);

    //     divContainer.append(historyContainer);

    //     console.log(getForm[0][1])
    //     console.log(date);
    // }

    historyInfo = () =>{
        let date = this.cartManager.orderHistory[0].date//forEach(element => { return element.date});
        let address = this.cartManager.orderHistory.forEach(el => {return el.address});
        console.log(address);
    }

    renderOrderPage = () =>{

        let deliveryForm = document.getElementById('orderForm');

        deliveryForm.removeEventListener('submit', this.submitForm);
        deliveryForm.addEventListener('submit', this.submitForm);

        let submitBtn = document.getElementById('deliver');
        submitBtn.addEventListener('click', this.historyInfo)
    }



}







let viewControler = new ViewController();