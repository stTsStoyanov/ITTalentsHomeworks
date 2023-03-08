let nameString="Anna Dosewa Asenowa, Iwo Peew Peew";
[ name1, name2] = nameString.split(",");
name2=name2.trim();
let name1Sum=0;
let name2Sum=0;
for(let i=0; i<name1.length; i++){
    name1Sum+=name1.charCodeAt(i);
}
for(let i=0; i<name2.length; i++){
    name2Sum+=name2.charCodeAt(i);
}
name1Sum > name2Sum ? console.log(name1) : console.log(name2);