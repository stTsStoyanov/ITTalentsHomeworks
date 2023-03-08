// setting body's style
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.marginTop = '5%';
document.body.style.marginBottom = '10%';
document.body.style.backgroundImage = "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)";

//creating and setting form + style
let form = document.createElement('form');
form.setAttribute("action", "");
form.style.backgroundColor = 'white';
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.width = '40%';
form.style.marginTop = '5%';
form.style.paddingTop = '40px';
form.style.paddingLeft = '100px';
form.style.paddingRight = '100px';
form.style.paddingBottom = '100px';
form.style.borderRadius = '10px';
//appending form to body
document.body.append(form);

//creating div element function
function createDiv() {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.width = '100%';
    // div.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
    div.style.marginTop = '1%';
    div.style.marginBottom = '1%';
    div.style.paddingBottom = '0.5%';

    return div;
}

//creating h1 heading and div container
let h1 = document.createElement('h1');
h1.innerText = 'Test Form';
h1.style.display = 'flex';
h1.style.justifyContent = 'center';
h1.style.fontSize = '22px';
h1.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";

//appending div container to form
let divH1 = createDiv();
divH1.appendChild(h1);
form.appendChild(divH1);

//creating div container, h3 and input function
function inputText(placeholder, title, className) {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.width = '100%';
    div.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
    div.style.marginTop = '1%';
    div.style.marginBottom = '1%';
    div.style.paddingBottom = '0.5%';

    let h3 = document.createElement('h3');
    h3.innerText = title;
    h3.style.marginTop = '5px';
    h3.style.marginBottom = '5px';
    h3.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";

    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('class', 'textInput');
    input.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";
    input.style.marginTop = '1%';
    input.style.height = '40px';
    input.style.borderStyle = 'none';
    input.style.borderBottom = '1px solid #000';
    div.appendChild(h3);
    div.appendChild(input);

    // return form.appendChild(div)
    return div;
}
// inputText("Enter Your Full Name", 'Full Name', 'd1');

//creating and appending 3div-tags with inputs for: name, email and phone number.
let divEnterName = inputText("Enter Your Full Name", 'Full Name', 'd1');
let divEmail = inputText("Enter Your Email", 'Email', 'd1')
let divPhoneNumber = inputText("Enter Your Phone Number", 'Phone Number', 'd1');
form.append(divEnterName, divEmail, divPhoneNumber);

//radio buttons function
function radioButton(ratioText) {
    let div = document.createElement('div');

    let input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("name", 'age');
    input.style.width = '10px';

    let label = document.createElement('label');
    label.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";
    label.innerText = ratioText;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

//heading creator function
function h3Creator(text) {
    let h3 = document.createElement('h3');
    h3.style.marginTop = '10px';
    h3.style.marginBottom = '10px';
    h3.innerText = text;
    h3.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";
    
    return h3;
}

let radioDiv = createDiv();
radioDiv.append(h3Creator("Age"));
let input18 = radioButton(" < 18");
let input18To35 = radioButton(" 18 - 35");
let input35 = radioButton(" 35 +");
radioDiv.append(input18, input18To35, input35);
form.append(radioDiv);

//checkbox creator function
function checkboxButton(checkboxText) {
    let div = document.createElement('div');

    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.style.width = '10px';

    let label = document.createElement('label');
    label.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";
    label.innerText = checkboxText;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

let checkboxDiv = createDiv();
checkboxDiv.append(h3Creator("Education"));
checkboxDiv.append(checkboxButton("High School"), checkboxButton("Some College"), checkboxButton("Associate's Degree"), checkboxButton("Bachelor's Degree"));
form.append(checkboxDiv);

let appointment = createDiv();
appointment.append(h3Creator("Appointment Date"))
let dateLabel = document.createElement('input');
dateLabel.setAttribute("type", "date");
dateLabel.setAttribute("placeholder", 'date');
dateLabel.style.marginBottom = '1%';
dateLabel.style.height = '40px';
dateLabel.style.borderStyle = 'none';
dateLabel.style.borderBottom = '1px solid #000';
appointment.append(dateLabel);
form.append(appointment)

//option creator function
function createOption(text, value, selected){
    let option = document.createElement('option');
    option.value = value;
    option.innerText = text;
    option.selected = selected;

    return option;
}

let selectReasonDiv = createDiv();
selectReasonDiv.append(h3Creator("Reason for Appointment"))
let select = document.createElement('select');
select.style.width = '25%';
select.style.background = 'whitesmoke';
select.append(createOption('Reason 1.', 'Reason 1'))
select.append(createOption('Well i do not wanna work, so that is the reason.', 'Reason 2'))
select.append(createOption(' I have a headache.', 'Reason 3'))
select.append(createOption('Select reason...', 'Reason 4', 'selected'));
selectReasonDiv.append(select);
form.append(selectReasonDiv);


let messageDiv = createDiv();
messageDiv.append(h3Creator("Message"));
let input = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute('placeholder', "Enter a Message");
input.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif    ";
input.style.marginTop = '0.5%';
input.style.height = '40px';
input.style.borderStyle = 'none';
input.style.borderBottom = '1px solid #000';
messageDiv.append(input);
form.append(messageDiv);

//creating submit button
let submitDiv = createDiv();
let button = document.createElement('button');
button.innerText = 'Submit';
button.style.display = 'flex';
button.style.justifyContent = 'center';
button.style.marginTop = '50px';
button.style.marginRight = '10%';
button.style.marginLeft = '10%';
button.style.padding = '2%';
button.style.backgroundImage = "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)";
button.style.borderRadius = '10px';
button.style.borderStyle = 'none';
submitDiv.append(button);
form.append(submitDiv);