class ViewController {

    constructor() {
        window.addEventListener('hashchange', this.handleHashChange)
        window.addEventListener('load', this.handleHashChange)
        this.animalManager = new AnimalManager();


    }




    handleHashChange = (event) => { //handler of 'hashchange' and 'load'!
        let hash = window.location.hash.slice(1) || "login";// slice, because the first element is # and we do not want it!

        const pageIds = ["home", "application", "login", "logout", "register", "loanOverview"];// id's of our pages ---> from HTML



        if (hash === 'home' || hash === 'application') {

            if (!userManager.loggedUser) {
                location.hash = 'login';
                return; // the rest of code in this handler won't be executed!
            }
        }

        let loginLink = document.getElementById('loginLink'); // link in nav bar for login/logout
        let registerLink = document.getElementById('registerLink')
        let span = document.getElementById('span');
        if (userManager.loggedUser) {
            loginLink.innerText = "Logout";
            loginLink.href = '#logout';
            span.innerText = `Currently is logged in user with username: ${userManager.loggedUser.username}`;
            registerLink.style.display = 'none';
        }



        pageIds.forEach(element => {
            let currentPage = document.getElementById(element);

            if (hash === element) {
                currentPage.style.display = 'block';
            } else {
                currentPage.style.display = 'none';
            }
        })

        switch (hash) {
            case "home":
                this.renderMainPage();
                break;
            case "application":
                // this.renderApplication();
                break;
            case "donate":
                this.renderDonaePage();
                break;
            case 'login':
                this.renderLogin();
                break;
            case 'register':
                this.renderRegister();
                break;
            case 'logout':
                this.renderLogout();
                break;
        }
    }





    renderMainPage = () => {
        let loanPerson = document.getElementById('loanPerson');
        loanPerson.value = userManager.loggedUser.username;
        let borrowerIncome = null;
        let requestedAmount = null;
        let requestedTerm = null;

        let loanForm = document.getElementById('loanForm');
        loanForm.elements.sub.disabled = true;
        loanForm.addEventListener('input', (e) => {

            e.preventDefault();
            borrowerIncome = Number(e.currentTarget.elements.income.value);
            requestedAmount = Number(e.currentTarget.elements.loan.value);
            requestedTerm = Number(e.currentTarget.elements.term.value);

            if (!!borrowerIncome & !!requestedAmount & !!requestedTerm) {
                e.currentTarget.elements.sub.disabled = false;
            }



        });

        loanForm.elements.sub.addEventListener('click', (e) => {
            e.preventDefault();
            if (requestedAmount > 999) {
                if (requestedTerm < 6) {
                    loanForm.elements.term.value = 6;
                    requestedTerm = 6;
                }
            } else {
                loanForm.elements.loan.value = 1000;
                requestedAmount = 1000;
                if (requestedTerm < 6) {
                    loanForm.elements.term.value = 6;
                    requestedTerm = 6;
                }
            }
            console.log(borrowerIncome, requestedAmount, requestedTerm);
            location.hash = 'application'
            let id = loanMamager.renderLoanId()
            console.log(id)
            this.renderApplication(borrowerIncome, requestedAmount, requestedTerm, id);
            this.applicationPage(borrowerIncome, requestedAmount, requestedTerm, id);
        });

    }

    applicationPage = (borrowerIncome, requestedAmount, requestedTerm, id) => {

        let applicationStatus = document.getElementById('applicationStatus');
        let loanApplication = document.getElementById('loanApplication');
        let offer;

        let promise = loanMamager.eligibility(borrowerIncome, requestedAmount, requestedTerm);

        promise.then(interest => {
            let cancelBtn = document.getElementById('cancelApplication');
            cancelBtn.style.display = 'none';
            console.log(interest);
            let lender1 = loanMamager.lenderOne(borrowerIncome,requestedAmount, interest ,requestedTerm);
            let lender2 = loanMamager.lenderTwo(borrowerIncome,requestedAmount, interest, requestedTerm);
            let lender3 = loanMamager.lenderThree(borrowerIncome,requestedAmount, interest, requestedTerm);
            console.log(lender1, lender2, lender3)

            if(lender1 || lender2 || lender3){
                applicationStatus.innerText = 'Approved';
            }else{
                applicationStatus.innerText = 'Rejected';
            }
            return [lender1,lender2,lender3];
        })
        .then(data =>{
            console.log('secound then');
            if(data.includes(true)){
                let offersBtn = document.createElement('input');
                offersBtn.type = 'submit';
                offersBtn.value = 'View offers'
                loanApplication.append(offersBtn);
                offersBtn.onclick = () =>{
                    for(let i=0; i<data.length; i++){
                        console.log(`I am here ${data[i]}`)
                        if(data[i]){
                            let interest = loanMamager.interest(borrowerIncome);
                            offer = offerManager.getOffer(interest, requestedAmount, requestedTerm);
                            offer.id = id;
                            console.log(`te ti oferta batce ${offer.monthlyPayment}`)
                            this.renderOffer(requestedAmount,interest, requestedTerm, offer, i+1, id);
                        }
                        offersBtn.style.display = 'none';
                    }
                }
            }

        })
        .catch(err => {
            console.log(err);
            applicationStatus.innerText = 'Canceled';
        })

    }

    renderOffer = (requestedAmount, interest, requestedTerm, offer,btn ,id) =>{
        let container = document.getElementById('loanApplication');
        let loanOverview = document.getElementById('loanOverview');
        let table  = document.createElement('table');
        table.style.margin = '20px';

        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');
        th.innerText = 'Interest rate';
        td.innerText = interest + '%';
        tr.append(th,td);

        let tr1 = document.createElement('tr');
        let th1 = document.createElement('th');
        let td1 = document.createElement('td');
        th1.innerText = 'Requested amount';
        td1.innerText = requestedAmount;
        tr1.append(th1,td1);

        let tr2 = document.createElement('tr');
        let th2 = document.createElement('th');
        let td2 = document.createElement('td');
        th2.innerText = 'Monthly payment';
        td2.innerText = offer.monthlyPayment;
        tr2.append(th2,td2);

        let tr3 = document.createElement('tr');
        let th3 = document.createElement('th');
        let td3 = document.createElement('td');
        th3.innerText = 'Loan term';
        td3.innerText = requestedTerm;
        tr3.append(th3,td3);

        table.append(tr,tr1,tr2,tr3);
        let acceptBtn = document.createElement('button');
        acceptBtn.innerText = 'Get loan';
        acceptBtn.id = `loan${btn}`
        acceptBtn.onclick = () =>{
            let copy = table;
            location.hash = 'loanOverview';

            let tr = document.createElement('tr');
            let th = document.createElement('th');
            let td = document.createElement('td');
            th.innerText = 'Total owned amount';
            td.innerText = offer.totalSum;
            tr.append(th,td);

            let tr1 = document.createElement('tr');
            let th1 = document.createElement('th');
            let td1 = document.createElement('td');
            th1.innerText = 'ID of loan';
            td1.innerText = id;
            tr1.append(th1,td1);
            copy.append(tr1)

            loanMamager.processedLoan(offer);

            let overview = document.getElementById('overview').append(copy)
            container.innerHTML = '';
            let loanOverviewLink = document.getElementById('loanOverviewLink').style.display = 'flex';
            //loanOverview.append(table);
        }
        container.append(table, acceptBtn);

        //monthlyPayment


    }

    renderApplication = (borrowerIncome, requestedAmount, requestedTerm, id) => {

        let loanInformation = document.getElementById('loanInformation'); //table for the loan
        loanInformation.innerHTML = ""
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');

        let tr1 = document.createElement('tr');
        let th1 = document.createElement('th');
        let td1 = document.createElement('td');

        let tr2 = document.createElement('tr');
        let th2 = document.createElement('th');
        let td2 = document.createElement('td');

        let tr3 = document.createElement('tr');
        let th3 = document.createElement('th');
        let td3 = document.createElement('td');

        th.innerText = 'ID of loan';
        td.innerHTML = id;
        tr.append(th, td);
        loanInformation.append(tr);

        //tr.innerHTML='';
        th1.innerText = 'Requested amount';
        td1.innerText = requestedAmount;
        tr1.append(th1, td1);
        loanInformation.append(tr1);

        //tr.innerHTML='';
        th2.innerText = 'Requested term';
        td2.innerText = requestedTerm;
        tr2.append(th2, td2);
        loanInformation.append(tr2);

        //tr.innerHTML='';
        th3.innerText = 'Status';
        td3.id = 'applicationStatus';
        td3.innerText = 'Pending';
        tr3.append(th3, td3);
        loanInformation.append(tr3);


    }






    renderRegister = () => {

        let formRegister = document.getElementById('registerForm');
        formRegister.elements.sub.disabled = true;
        let successfulRegister;

        formRegister.addEventListener('input', (e) => {

            let username = e.currentTarget.elements.username.value;
            let password = e.currentTarget.elements.password.value;
            let passConfirm = e.currentTarget.elements.passConfirm.value;

            let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

            if (username && password && passConfirm) {

                e.currentTarget.elements.sub.disabled = false;

                e.currentTarget.elements.sub.addEventListener('click', (btn) => {
                    btn.preventDefault();

                    if (password === passConfirm && //if so -> passwod match and strong password
                        strongRegex.test(password)) {

                        successfulRegister = userManager.register({ username, password });

                        if (successfulRegister) {
                            location.hash = 'login';
                        } else {
                            btn.stopImmediatePropagation();
                            //btn.stopPropagation();
                            console.log(`This user: ${username}, allready exist`);
                        }
                    } else if ((password !== passConfirm)) { // if so -> password missmatch or wrong password
                        //btn.stopImmediatePropagation();
                        //btn.stopPropagation();
                        console.log('Password missmatch or week password / too short password! Please, try again');
                    }

                });
            }
        });
    }



    renderLogout = () => {

        //let formLogout = document.getElementById('logout');
        let logoutFormBtn = document.getElementById('logoutFormBtn');
        let registerLink = document.getElementById('registerLink');

        //formLogout.elements.sub
        logoutFormBtn.addEventListener('click', () => {

            localStorage.removeItem('isThereUser');
            userManager.loggedUser = null;
            location.hash = 'login';
            loginLink.innerText = "Login";
            loginLink.href = '#login';
            registerLink.style.display = 'flex';
        });
    }



    renderLogin = () => {


        let formLogin = document.getElementById('loginForm');// form login
        // let loginNavigation = document.getElementById('loginNav'); // link in nav bar login / logout
        let loginLink = document.getElementById('loginLink'); // link in nav bar for login/logout
        let registerLink = document.getElementById('registerLink');

        formLogin.elements.sub.disabled = true; // via property disabled on HTML btn, we can set value true/false, if true => the button is disabled


        formLogin.addEventListener('input', (e) => {
            e.preventDefault();

            let username = e.currentTarget.elements.username.value;
            let password = e.currentTarget.elements.password.value;
            let remember = e.currentTarget.elements.remember.value || false;

            // console.log(remember)

            if (username && password.length > 5) {
                e.currentTarget.elements.sub.disabled = false;

            }

            e.currentTarget.elements.sub.addEventListener('click', (btn) => {

                btn.preventDefault();


                let successfulLogin = userManager.login({ username, password });

                if (successfulLogin) {
                    location.hash = 'home'
                    registerLink.style.display = 'none';
                    e.currentTarget.elements.username.innerText = '';
                    e.currentTarget.elements.password.innerText = '';
                } else {
                    btn.stopPropagation();
                    console.log(`Invalid username or password.`);
                    //location.reload();
                }

            });

        });


    }


}

let viewController = new ViewController();