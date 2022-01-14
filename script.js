// Write your JavaScript code here!


window.addEventListener("load", function () {

    // prevent page reload
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        event.preventDefault();


        // update shuttle items
        // creates varibles representing user text inputs
        const pName = document.getElementById('pilotName').value;
        const coName = document.getElementById('copilotName').value;
        const flevel = document.getElementById('fuelLevel').value;
        const cMass = document.getElementById('cargoMass').value;
        // creates varibles representing item status
        const pStatus= document.getElementById('pilotStatus');
        const coStatus= document.getElementById('copilotStatus');
        const fStatus= document.getElementById('fuelStatus');
        const cStatus= document.getElementById('cargoStatus');
        // varibles representing header 2
        const header=document.getElementById('launchStatus')
        // did user complete all fields?
        if (validateInput(pName) === "Not a number" && validateInput(coName) === 'Not a number'
            && validateInput(flevel) === 'Is a number' && validateInput(cMass) === "Is a number") {
            
                //  reveal laucnh status if yes reveal
            document.getElementById('faultyItems').style.visibility = 'visible';

            // update list items on launch list crew
            pStatus.innerHTML= `Pilot ${pName} is ready for launch!`;
            coStatus.innerHTML= `Copilot ${coName} is ready for launch!`;

            // update launch status cargo and fuel
            if(flevel<10000){
                fStatus.innerHTML='Fuel level is too low'
            }else{fStatus.innerHTML='Fuel level high enough for launch'}
            
            if(cMass>10000){
                cStatus.innerHTML="Cargo too heavy"
            }else if(cMass<=10000){cStatus.innerHTML='Cargo mass low enough for launch'}
            
            if(flevel<10000|| cMass>10000){
                header.innerHTML="Shuttle not ready for launch";
                header.style.color= 'red';
            }else{header.innerHTML='Shuttle is ready for Launch'
            header.style.color= 'green';}

        }


    });
    //set varibles  

    let listedPlanets;





    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});




