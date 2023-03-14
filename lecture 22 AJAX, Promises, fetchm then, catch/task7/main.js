let formIp = document.getElementById('formIp');
let result = document.getElementById('result');
result.style.display = 'none';


formIp.addEventListener('input',(e)=>{
    // console.log(e.currentTarget.ip.value)

    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${e.target.value}`)
        .then(response =>{

            if(response.ok){
                return response.json()
            }else{
                console.log('Someting went wrong');
            }
        })
        .then(info =>{
            result.innerHTML="";
            let span = document.createElement('span');
            console.log(info);
            info.forEach(element => {
                console.log(element)
                result.style.display = 'flex';
                // span.innerText = JSON.stringify(element);
                span.innerText = "Result"; 
                span.style.color = 'white';
                span.style.margin = '20px';
                result.append(span);  

                span.onclick = (e) =>{
                    span.innerText = `Name: ${element.name}, Origin:${element.origin}, Life span: ${element.life_span}`;
                }
                
            });
        })
    


})


