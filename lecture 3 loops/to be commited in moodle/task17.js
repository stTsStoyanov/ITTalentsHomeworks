let side=Math.floor((Math.random()*20)+3);
let sign="+";
let star="*";
let fewStars="";
let row=""


for(let counter=0; counter<side; counter++){
    if(counter==0){
        for(let starCounter=0; starCounter<side; starCounter++){
            fewStars+=star;
        }
        console.log(fewStars)
    }

    if(counter>0 && counter<side-1){
        row+=star;
        for(let rowCounter=0; rowCounter<side-2; rowCounter++){
            row+=sign;
        }
        row+=star;
        console.log(row);
        row="";
    }

    if(counter==side-1){
        console.log(fewStars)
    }
}