let select = document.getElementById('cars');
let options = document.querySelectorAll('option')
console.log(options);
let stoinosti = [];
for(let i=0; i< options.length; i++){
    stoinosti.push(options[i].text)
    //alert(options[i].text)
}

select.addEventListener('change', function () {
    alert(this.value) // this -> the target element, which is the selected option, and when selested alert the value
    // alert(this.text)
});

// select.addEventListener('click',  test);

// function test(e){
//     let target = e.currentTarget; // таргет и тхисТаргет са едно и също!
//     console.log(target);
//     let thisTarget = this;// таргет и тхисТаргет са едно и също!
//     console.log(thisTarget)
// }

