// Write your JavaScript code here!


window.addEventListener("load", function () {
    //set varibles  
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (json) {
        listedPlanets = pickPlanet(json);
        addDestinationInfo(document, listedPlanets.name, listedPlanets.diameter, listedPlanets.star, listedPlanets.distance, listedPlanets.moon, listedPlanets.image);
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    // prevent page reload
    document.getElementById("formSubmit").addEventListener("click", function (event) {

        // creates varibles representing user text inputs
        const pName = document.querySelector("input[name='pilotName']").value;
        const coName = document.querySelector("input[name='copilotName']").value;
        const flevel = document.querySelector("input[name='fuelLevel']").value;
        const cMass = document.querySelector("input[name='cargoMass']").value;
        // creates varibles representing item status
        const list = document.getElementById('faultyItems');
    
        // varibles representing header 2
        const header = document.getElementById('launchStatus')

        // did user complete all fields?
        formSubmission(document, list, pName, coName, flevel, cMass)
       
        event.preventDefault();

    });

});




