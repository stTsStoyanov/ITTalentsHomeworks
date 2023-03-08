let sideA=5;
let sideB=3;
let sideC=8;
let faceOfTriangle;
let perimeterOfTriangle;

//нашия триъгълник е правоъгълен с прав ъгъл при върха 'C'. Страната а=hв, в=hа.
faceOfTriangle = (0.5*sideA)*sideB;
perimeterOfTriangle=sideA+sideB+sideC;
console.log(`The face of triangle ABC is:${faceOfTriangle} and the perimeter is:${perimeterOfTriangle}`);