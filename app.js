const masInput = document.getElementById("masInput");
const heInput = document.getElementById("heInput");
const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener(`click`, massCalc)

function massCalc(){
    let outputText = masInput.value / (heInput.value * heInput.value)
    console.log ("Jūsu ĶMI ir " + outputText)
}
