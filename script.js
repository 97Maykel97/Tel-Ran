"use strict";
const astronautName = 'Jessica Watkins';
const astronautAge = 38;
let isCommander = false;
const planet = 'Earth';
let missionDuration = 180;
const yearsToAdd = 10;
const extensionDays = 30;
const additionalDays = 10;
const astronautAgeIn10Years = astronautAge + yearsToAdd;
const extendedMissionDuration = missionDuration + extensionDays;
const astronautInfo = `Astronaut name: ${astronautName}
Planet: ${planet}
Commander status: ${isCommander}`;
console.log(astronautInfo);
console.log(`Age in 10 years: ${astronautAgeIn10Years}`);
console.log(`New mission duration: ${extendedMissionDuration} days`);
// Changing values
missionDuration = extendedMissionDuration + additionalDays;
isCommander = true;
console.log(`Updated mission duration: ${missionDuration} days`);
console.log(`Updated commander status: ${isCommander}`);
