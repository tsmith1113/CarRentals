"use strict";

// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumDays = document.getElementById("inputNumDays");
const inputElectronicTagCheckbox = document.getElementById("inputElectronicTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAssiCheckbox = document.getElementById("inputOptRoadsideAssiCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputdueCharge = document.getElementById("outputdueCharge");


window.onload = function(){
    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClick;
}


function onEstimateTotalCostButtonClick(){
// get known values

let numOfDays = inputNumDays.value;

let isElectronicTag = inputElectronicTagCheckbox.checked;
let isOptGPS = inputOptGPSCheckbox.checked;
let isOptRoadAsst = inputOptRoadsideAssiCheckbox.checked;

let isUnder25 = inputUnder25YesRadio.checked;

console.log(numOfDays);
console.log(isElectronicTag);
console.log(isOptGPS);
console.log(isOptRoadAsst);
console.log(isUnder25);

// calculate unknown values
let carRentalAmount = 29.99 * numOfDays;

let Options = 0;

if(isElectronicTag){
    Options += (3.95 * numOfDays);
}

if(isOptGPS){
    Options += (2.95 * numOfDays);
}

if(inputOptRoadsideAssiCheckbox){
    Options += (2.95 * numOfDays)
}

let Surcharge;

if(isUnder25){
    Surcharge = 0.30 * (carRentalAmount + Options);
}
else{
    Surcharge = 0;
}

let dueCharge = carRentalAmount + Options + Surcharge;



// display the results
outputCarRental.innerHTML = carRentalAmount;
outputOptions.innerHTML = Options;
outputSurcharge.innerHTML = Surcharge;
outputdueCharge.innerHTML = dueCharge;
}





