let inp="Today is a grEat day for Test!";
function upperToSmaller(str){
    let small=0;
    let big =0;
    let result=0;
    let strArr=str.split(" ");
    console.log(strArr)
    strArr = strArr.join("");
    if(typeof str === "string"){
        for(let i=0; i<strArr.length; i++){
            //if(strArr[i].charCodeAt(i) >=65 && strArr[i].charCodeAt(i)<=90 ||
                //strArr[i].charCodeAt(i) >= 97 && strArr[i].charCodeAt(i)<=122){
                    if(strArr[i] === strArr[i].toUpperCase()){
                        big++;
                        
                    }else{
                        small++;
                        
                    }
            //}
        }
        console.log(big)
        console.log(small)
        result=big/small;
    }else{
        return console.log("Wrong input");
    }
    return result;
}console.log(upperToSmaller(inp));