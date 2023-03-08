let number=1;
let array=[];
let counuter=0;
while(counuter<10){
    if(counuter<2){
        array[counuter]=number;
    }else{
        array[counuter] = array[counuter-2] + array[counuter-1];
    }
    counuter++;
}
console.log(array);