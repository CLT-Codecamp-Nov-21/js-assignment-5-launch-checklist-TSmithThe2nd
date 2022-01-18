// Write your helper functions here!
try{
require('isomorphic-fetch');
}catch(e){

}
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.querySelector('#missionTarget').innerHTML=`
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`;
    
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty"
    } else if (isNaN(parseInt(testInput))) {
        return "Not a number"
    } else { return "Is a number" }

}

function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {

    // check input of pilot, copilot, fuelLevel, and cargoMass
    let field = undefined;
    if (validateInput(pilot) === "Not a number" && validateInput(copilot) === 'Not a number'
        && validateInput(fuelLevel) === 'Is a number' && validateInput(cargoLevel) === "Is a number") {
        field = 'complete'
    } else { field = 'incomplete' };

    return field;


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(result => result.json());



    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum= Math.floor(Math.random()*(planets.length));
    return planets[randomNum];

}

try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
}catch(e){

}
