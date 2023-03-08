class CartItem{
    constructor(name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    }
}


class CartHistory{
    constructor(productList, address){
        this.date = new Date().toLocaleDateString(); 
        this.address = address;

        this.productList = productList.map(element => `${element.name} ${element.count}`).join(", ")
        this.total = productList.reduce((acc, current) => acc+(current.price * current.count),0)//toFixed(2);
    }

}



class CartManager{

    cartItems = [];
    orderHistory = [];

    addToCart = (duner, count) =>{
        let dunerInCart = this.cartItems.find(element => element.name === duner.name);

        if(dunerInCart){
            dunerInCart.count = count;
        }else{
            this.cartItems.push(new CartItem(duner.name, duner.price, count));
        }
    }

    editCartItem = (duner, count) => { /// let's see if it works!!!
        
        let dunerInCart = this.cartItems.findIndex(element => element.name === duner.name);

        if(count === 0){ //!count
            this.cartItems.splice(dunerInCart, 1);
        }else{
            duner.count = count;
        }
    }


    getTotalSum = () =>{
        return this.cartItems.reduce((acc, current) => acc+(current.price * current.count),0);
    }

    deliver = (address) =>{
        this.orderHistory.push(new CartHistory(this.cartItems, address ));
    }

}