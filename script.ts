const astronautName: string = 'Jessica Watkins';
const astronautAge: number = 38;
let isCommander: boolean = false;
const planet: string = 'Earth';
let missionDuration: number = 180;

const yearsToAdd: number = 10;
const extensionDays: number = 30;
const additionalDays: number = 10;

const astronautAgeIn10Years: number = astronautAge + yearsToAdd;
const extendedMissionDuration: number = missionDuration + extensionDays;

const astronautInfo: string = `Astronaut name: ${astronautName}
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
