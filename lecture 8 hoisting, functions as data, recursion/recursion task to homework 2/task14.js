function task14(n){
    if(typeof n === "number" && n < 10){
        return;
    }
    if(typeof n == "number" && n > 10 && n < 200){
        if(n % 7 === 0){
            console.log(n);
        }
    }
    return task14(--n);
}
task14(21)