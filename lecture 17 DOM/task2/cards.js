
document.body.style.background = 'whitesmoke'
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';

// creating functions for the needed elements

function createDiv() {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'row';


    // div.style.width = '40%';
    // div.style.flex = '1';
    div.style.width = "33%";

    // div.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
    div.style.marginTop = '1%';
    div.style.marginBottom = '1%';
    div.style.paddingTop = '1%';

    return div;
}

function createFuncDiv(){
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center';
    div.style.margin = '3%';

    return div;
}

function createImg(src){
    let img = document.createElement('img');
    img.src = src;
    img.style.display = 'flex';
    img.style.justifyContent = 'center';
    img.style.alignItems = 'center';
    img.style.width = '225px';
    img.style.height = '225px';
    img.style.marginLeft = '22%'
    img.style.marginRight = '33%'
    img.style.marginTop = '1%'

    return img;
}

function createH1(text){
    let h1 = document.createElement('h1');
    h1.innerText = text;
    h1.style.display = 'flex';
    h1.style.justifyContent = 'center';
    h1.style.margin = '3%';
    h1.style.fontSize = '20px';

    return h1;
}

// function createStarRating(){ // why this is not working???
//     let div = document.createElement('div');
//     div.style.display = 'flex';
//     div.style.justifyContent = 'center'
//     let span1 = documnet.createElement('span');
//     span1.setAttribute("class" , "fa fa-star checked");
//     let span2 = documnet.createElement('span');
//     span2.setAttribute("class" , "fa fa-star checked");
//     let span3 = documnet.createElement('span');
//     span3.setAttribute("class" , "fa fa-star checked");
//     let span4 = documnet.createElement('span');
//     span4.setAttribute("class" , "fa fa-star");
//     let span5 = documnet.createElement('span');
//     span5.setAttribute("class" , "fa fa-star");

//     //div.append(span1, span2, span3, span4, span5);
//     div.append(span1);
//     div.append(span2);
//     div.append(span3);
//     div.append(span4);
//     div.append(span5);

//     return div;
// }

function createStar(){
    let div = createFuncDiv();
    let star = document.createElement('span');
    star.innerText = '*****';
    star.style.color = 'orange';
    div.append(star);

    return div;
}

function createSpans(text1, text2){
    let div = createFuncDiv();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    span1.innerText = text1;
    span2.innerText = text2;
    div.append(span1, span2);

    return div;
}

function createPriceSpan(text, color){
    let div = createFuncDiv();
    let span1 = document.createElement('span');
    span1.innerText = text;
    span1.style.fontSize = '28px';
    span1.style.color = color;
    div.append(span1);

    return div;
}

function createSubmitButton(color){
    let button = document.createElement('button');
    button.style.color = 'white';
    button.style.background  = color;
    button.style.borderStyle = 'none';
    button.style.height = '50px';
    button.innerText = 'ADD TO CART'

    return button;

}


//creating the content

let mainDiv = createDiv();
mainDiv.style.marginTop = '5%';
mainDiv.style.width = '90%'
mainDiv.style.marginBottom = '5%';

let card1 = createDiv();
card1.style.flexDirection = 'column';
card1.style.margin = '40px';
card1.style.background = 'white'
card1.append(createImg('./chasovnik.jpg'))
card1.append(createH1('G A R N I E R'))
card1.append(createSpans("Garnier Pure Active Micellar", "Cleansing Water, 125 ml"));
card1.append(createPriceSpan("$60", 'aqua'));
card1.append(createStar());
card1.append(createSubmitButton('aqua'));


let card2 = createDiv();
card2.style.flexDirection = 'column';
card2.style.margin = '40px';
card2.style.background = 'white'
card2.append(createImg('./obuvki.jpg'))
card2.append(createH1('G A R N I E R'))
card2.append(createSpans("Garnier Pure Active Micellar", "Cleansing Water, 125 ml"));
card2.append(createPriceSpan("$60", 'rgb(250, 106, 16)'));
card2.append(createStar());
card2.append(createSubmitButton('rgb(250, 106, 16)'));

let card3 = createDiv();
card3.style.flexDirection = 'column';
card3.style.margin = '40px';
card3.style.background = 'white'
card3.append(createImg('./t-shurt.png'))
card3.append(createH1('G A R N I E R'))
card3.append(createSpans("Garnier Pure Active Micellar", "Cleansing Water, 125 ml"));
card3.append(createPriceSpan("$15", 'orange'));
card3.append(createStar());
card3.append(createSubmitButton('orange'));

// appending the elements to main div and body
mainDiv.append(card1)
mainDiv.append(card2)
mainDiv.append(card3);
document.body.append(mainDiv)