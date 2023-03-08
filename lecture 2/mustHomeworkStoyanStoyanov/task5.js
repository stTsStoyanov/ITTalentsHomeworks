//5,3,8
let variableOne=55;
let variableTwo=3;
let variableThree=56;

if(typeof variableOne=="number" && typeof variableTwo=="number" && typeof variableThree=="number"){
    if(variableOne>variableTwo){
        if(variableOne>variableThree){
            if(variableTwo>variableThree){
                console.log(variableOne, variableTwo, variableThree)
            }
            else{
                console.log(variableOne, variableThree, variableTwo)
            }
        }
    }
    if(variableTwo>variableThree){
        if(variableOne>variableThree){
            console.log(variableTwo, variableOne, variableThree)
        }
        else{
            console.log(variableTwo, variableThree, variableOne)
        }
    }
    if(variableThree>variableOne){
        if(variableThree>variableTwo){
            if(variableOne>variableTwo){
                console.log(variableThree, variableOne, variableTwo)
            }
            else{
                console.log(variableThree, variableTwo, variableOne)
            }
        }
        
    }
}
else{
    console.log("The input is not a number!")
}
