function nFactiriel(number){
    for(let i=number-1; i>=1; i--){
        number *=i;
    }
    return number;
}
let test = nFactiriel(5);
console.log(test);