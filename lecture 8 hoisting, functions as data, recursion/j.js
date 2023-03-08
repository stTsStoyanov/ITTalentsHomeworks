function r(arr){
    if(arr.length == 1){
        return arr[0];
    }
    return arr.pop() + r(arr);
}
//console.log(r([1,2,3]))

function recursionTest01(numb){
    if(numb===10){
        return 10;
    }
    console.log(numb);
    return recursionTest01(++numb);
}
//console.log(recursionTest01(1))

function recursionTest02(arr,counter){
    if(arr[counter] === "chokolade"){
        return "Yes there is chokolade";
    }

    return `At possition ${counter} of array is not a chokolate\n` + recursionTest02(arr, ++counter);

}
//console.log(recursionTest02([1,5,"opa",6,7,"neee","chokolade", "qko", 5],0));

let field=[[" "," ","x"," ", " "],
           [" ","x"," ","x", " "],//1,2
           [" ","x","x","x", "x"],
           [" ","x"," "," ", " "], //3,2
           [" ","x","x"," ", " "]];
//console.table(field);
function recursionTest03 (arr, x, y){
    if( x<0 ||
        x >= arr.length ||
        y<0 ||
        y >= arr[x].length ||
        arr[x][y] == "x" ||
        arr[x][y] == "$"
        ){
            return;
        }

    arr[x][y] = "$";
    recursionTest03(arr,x+1,y);
    recursionTest03(arr,x-1,y);
    recursionTest03(arr,x,y+1);
    recursionTest03(arr,x,y-1);
}
//recursionTest03(field,3,2);
//console.table(field);

function recursionTest04(str1,str2,len){
    if(len == str1.length ||
       len == str2.length
        ){
            return;
        }
    
    if(str1[len] != str2[len]){
        console.log( `${len+1} ${str1[len]} - ${str2[len]}`); //works
        //return `${len+1} ${str1[len]} - ${str2[len]}`; //doesnt work...?
    }
    recursionTest04(str1,str2,++len);
}
//console.log(recursionTest04("hipopotam","hipopotuk",0));

function recursionTest05(str,counter){
    let [name1, name2] = str.split(", ");
    let startPoint=0;
    let sumName1=0;
    let sumName2=0;
    if(name1.length > name2.length){
        startPoint = name1.length;
    }else{
        startPoint = name2.length;
    }
    if(counter == startPoint){ // base case
        return
    }
    sumName1+=Number(name1.charCodeAt(counter)); //dali shte e taka ili kato dolu vse taq
    sumName2+=Number(name2.charCodeAt(counter));
    // name1.length-1 >= counter ? sumName1+=name1.charCodeAt(counter) : sumName1;
    // name2.length-1 >= counter ? sumName2+=name2.charCodeAt(counter) : sumName2;

    recursionTest05(str, ++counter);//recursion step
        
    return sumName1 < sumName2 ? name1 : name2;
}

//console.log(recursionTest05("Anna Dosewa Asenowa, Iwo Peew Peew",0));
let s="super qka zadacha";
function recursionTest06(str1,result,len){
    if(len === str1.length){//base case
        return
    }

    if(len == 0){
        result += str1[len].toUpperCase();
    }else if(str1[len] == " "){
        result += " " + str1[len+1].toUpperCase();
    }

    
    return console.log(result), recursionTest06(str1, result, ++len);
}
//console.log(recursionTest06(s,"",0));

function recursionTest06TWO(str1,result,len){
    if(len === 1){//base case
        result+=str1[0].toUpperCase();
        return result.reverse();
    }else{

    }

    if(len == 0){
        result += str1[len].toUpperCase();
    }else if(str1[len] == " "){
        result += " " + str1[len+1].toUpperCase();
    }

    recursionTest06TWO(str1, result, --len);
}
//console.log(recursionTest06TWO(s,"",s.length));


function task1(number){
    if(number>50){
        return;
    }
    console.log(number)
    task1(++number);
}
console.log(task1(-20));