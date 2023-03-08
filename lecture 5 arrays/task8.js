let originalArray=[2,1,1,2,3,3,2,2,2,1];
let largestSeries=[];
let series=[];
let flag=true;
let startPoint=0;

for(let counter=0; counter<originalArray.length; counter++){
    if(originalArray[counter] == originalArray[counter+1]){
        series.push(originalArray[counter])
        startPoint=counter;
        while(flag){
            if(originalArray[startPoint]==originalArray[startPoint+1]){
                series.push(originalArray[startPoint+1]);
            }else{
                flag=false;
            }
            startPoint++;
        }
    }
    if(largestSeries.length < series.length){
        largestSeries.length=0;
        largestSeries = series.slice();
        series.length=0;
    }
    flag=true;
    series.length=0;
}
console.log(largestSeries);