const DAYS       = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const TODAY      = new Date();
const OPTIONS    = { weekday : 'long'};
const CURRENTDAY = TODAY.toLocaleDateString('fr-FR', OPTIONS).charAt(0).toUpperCase() + TODAY.toLocaleDateString('fr-FR', OPTIONS).slice(1);

let  displayDays = DAYS.slice(DAYS.indexOf(CURRENTDAY)).concat(DAYS.slice(0, DAYS.indexOf(CURRENTDAY)));

// console.log(TODAY, CURRENTDAY, displayDays);

export {TODAY, displayDays};