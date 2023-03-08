let btn = document.getElementById('submitBtn');
btn.addEventListener('click', handler)

let masterDiv = document.createElement('div');
masterDiv.classList.add = 'container';
masterDiv.style.display = 'flex';
masterDiv.style.justifyContent = 'center';
masterDiv.style.flexDirection = 'column'
document.body.append(masterDiv);

function createContainerElements(text, parent, id){
    let div = document.createElement('div');
    div.style.display = 'flex';

    let span = document.createElement('span');
    span.innerHTML = text;
    span.id = `span${id}`;
    span.style.margin = '3px';

    span.addEventListener('click', spanText);

    let button = document.createElement('button');
    button.innerText = "X";
    button.id = "button"+id;

    button.addEventListener('click', removeFromList);

    div.append(span, button);
    parent.append(div);
}

function spanText(event){//add and removes crossed line over the text

    // event.currentTarget; //dava mi samiq target, koito e span element!!!!!
    // event.target; // dava mi elementa, koito e vutre v spana!

    // console.log(event.currentTarget);
    // console.log(event.currentTarget.children.length) // dava mi broq na nested children vutre v span
    
    let text = event.target.innerText;
    // console.log(text);

    if(!event.currentTarget.children.length){
        let del = document.createElement('del');
        del.innerText = text;
        event.target.innerText ="";
        event.target.append(del);
    }else{
        event.currentTarget.removeChild(event.target)
        // console.log(`oaasdkmeac   ${childDel}`) 
        event.currentTarget.innerText = text;
    }
}

function removeFromList(event){
    event.currentTarget.parentNode.remove(event.currentTarget.parentNode);
}

let idNumber=0;

function handler(event){
    event.preventDefault();

    let input = document.getElementById('inp1');
    if(input.value){
        createContainerElements(input.value, masterDiv, ++idNumber);
        input.value = '';
    }
}