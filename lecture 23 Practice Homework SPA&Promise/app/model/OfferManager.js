class Offer {
    // constructor(user, lender, userIncome,reqestedAmount, reqestedTerm, offerId, status){
    constructor(interest, amount, totalSum, monthlyPayment, term,) {
        //interest,amount, monthlyPayment, term
        this.interest = interest,
        this.amount = amount,
        this.totalSum = totalSum,
        this.monthlyPayment = monthlyPayment,
        this.term = term
    }
}

class OfferManager {
    constructor() {

    }

    offers = [];

    createOffer = (interest, amount, term) => {
        let monthlyPayment = null;
    }

    getOffer = (interst, amount, term) => {
        //<=7% 50000
        //interest per year
        //amount x interest = end
        //mounth = (end-amount)/12
        //my = mounth x term
        //myEnd = amount + my
        //payment = myEnd/term

        let end = amount + (amount * interst/100);
        let mounth = (end - amount) / 12;
        let thisInterest = mounth * term;
        let totalAmount = amount + thisInterest;
        let payment =  (totalAmount / term).toFixed(2);
        console.log(payment)


        

        return new Offer(interst, amount, totalAmount, payment, term);
    }

    totalAmount = () =>{
        
    }



}

let offerManager = new OfferManager(); 