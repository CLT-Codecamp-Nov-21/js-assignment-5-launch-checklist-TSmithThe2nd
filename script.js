// Write your JavaScript code here!


window.addEventListener("load", function () {

    
    //set varibles  

    let listedPlanets;





    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    
     let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (json) {
        listedPlanets = pickPlanet(json);
        addDestinationInfo(document, listedPlanets.name, listedPlanets.diameter, listedPlanets.star, listedPlanets.distance, listedPlanets.moon, listedPlanets.image);
       console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
// prevent page reload
document.getElementById("formSubmit").addEventListener("click", function (event) {
    


    // update shuttle items
    // creates varibles representing user text inputs
    const pName = document.querySelector("input[name='pilotName']").value;
    const coName = document.querySelector("input[name='copilotName']").value;
    const flevel = document.querySelector("input[name='fuelLevel']").value;
    const cMass = document.querySelector("input[name='cargoMass']").value;
    // creates varibles representing item status
    const list= document.getElementById('faultyItems');
    const pStatus= document.getElementById('pilotStatus');
    const coStatus= document.getElementById('copilotStatus');
    const fStatus= document.getElementById('fuelStatus');
    const cStatus= document.getElementById('cargoStatus');
    // varibles representing header 2
    const header=document.getElementById('launchStatus')
    // did user complete all fields?
    if (formSubmission(document,list,pName,coName,flevel,cMass)==='complete') {
        
            //  reveal laucnh status if yes reveal
        list.style.visibility = 'visible';

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
    event.preventDefault();

});

});




