let day=22;
let month=5;
let year=2022;
let daysRegular=365;
let daysNotRegular=366;
let difference=0;
let isTheYearLeap=false;

//30 -> 4,6,9,11
//31-> 1,3,5,7,8,10,12

if(month==1){
    difference=day;
}else if(month==2){
    difference+=31;
    if(year%4==0 && year%400==0 && year%100!=0){//LEAP
        isTheYearLeap=true;
        difference+=29-day;
    }
    else if(year%400==0 && year%100==0){ // the year is NOT leap!?
        difference+=28-day;
    }
}
else if(month==3 && isTheYearLeap){//golqmo
    difference+=60+day;
}
else if(month==3 && !isTheYearLeap){
    difference+=59+day;
}
else if(month==4 && isTheYearLeap){
    difference+=91+day;
}
else if(month==4 && !isTheYearLeap){
    difference+=90+day;
}
else if(month==5 && isTheYearLeap){
    difference+=121+day;
}
else if(month==5 && !isTheYearLeap){
    difference+=120+day;
}
else if(month==6 && isTheYearLeap){
    difference+=152+day;
}
else if(month==6 && !isTheYearLeap){
    difference+=151+day;
}
else if(month==7 && isTheYearLeap){
    difference+=182+day;
}
else if(month==7 && !isTheYearLeap){
    difference+=181+day;
}
else if(month==8 && isTheYearLeap){
    difference+=213+day;
}
else if(month==8 && !isTheYearLeap){
    difference+=212+day;
}
else if(month==9 && isTheYearLeap){
    difference+=244+day;
}
else if(month==9 && !isTheYearLeap){
    difference+=243+day;
}
else if(month==10 && isTheYearLeap){
    difference+=274+day;
}
else if(month==10 && !isTheYearLeap){
    difference+=273+day;
}
else if(month==11 && isTheYearLeap){
    difference+=305+day;
}
else if(month==11 && !isTheYearLeap){
    difference+=304+day;
}
else if(month==12 && isTheYearLeap){
    difference+=335+day;
}
else if(month==12 && !isTheYearLeap){
    difference+=334+day;
}

console.log(difference);




//if(year%4==0 && year%400==0 && year%100!=0){ // so the year is LEAP!
    //     if(month==2){//29days
    //         console.log()
    //     }
    //     else if(month=4 || month==6 || month==9 || month==11){//30days
    
    //     }
    //     else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){//31days
    
    //     }
    // }
    // else if(year%400==0 && year%100==0){ // the year is NOT leap!?
    
    // }
    // else{
    
    // }
//}



//Advanced way
// function daysIntoYear(date){
//     return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000; //from hours to minutes, to seconds to milliseconds
// }
// console.log(daysIntoYear(new Date(year,month-1, day)));


//-------------------------------------------------------------------
// let test = new Date();
// let test2 = new Date(test.getFullYear)
// console.log(test2)

//let days = new Date().getFullYear() % 4 == 0 ? 366 : 365; // trinary way to see if the year is leap or not, but it isn't working well
//let days = new Date(year,month-1, day+1)

