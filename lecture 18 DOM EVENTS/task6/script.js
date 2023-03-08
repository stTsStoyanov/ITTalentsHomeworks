let btn = document.getElementById('submitBtn');
let form = document.getElementById('form');

btn.addEventListener('click', validateInput);

function createSpan(id){
    let span = document.createElement('span');
    span.innerText = 'Wrong input, try again!';
    span.id = id;

    return span;
}

function validateInput(event){
    event.preventDefault();

    
    let inp1 = document.getElementById('inp1');
    let inp2 = document.getElementById('inp2');

    if(!(inp1.value.length >= 3 && inp1.value.length <= 9)){
        if(!document.getElementById('inp1Span')){
            let text = createSpan('inp1Span');
            form.insertBefore(text, inp2);
        }
    }else{
        // let el = document.getElementById('inp1Span'); // works, good option 
        // let el = document.querySelector("#form>#inp1Span"); // works, another option
        let el = document.querySelector("#form>span"); // works, another option
        console.log(el)
        if(el){ // if there is el there is a truthy value, else the value is 'null' which is falsy!
            el.parentElement.removeChild(el); 
        }
    }

    if(!(inp2.value.length >= 3 && inp2.value.length <= 9)){
        if(!document.getElementById('inp2Span')){
            let text = createSpan('inp2Span');
            form.insertBefore(text, btn);
        }
    }else{
        // let el = document.getElementById('inp1Span'); // works, good option 
        // let el = document.querySelector("#form>#inp1Span"); // works, another option
        let el = document.querySelector("#form>span"); // works, another option
        console.log(el)
        if(el){ // if there is el there is a truthy value, else the value is 'null' which is falsy!
            el.parentElement.removeChild(el); 
        }
    }



}