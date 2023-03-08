let originalArray=[-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
let result=[];
let serialNumber=1;
let avgNumber=0;
let avg=0;

for(let counter=0; counter<originalArray.length; counter++){
    if(originalArray[counter] < -0.231 &&originalArray[counter] > -10.00 ){
        let temp=((counter+1)*(counter+1) + 41.25);
        result.push(temp);
        avgNumber++;
        avg+=temp;
    }else if( originalArray[counter] > -0.231 && originalArray[counter] < 10.00){
        if(originalArray[counter] == 0){
            result.push(originalArray[counter]);
        }else{
            let temp=(originalArray[counter] * serialNumber)
            result.push(temp);
            avgNumber++;
            avg+=temp;
        }
    }
    serialNumber++
}
console.log(`This is the original array ${originalArray}`);
console.log(`This is the modified array ${result}`);
console.log(`This is the average of the elements exepting 0, = ${Math.round(avg/avgNumber*100)/100}`);
