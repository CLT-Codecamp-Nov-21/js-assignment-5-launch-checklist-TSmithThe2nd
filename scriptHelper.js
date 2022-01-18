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
        return "Not a Number"
    } else { return "Is a Number" }

}

function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {

    list.style.visibility='hidden'
    // check input of pilot, copilot, fuelLevel, and cargoMass
    let field = undefined;
     // creates varibles representing item status
     
     const pStatus= document.getElementById('pilotStatus');
     const coStatus= document.getElementById('copilotStatus');
     const fStatus= document.getElementById('fuelStatus');
     const cStatus= document.getElementById('cargoStatus');
     const header=document.getElementById('launchStatus')

    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === 'Not a Number'
        && validateInput(fuelLevel) === 'Is a Number' && validateInput(cargoLevel) === "Is a Number") {
        field = 'complete'
    } else { field = 'incomplete' };

    if (field==='complete'){
        // reveal launch status if check passed
        list.style.visibility='visible';

        // update list items on launch list crew
        pStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        coStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;

        // update launch status cargo and fuel
        if(fuelLevel<10000){
            fStatus.innerHTML='Fuel level too low for launch'
        }else{fStatus.innerHTML='Fuel level high enough for launch'}
        
        if(cargoLevel>10000){
            cStatus.innerHTML="Cargo mass too heavy for launch"
        }else if(cargoLevel<=10000){cStatus.innerHTML='Cargo mass low enough for launch'}
        
        if(fuelLevel<10000|| cargoLevel>10000){
            header.innerHTML="Shuttle Not Ready for Launch";
            header.style.color= 'rgb(199,37,78)';
        }else{header.innerHTML='Shuttle is Ready for Launch'
        header.style.color= 'rgb(65,159,106)';}




    }

    

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
