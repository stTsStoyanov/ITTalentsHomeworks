let div = document.createElement('div')

let img = document.createElement('img')
img.src="./car.jpg"
img.style.width = '425px';
img.style.height = '225px';
img.style.position = 'absolute';
img.style.left = '300px';
img.style.top = '100px';

div.append(img)
document.body.append(div);

document.body.addEventListener('keydown', function(press){
    let step = 10;
    let up = img.offsetTop;
    let left = img.offsetLeft;
    // let down = img.offsetBottom; // offset works with top and left
    // let right = img.offsetRight; // offset works with top and left

    if(press.keyCode === 38){ //up
        up-=step;
        if(up>=50){
            img.style.top = `${up}px`//down + 'px';
        }
    }else if(press.keyCode === 40){ //down
        up+=step;
        if(up>=50 && up<=490){
            img.style.top = `${up}px`;
        }
    }else if(press.keyCode === 37){ // left
        left-=step;
        if(left >= 50){
            img.style.left = `${left}px`;
        }
    }else if(press.keyCode === 39){ //right
        left+=step;
        if(left >= 50 && left <= 1080){
            img.style.left = `${left}px`;
        }
    }

})
