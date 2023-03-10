let today = document.getElementById("today");
let weeks = document.getElementById("weekDays");

function oneDay(source, container){

    let div = document.createElement('div');
    div.style.border = '2px solid black';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.width = '200px';
    div.style.height = '130px';
    div.style.margin = '5px';

    let dateTime = document.createElement('span')
    // dateTime.style.margin = 1;
    dateTime.innerText = "Time: " + source.currentConditions.datetime;

    let temp = document.createElement('span');
    temp.innerText = "Current temperature: " +  source.currentConditions.temp + "°C";

    let feelsLike =   document.createElement('span');
    feelsLike.innerText ="Feels like: " + source.currentConditions.feelslike + "°C";

    let visability = document.createElement('span');
    visability.innerText = "Visability: " +  source.currentConditions.visibility;

    let sunRice = document.createElement('span');
    sunRice.innerText = "Sun rice at: " +  source.currentConditions.sunrise;

    let sunSet =  document.createElement('span');
    sunSet.innerText = "Sun set at: " +  source.currentConditions.sunset;

    let snow =   document.createElement('span');
    snow.innerText = "Chance of snowfall: " + source.currentConditions.snow;

    div.append(
        dateTime,
        temp,
        feelsLike,
        visability,
        sunRice,
        sunSet,
        snow
    );

    container.append(div);
};

function twoWeeksFast(source, i, container){
    let div = document.createElement('div');
    div.style.border = '2px solid black';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.width = '200px';
    div.style.height = '160px';
    div.style.margin = '5px';
    // div.style.flexWrap = 'wrap';

    let dateTime = document.createElement('span')
    // dateTime.style.margin = 1;
    dateTime.innerText = "Day: " + source.days[i].datetime;

    let tempmax = document.createElement('span');
    tempmax.innerText = "Maximum temperature: " +  source.days[i].tempmax + "°C";

    let tempmin = document.createElement('span');
    tempmin.innerText = "Minimum temperature: " +  source.days[i].tempmin + "°C";

    let feelsLike =   document.createElement('span');
    feelsLike.innerText ="Feels like maximum: " + source.days[i].feelslikemax + "°C";

    let visability = document.createElement('span');
    visability.innerText = "Visability: " +  source.days[i].visibility;

    let sunRice = document.createElement('span');
    sunRice.innerText = "Sun rice at: " +  source.days[i].sunrise;

    let sunSet =  document.createElement('span');
    sunSet.innerText = "Sun set at: " +  source.days[i].sunset;

    let preciptype =   document.createElement('span');
    let precip = source.days[i].preciptype ? source.days[i].preciptype[0] : 'good weather';
    // let l = source.days[i].preciptype
    // if( l != null){
    //     preciptype.innerText = "Chance of snowfall: " + source.days[i].preciptype[0];
    // }else if(l == null){
    //     preciptype.innerText = "Chance of snowfall: " + 'good weather';
    // }
    preciptype.innerText = "Chance of snowfall: " + precip;

    div.append(
        dateTime,
        tempmax,
        tempmin,
        feelsLike,
        visability,
        sunRice,
        sunSet,
        preciptype
    );

    container.append(div);
}

let request = new XMLHttpRequest();
//request.open("GET","https://api.open-meteo.com/v1/forecast?latitude=42.70&longitude=23.32&hourly=temperature_2m");
//request.open("GET","https://api.open-meteo.com/v1/forecast?latitude=42.698&longitude=23.319&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
request.open("GET", "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sofia?unitGroup=metric&key=9DK2NJ2HW36DZVYKJGVM364WC&contentType=json");
request.send();
request.responseType = 'json';

request.onload = () => {

    for (let key in request.response) {
        console.log(key);
    }

    console.log(request.response.currentConditions)
    console.log(request.response.latitude)
    console.log(request.response.longitude);


    console.log(request.response.days)


    oneDay(request.response, today);

    for(let i=0; i < request.response.days.length; i++){
        twoWeeksFast(request.response, i, weeks);
    }
    
}

