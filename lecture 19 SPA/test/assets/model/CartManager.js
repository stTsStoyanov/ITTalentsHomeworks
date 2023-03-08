class CartItem{
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count
    }
}

class HistoryItem{

    constructor(dunerList, address) {
        this.date = new Date().toLocaleDateString();
        this.products = dunerList.map(item => `${item.name} ${item.count}`).join(",");
        this.address = address;
        this.total = dunerList.reduce( (acc, curent) => acc+(curent.price * curent.count),0);
    }
}

class CartManager{

    cartList = [];
    orderHistory = [];

    addToCart = (duner, count) =>{
        let item = this.cartList.find(element => element.name === duner.name); // item/duner which exist into my list true/false - > returns the value of first match

        if(!item){ // i dont have that duner in my list -> cartList, so i create new instance obj for that duner!
            this.cartList.push(new CartItem(duner.name, duner.price, count))
        }else{ // i have the duner in my cartList, so i add to count
            item.count += count;
        }
    }

    getTotalSum = () =>{
        return this.cartList.reduce((acc, curent) => acc+(curent.price * curent.count),0); //curent is every obj in cartList, so i get the price and count for each and in the end i have total sum!
    }

    editCartItem = (duner, count) => {

        if(count === 0){ //delete the duner from list
            let result = this.cartList.findIndex(item => item.name === duner.name);
            this.cartList.slice(result, 1);
        }else{
            duner.count = count;
        }
    }

    delivery = (address) =>{
        this.orderHistory.push(new HistoryItem(this.cartList, address));
    }

    getElementCount = () =>{
        return this.cartList.reduce((totalCount, current) => totalCount + (current.count),0);
    }

}