

function a(){
    function b(){
        console.log(c)
    }
    var c="Maika mu";

    return function (){
        return b()
    }
}
console.log(a()())

let inp=["a","A"];
console.log(inp[1] === inp[0].toUpperCase())