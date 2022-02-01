import { addElements, h1, h2, divLogoInfo, divHoursPrevisions, divDaysPrevisions } from "./addElements.js";
import { displayDays }                                                             from "./timing-manager.js";
import { key }                                                                     from "./api-weather.js";

addElements(h1, h2, divLogoInfo, divHoursPrevisions, divDaysPrevisions);

const APIKEY            = key; /* your api key */
const WEATHER           = document.querySelector('.weather');
const TEMPERATURE       = document.querySelector('.temp-value');
const LOCALISATION      = document.querySelector('.localisation');
const ICONE             = document.querySelector('.logo');
const HOURS             = document.querySelectorAll('.hour-prevision-name');
const HOURS_TEMPERATURE = document.querySelectorAll('.hour-prevision-value');
const DAYNAMES          = document.querySelectorAll('.day-prevision-name');
const DAYS_TEMPERATURE  = document.querySelectorAll('.day-prevision-value');
let   currentHour       = new Date().getHours();
let   apiResult, hourIncrement;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);

        let longitude = position.coords.longitude;
        let latitude  = position.coords.latitude;

        callAPI(longitude, latitude);
    }, () => {
        alert('Veuillez activer la géolocalisation pour recevoir votre météo.');
    });
}

function callAPI(...arg) {
    // console.log(arg);
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${arg[1]}&lon=${arg[0]}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);

        apiResult = data;

        WEATHER.innerText = apiResult.current.weather[0].description;
        TEMPERATURE.innerText = `${parseInt(apiResult.current.temp)}°C`;
        LOCALISATION.innerText = apiResult.timezone;
        ICONE.firstElementChild.setAttribute('src', `./images/${apiResult.current.weather[0].icon}.svg`);

        // les heures
        for(let i = 0; i < HOURS.length; i++) {
            hourIncrement = currentHour + i * 3;

            if(hourIncrement >= 24) {
                HOURS[i].innerText = `${hourIncrement - 24}h`;
            } else {
                HOURS[i].innerText = `${hourIncrement}h`;
            }
        }

        // les t°
        for(let i = 0; i < HOURS.length; i++) {
            HOURS_TEMPERATURE[i].innerText = `${parseInt(apiResult.hourly[i *3].temp)}°C`;
        }

        // les jours
        for(let i = 0; i < HOURS.length; i++) {
            DAYNAMES[i].innerText = displayDays[i].slice(0,3);
        }

        // les t° des jours
        for(let i = 0; i < HOURS.length; i++) {
            DAYS_TEMPERATURE[i].innerText = `${parseInt(apiResult.daily[i].temp.day)}°C`;
        }
    });
}