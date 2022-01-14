// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput===''){
        return "Empty"
    } else if(isNaN(parseInt(testInput))){
        return "Not a number"
    }else{return "Is a number"}
   
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   
    // check input of pilot, copilot, fuelLevel, and cargoMass
    let field=undefined;
    if (validateInput(pilot) === "Not a number" && validateInput(copilot) === 'Not a number'
            && validateInput(fuelLevel) === 'Is a number' && validateInput(cargoLevel) === "Is a number"){
                field='complete'
            } else {field= 'incomplete'};

            return field;


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
