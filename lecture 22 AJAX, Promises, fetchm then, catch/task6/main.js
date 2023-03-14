let formIp = document.getElementById('formIp');
let submit = document.getElementById('submitBtn');
let result = document.getElementById('result');
result.style.display = 'none';
let ipAddress = 0;

formIp.addEventListener('input',(e)=>{
    // console.log(e.currentTarget.ip.value)

    ipAddress = String(e.currentTarget.ip.value)
    console.log(ipAddress)
    


})

submit.addEventListener('click', (e) =>{
    fetch(`https://ipapi.co/${ipAddress}/json/`)
    .then(response =>{
        
        if(response.ok){
            return response.json();
        }else{
            console.log('Someting went wrong');
        }
    })
    .then(info =>{
        console.log(info)
    
        result.style.display = 'flex';
        result.value = info.reason || info.region;
    })
})

//191.223.4.66
//192.168.1.14
//151.251.247.119 
