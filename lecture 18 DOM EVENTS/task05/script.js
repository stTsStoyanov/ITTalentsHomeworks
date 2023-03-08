
let btn = document.getElementById("submitBtn");

btn.addEventListener('click', checkInputs);

function checkInputs(event) {
    event.preventDefault(); // to be sure that the value of input won't vanish after click on the button
    let inp1 = document.getElementById('inp1');
    let inp2 = document.getElementById('inp2');
    let inp3 = document.getElementById('inp3');

    if (inp1.value >= 0 && inp1.value <= 255 && inp1.value != '') {
        inp1.style.backgroundColor = 'red';
    }else if(inp1.value < 0){
        inp1.value = 0;
    }
    
    if (inp2.value >= 0 && inp2.value <= 255 && inp2.value != '') {
        inp2.style.backgroundColor = 'green';
    }else if(inp2.value < 0){
        inp2.value = 0;
    }
    
    if (inp3.value >= 0 && inp3.value <= 255 && inp3.value != '') {
        inp3.style.backgroundColor = 'blue';
    }else if(inp3.value < 0){
        inp3.value = 0;
    }
}















































// let form = document.createElement('form');
// form.style.display = 'flex'
// form.style.flexDirection = 'column'

// let input1 = document.createElement('input');
// input1.setAttribute('type', 'text');
// input1.setAttribute('class', 'input1!!!!!!!');
// form.appendChild(input1)

// let input11 = document.createElement('input');
// input11.setAttribute('class', 'input1');
// input11.setAttribute('type', 'text');

// let input2 = document.createElement('input');
// input2.setAttribute('class', 'input2');
// input2.setAttribute('type', 'text');
// form.appendChild(input2)

// let input3 = document.createElement('input');
// input3.setAttribute('class', 'input3');
// input3.setAttribute('type', 'text');
// form.appendChild(input3)

// let inputButton = document.createElement('input');
// input1.setAttribute('class', 'input4');
// input1.setAttribute('type', 'submit');
// form.appendChild(inputButton)
// // form.append(inputButton, input3, input2, input1)


// document.body.append(form);