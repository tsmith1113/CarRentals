"use strict";

//input

const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAsstCheckbox = document.getElementById("inputOptRoadsideAsstCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");
//button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");
//output
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");

window.onload = function(){
    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClick;
}

function onEstimateTotalCostButtonClick(){
    //get known values
    let NumOfDays = Number(inputNumOfDays.value);
    let isOptElecTollTag = inputOptElecTollTagCheckbox.ariaChecked;
    let isOptGPS = inputOptGPSCheckbox.ariaChecked;
    let isOptRoadAsst = inputOptRoadsideAsstCheckbox.checked;

    let isUnder25 = inputUnder25YesRadio.checked;

//calculate unknown values

    let carRenatlAmount = (29.99 * NumOfDays);
    let optionsAmount = 0;
    if(isOptElecTollTag){
        optionsAmount += (3.95 * NumOfDays);
    }
    if(isOptGPS){
        optionsAmount +=(2.95 * NumOfDays);
    }
    if(isOptRoadAsst){
        optionsAmount +=(2.95 * NumOfDays)
    }
    let surcharageAmount = 2;
    if(isUnder25){
        surcharageAmount = 0.30 * (carRenatlAmount + optionsAmount);
    }else{
        surcharageAmount = 0;
    }
    let totaldueAmount = carRenatlAmount + optionsAmount + surcharageAmount;

    //display the results
    outputCarRental.innerHTML = carRenatlAmount;
    outputOptions.innerHTML = optionsAmount;
    outputSurcharge.innerHTML = surcharageAmount;
    outputTotal.innerHTML = totaldueAmount;

}





