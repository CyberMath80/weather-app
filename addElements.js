import {TODAY} from "./timing-manager.js";

const OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let h1, h1Content, h2, h2Content, imgLogo, divLogo, pWeather, pTempValue, pLocalisation, divInfo, divLogoInfo;
let divHoursPrevisions, divHour, pHourPrevisionName, pHourPrevisionValue, clone;
let divDaysPrevisions, divDay, pDayPrevisionName, pDayPrevisionValue;

// Création du h1
h1        = document.createElement('h1');
h1Content = document.createTextNode('La Météo de Cyber Math');
h1.appendChild(h1Content);
// Création du h2
h2        = document.createElement('h2');
h2Content = document.createTextNode(`${TODAY.toLocaleDateString('fr-FR', OPTIONS).charAt(0).toUpperCase() + TODAY.toLocaleDateString('fr-FR', OPTIONS).slice(1) }`);
h2.appendChild(h2Content);

// Création de l'image du logo
imgLogo     = document.createElement('img');
imgLogo.src = '';
imgLogo.alt = 'Icone du temps actuel';
// Création du div class="logo"
divLogo = document.createElement('div');
divLogo.classList = 'logo';
divLogo.appendChild(imgLogo);

// Création du p class="weather"
pWeather           = document.createElement('p');
pWeather.classList = 'weather';
// Création du p class="temp-value"
pTempValue           = document.createElement('p');
pTempValue.classList = 'temp-value';
// Création du p class="localisation"
pLocalisation           = document.createElement('p');
pLocalisation.classList = 'localisation';
// Création du div class="info"
divInfo           = document.createElement('div');
divInfo.classList = 'info';
divInfo.appendChild(pWeather);
divInfo.appendChild(pTempValue);
divInfo.appendChild(pLocalisation);

// Création du div class="logo-info"
divLogoInfo           = document.createElement('div');
divLogoInfo.classList = 'logo-info';
divLogoInfo.appendChild(divLogo);
divLogoInfo.appendChild(divInfo);

// Création du p class="hour-prevision-name"
pHourPrevisionName           = document.createElement('p');
pHourPrevisionName.classList = 'hour-prevision-name';
// Création du p class="hour-prevision-value"
pHourPrevisionValue           = document.createElement('p');
pHourPrevisionValue.classList = 'hour-prevision-value';
// Création du div class="hour"
divHour = document.createElement('div');
divHour.classList = 'hour';
divHour.appendChild(pHourPrevisionName);
divHour.appendChild(pHourPrevisionValue);
// Création du div class="hours-previsions"
divHoursPrevisions           = document.createElement('div');
divHoursPrevisions.classList = 'hours-previsions';

for(let i = 0; i < 7; i++) {
    clone = divHour.cloneNode(true)
    divHoursPrevisions.appendChild(clone);
}

// Création du p class="day-prevision-name"
pDayPrevisionName           = document.createElement('p');
pDayPrevisionName.classList = 'day-prevision-name';
// Création du p class="day-prevision-value"
pDayPrevisionValue           = document.createElement('p');
pDayPrevisionValue.classList = 'day-prevision-value';
// Création du div class="day"
divDay = document.createElement('div');
divDay.classList = 'day';
divDay.appendChild(pDayPrevisionName);
divDay.appendChild(pDayPrevisionValue);
// Création du div class="days-previsions"
divDaysPrevisions           = document.createElement('div');
divDaysPrevisions.classList = 'days-previsions';

for(let i = 0; i < 7; i++) {
    clone = divDay.cloneNode(true)
    divDaysPrevisions.appendChild(clone);
}

function addElements(...arg) {
    const CONTENT = document.querySelector('.content');
    
    for(let i = 0; i < arg.length; i++) {
        CONTENT.appendChild(arg[i]);
    }
}

export {addElements, h1, h2, divLogoInfo, divHoursPrevisions, divDaysPrevisions};