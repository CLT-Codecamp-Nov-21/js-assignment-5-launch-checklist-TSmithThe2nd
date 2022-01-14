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
        // did user complete all fields?
        if (validateInput(pName) === "Not a number" && validateInput(coName) === 'Not a number'
            && validateInput(flevel) === 'Is a number' && validateInput(cMass) === "Is a number") {
            //  reveal laucnh status if yes reveal
            document.getElementById('faultyItems').style.visibility = 'visible';
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




