function Person(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location
}

function SnowWhite(name, age, location, mashteha){
    //states
    Person.call(this, name, age, location);
    this.fairness = 0;
    this.mashteha = mashteha;
    this.isGood=true;
    this.isSheGood = true;
    this.zasednalaQbulka = false;
    this.isDead = false;
    this.doesSheFallInLove = false;
    this.doesSheBreath = true;
    this.areHerEyesOpened = true;
    //behs
    this.grow = function(){
        this.age++;
        this.fairness++;
    }
    this.clean = function(){
        console.log(`${this.name} is cleaning...`);
    };
    this.cook = function(){
        console.log(`${this.name} is cooking...`);
    };
    this.wash = function(){
        console.log(`${this.name} is washing...`);
    };
    this.eat = function(hrana){
        // if(hrana instanceof Queen){ -----> 1-vo reshenie!
        //     this.zasednalaQbulka = true;
        //     this.isDead = true;
        //     this.doesSheBreath = true;
        //     this.areHerEyesOpened = false;
        //     this.doesSheBreath =false;
        //     console.log("Snow white eat a poisened food");
        // }else{
        //     console.log(`Snow white ate not poisened ${hrana}`);
        // } 
        //2-ro reshenie!?!
        if(hrana){
            this.zasednalaQbulka = true;
            this.isDead = true;
            this.doesSheBreath = false;
            this.areHerEyesOpened = false;
            this.isDead = true;
            this.isGood=false;
            console.log(`${this.name} eat a poisened food`);
        }else{
            console.log(`${this.name} ate not poisened ${hrana}`);
        }
    };
    this.fallInLove = function(param){
        this.doesSheFallInLove = true;
        console.log(`${this.name} fall in love with ${param.name}`);
    };
    this.liveHappy = function(param){
        //if(this.partner != undefined){
            console.log(`How everyting is perfect and Snow White live happy with her love ${param.name}`);
        //}
    };
    this.getMarried = function(param){
        console.log(`${this.name} is happy married to ${param.name} name?`);
    }
    this.changeLocation = function(param){
        this.location = param;
        //Prince.location = param;
    };
}
SnowWhite.prototype = Object.create(Person.prototype);
SnowWhite.prototype.constructor = SnowWhite;

function Hunter(name, age){
    Person.call(this, name, age);
    this.kill = function(boss, target){
        console.log(`My boss ${boss} told me that target ${target} must be killed!`);
    }
    this.takeToTheForest = function(target){
        target.location="Forest";
    }
    this.isTheTargetBadPerson = function(target){
        if(target.isSheGood){
            console.log(`${target.name} run as fast as you can, i will pretend that you are dead!`);
        }else{
            target.isDead = true;
            console.log(`${target.name} is executed!?!`);
        }
    }
}
Hunter.prototype = Object.create(Person.prototype);
Hunter.prototype.constructor = Hunter;

function Dwarfs(name, houseLocation){
    this.name = name;
    this.houseLocation = houseLocation;
}

function Queen(name, age, location){
    Person.call(this, name, age, location); // Constructor stealing...
    this.fairness = 9;
    this.agnry = false;
    this.isSheGood = true;
    this.isSheGreen = false;
    this.isSheHappy = true;
    this.howIsSheDressed;
    this.isSheJealous = false;
    this.callTheHunter = function(){
        return new Hunter("Pesho", 26);
    }
    //this.givePoisenedApple = function(target){
    this.givePoisenedApple = function(target, appleFunc, yesOrNo){
        //target.eat(this);//this zashtoto mi referva na Queen kogato pravq proverka v Snejanka
        //return target.isDead = true;

        target.eat(appleFunc.apple(yesOrNo))
    }
    this.changeDress = function(param){
        return this.howIsSheDressed = param;
    };
    this.changeLocation = function(newLocation){
        this.location = newLocation;
    }
    // this.askMirror = function(mirror){
    //     console.log("Mirror, mirror, which chicka on the world is the best???");
    //     console.log(this.mirror.whichIsTheFairnesst().name)
    // }
    this.askMirror = function (mirror) {
        console.log("Mirror on the wall, who is the fairest of them all?")
        console.log(mirror.whoIsTheFairest().name);//.name zashtot vzimame el 0 ot masiva, koito e obekt i s .name dostupwame imeto!
    }
    this.grow = function(){
        this.age++;
    }
}
Queen.prototype = Object.create(Person.prototype);
Queen.prototype.constructor = Queen

function Mirror(){
    this.isItMagic = true;
    this.canSpeek = true;
    let chicks=[];
    this.whoIsTheFairest = function(){
        let sorted = this.chicks.sort((a,b) => b.fairness - a.fairness);
        return sorted[0];
    }
}
function Apple(){
    this.apple = function(param){
        if(param=="yes"){
            return true
        }else{
            return false
        }
    }
}

function Prince(name, age, location){
    Person.call(this, name, age, location);
    this.isHeHandsome = true;
    this.hasHeSawSw = false;
    this.isHeInLove = false;
    this.isHeMinor = true;
    this.walkingAtLocation = function(param){
        console.log(`The prince named ${this.name} is wolking at ${param}`);
        this.location = param;
    };
    this.kissSomeoneDead = function(target){
        if(target.name == "Snejanka"){
            target.zasednalaQbulka=false;
            target.isDead = false;
            target.doesSheBreath = true;
            target.areHerEyesOpened = true;
            target.isGood = true;
            target.isDead = false;
        }
    };
    this.checkIsThePersonGood = function (target){
        target.isGood ? console.log(`${this.name} seeing that ${target.name} is good!`) : console.log(`${this.name} seeing that ${target.name} is not good...`);
    };
    this.liveHappy = function (){
        this.isMarried() ? console.log(`${this.name} does live happy.`) : console.log(`${this.name} does not live happy....`);
    }
    this.isMarried = function (){
        if(this.isHeInLove){
            return true;
        }else{
            return false;
        }
    }
}
Prince.prototype = Object.create(Person.prototype);
Prince.prototype.constructor = Prince;

let qn = new Queen("Durto Zlo AKA Kralicata", 107, "Castle");
let sw = new SnowWhite("Snejanka", 0, "Castle",qn.name);
let magicMirror = new Mirror();
magicMirror.chicks = [sw, qn];
let appleQueen = new Apple();
let pr = new Prince("Krasaveca", 26, "Monaco");

//qn.changeDress("kato stara baba")
//console.log(qn.howIsSheDressed)
// let hn = qn.callTheHunter();//create hunter through the queen
// delete hn.location;
// hn.kill(qn.name, sw.name);
// console.log(hn)
// hn.isTheTargetBadPerson(sw);
//console.log(sw)

//qn.givePoisenedApple(sw, appleQueen, "yes");
//console.log(pr)

for(let i=0; i<=10; i++){
    qn.askMirror(magicMirror);
    sw.grow();
    qn.grow();
}

let hn = qn.callTheHunter();//created hunter through the queen
delete hn.location;
hn.kill(qn.name, sw.name);
hn.isTheTargetBadPerson(sw);
sw.changeLocation("forest");
console.log(`Snejanka's location ${sw.location}`);

let dwafrs=[];
for(let i=1; i<=7; i++){
    dwafrs.push(new Dwarfs(`Dwarf${i}`, "Forest house"));
};
sw.changeLocation(dwafrs[0].houseLocation);
console.log(`Snejanka's location ${sw.location}`);
sw.clean();
sw.cook();
sw.wash();


qn.askMirror(magicMirror) 
qn.isSheGreen=true;

qn.changeDress("stara baba");
qn.changeLocation("Forest");
console.log(`${qn.name} is at ${qn.location} dressed up like ${qn.howIsSheDressed}`);
qn.givePoisenedApple(sw,appleQueen,"yes");
qn.changeLocation("Castle")
qn.changeDress("kralsko obleklo");

pr.walkingAtLocation("Forest");
pr.checkIsThePersonGood(sw)
pr.isHeInLove = true;
pr.isHeMinor = true;
pr.kissSomeoneDead(sw);

sw.fallInLove(pr);
sw.getMarried(pr);
pr.isMarried();
sw.liveHappy(pr);
pr.liveHappy();

qn.fairness=0;
qn.isSheJealous=true;
qn.isSheJealous ? console.log(`${qn.name} is not beauty and she is alone as a piece of sh....\nTHE END!`) : console.log(`${qn.name} is still a bit beauty`);