let xa=5;
let ya=-3;
if(xa>0 && ya>0){
    console.log(`Dot 'A' with coordinates x:${xa}, y:${ya} lies in a quadrant I`)
}
else if(xa>0 && ya<0){
    console.log(`Dot 'A' with coordinates x:${xa}, y:${ya} lies in a quadrant IV`)
}
else if(xa<0 && ya<0){
    console.log(`Dot 'A' with coordinates x:${xa}, y:${ya} lies in a quadrant III`)
}
else if(xa<0 && ya>0){
    console.log(`Dot 'A' with coordinates x:${xa}, y:${ya} lies in a quadrant II`)
}