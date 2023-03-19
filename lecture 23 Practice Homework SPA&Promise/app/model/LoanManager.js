class Loan {

}

class LoanManager {
    constructor() {
        // let listOfLoans = JSON.parse(localStorage.getItem('listOfLoans'));

        // if(localStorage.getItem('listOfLoans')){
        //     this.listOfLoans.length = 0;
        //     this.listOfLoans = [...(JSON.parse(localStorage.getItem('listOfLoans')))]
        // }


    }

    loanId = []
    listOfLoans = [];

    processedLoan =(offer)=>{
        this.listOfLoans.push(offer)
        let localCopy = JSON.parse(localStorage.getItem('listOfLoans'));
        // let isThere = localCopy.find(el => el.id == offer.id)
        // if(!isThere){
            
        //     localStorage.setItem('listOfLoans', JSON.stringify(this.listOfLoans))
        // }
        

        if(!localCopy){
            localStorage.setItem('listOfLoans', JSON.stringify(this.listOfLoans));
        }
        
    }

    renderLoanId = () => {
        let id = Math.floor((Math.random() * 1000));
        let isNotUsed = this.loanId.find(el => el != id)
        if (isNotUsed) {
            this.loanId.push(id);
            return id;
        } else {
            id = Math.floor((Math.random() * 1000));
            this.loanId.push(id);
            return id;
        }
    }

    lenderOne = (income, amount, interst , term)  =>{ //<=7% 50000
    
        if(interst<=7 && amount <= 50000){
            if(amount <= income/2){
                return true;
            }else if(amount > income/2 && amount <= income && term <=24){
                return true;
            } 
        }        
        return false;
    }

    lenderTwo = (income,amount, interst, term)  =>{ //<=9% 100000
        if(interst<=9 && amount <= 100000){
            if(amount <= income/2){
                return true;
            }else if(amount > income/2 && amount <= income && term <=24){
                return true;
            }
        }        
        return false;
    }
    lenderThree = (income, amount, interst, term)  =>{ //<=11% 150000
        if(interst<=11 && amount <= 150000){
            if(amount <= income/2){
                return true;
            }else if(amount > income/2 && amount <= income && term <=24){
                return true;
            }
        }        
        return false;
    }

    interest = (income, amount)=>{
        let interest =null;
        if(income < 20000){
            interest = 10;
        }else if(income >= 20000 && income <= 500000){
            interest = 8;
        }else if (income > 50000){
            interest = 6;
        }
        return interest;
    }

    eligibility = (income, amount, term) => {

        return new Promise((resolve, reject) =>{
            const timeoutId = setTimeout(() =>{
                resolve(this.interest(income));
            },5000);

            let cancelBtn = document.getElementById('cancelApplication');
            cancelBtn.onclick = () =>{
                clearTimeout(timeoutId);
                reject('CANCELED');
                
            }
        });

        // return new Promise((resolve, reject) => {
        //     this.timerId = setTimeout(() => {
        //         resolve([income, amount, term])
        //         reject('ERROR')
        //     }, 2000)
        // })

        // loanMamager.eligibility('').then(data => {
        // }
    }

    // function sayHello(a) {
    //     return new Promise((resolve, reject) => {
    //       const timeoutId = setTimeout(() => {
    //         resolve('Hello');
    //       }, 5000);
    
    //       if (a < 1) {
    //         clearTimeout(timeoutId);
    //         resolve('Immediate');
    //       }
    //     });
    //   }
    
    //   sayHello(4)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
}

let loanMamager = new LoanManager();