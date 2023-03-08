function takeRandomPic(){
    let arr = ["https://img-9gag-fun.9cache.com/photo/a6q1pj8_460swp.webp",
            "https://img-9gag-fun.9cache.com/photo/adPg2rQ_460swp.webp",
            "https://img-9gag-fun.9cache.com/photo/amAgMLX_460swp.webp"];

    let result = Math.floor(Math.random() * arr.length);
    let img = document.createElement('img');
    img.src = arr[result];
    
    return document.body.append(img);
}



let div = document.createElement('div');
div.style.display = 'flex'
div.style.justifyContent = 'center';

let button = document.createElement('button')
button.style.display = 'flex';
button.style.justifyContent = 'center';
button.innerText = 'click me for random pic!';

div.append(button)
document.body.append(div);
document.body.style.marginTop = '5%';

button.addEventListener('click', takeRandomPic);