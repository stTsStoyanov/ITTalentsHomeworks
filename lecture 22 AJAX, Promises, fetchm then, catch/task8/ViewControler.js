class ViewControler{

    constructor(){
        window.addEventListener('hashchange', this.handleHashChange)
        window.addEventListener('load', this.handleHashChange)
    }

    handleHashChange = () =>{
        let hash = window.location.hash.slice(1) || 'ten';

        const pageIds = ['five', 'ten', 'fifteen', 'twenty'];

        pageIds.forEach(element =>{
            let currentPage = document.getElementById(element);

            if(hash == element){
                currentPage.style.display = 'flex';
            }else{
                currentPage.style.display = 'none';
            }
        });

        switch (hash){
            case 'five':
                this.fivePics();
                break;
            case 'ten':
                this.tenPics();
                break;
            case 'fifteen':
                this.fifteenPics();
                break;
            case 'twenty':
                this.twentyPics();
                break;
        }
    }

    fivePics = () => {
        let table = document.getElementById('fiveTable');
        
        // fetch('https://api.thecatapi.com/v1/images/search?limit=5?api_key=live_OKNLX8dRC904DPHjTGc2j7kzioTDfOfIbPsamIKDIFEuWtF0fb5dB9BwsniRWfDf')
        // fetch('https://api.thecatapi.com/v1/images/search?limit=10')    
        fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
        headers: { "x-api-key": "live_OKNLX8dRC904DPHjTGc2j7kzioTDfOfIbPsamIKDIFEuWtF0fb5dB9BwsniRWfDf" } })
            .then(response =>{

                if(response.ok){
                    return response.json();
                }else{
                    console.log('sometinh went wrong');
                }
            })
            .then(body =>{
                table.innerText = "";

                body.forEach(element => {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let img = document.createElement('img');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');

                    td.innerText = element.id;
                    img.src = element.url;
                    img.style.width = '200px';
                    img.style.height = '150px';
                    td1.appendChild(img)
                    // td1.innerText = element.url;
                    td2.innerText = element.width;
                    td3.innerText = element.height;

                    tr.append(td, td1,td2,td3);
                    table.append(tr);
                })
                console.log(body);

            })
            .catch(err =>{
                console.log(err);
            })

        //https://api.thecatapi.com/v1/images/search?limit=10
    }

    tenPics = () =>{
        let table = document.getElementById('tenTable');
        
        // fetch('https://api.thecatapi.com/v1/images/search?limit=5?api_key=live_OKNLX8dRC904DPHjTGc2j7kzioTDfOfIbPsamIKDIFEuWtF0fb5dB9BwsniRWfDf')
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')    
            .then(response =>{

                if(response.ok){
                    return response.json();
                }else{
                    console.log('sometinh went wrong');
                }
            })
            .then(body =>{
                table.innerText = ""

                body.forEach(element => {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let img = document.createElement('img');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');

                    td.innerText = element.id;
                    img.src = element.url;
                    img.style.width = '200px';
                    img.style.height = '150px';
                    td1.appendChild(img)
                    // td1.innerText = element.url;
                    td2.innerText = element.width;
                    td3.innerText = element.height;

                    tr.append(td, td1,td2,td3);
                    table.append(tr);
                })
                console.log(body);

            })
            .catch(err =>{
                console.log(err);
            })
    }

    fifteenPics = () =>{

        let table  = document.getElementById('fifteenTable');

        fetch('https://api.thecatapi.com/v1/images/search?limit=15', {
        headers: { "x-api-key": "live_OKNLX8dRC904DPHjTGc2j7kzioTDfOfIbPsamIKDIFEuWtF0fb5dB9BwsniRWfDf" } })
            .then(response =>{

                if(response.ok){
                    return response.json();
                }else{
                    console.log('sometinh went wrong');
                }
            })
            .then(body =>{
                table.innerText = "";

                body.forEach(element => {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let img = document.createElement('img');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');

                    td.innerText = element.id;
                    img.src = element.url;
                    img.style.width = '200px';
                    img.style.height = '150px';
                    td1.appendChild(img)
                    // td1.innerText = element.url;
                    td2.innerText = element.width;
                    td3.innerText = element.height;

                    tr.append(td, td1,td2,td3);
                    table.append(tr);
                })
                console.log(body);

            })
            .catch(err =>{
                console.log(err);
            })
    }

    twentyPics = () =>{

        let table  = document.getElementById('twentyTable');

        fetch('https://api.thecatapi.com/v1/images/search?limit=20', {
        headers: { "x-api-key": "live_OKNLX8dRC904DPHjTGc2j7kzioTDfOfIbPsamIKDIFEuWtF0fb5dB9BwsniRWfDf" } })
            .then(response =>{

                if(response.ok){
                    return response.json();
                }else{
                    console.log('sometinh went wrong');
                }
            })
            .then(body =>{
                table.innerText = "";

                body.forEach(element => {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let img = document.createElement('img');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');

                    td.innerText = element.id;
                    img.src = element.url;
                    img.style.width = '200px';
                    img.style.height = '150px';
                    td1.appendChild(img)
                    // td1.innerText = element.url;
                    td2.innerText = element.width;
                    td3.innerText = element.height;

                    tr.append(td, td1,td2,td3);
                    table.append(tr);
                })
                console.log(body);

            })
            .catch(err =>{
                console.log(err);
            })
    }
}

let viewController = new ViewControler();