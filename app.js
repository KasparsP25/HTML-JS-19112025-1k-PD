const masInput = document.getElementById("masInput");
const heInput = document.getElementById("heInput");
const output = document.getElementById("output");
const button = document.getElementById("button");
//const history = document.getElementById("history");

button.addEventListener(`click`, massCalc)

function massCalc(){
    let outputNum = masInput.value / (heInput.value * heInput.value)
    if (outputNum <= 19){
        outputR = (" (Nepietiekama ķermeņa masa)")
    } else 
    if (outputNum <= 25){
        outputR = (" (Normāla ķermeņa masa)")
    } else 
    if (outputNum <= 30){
        outputR = (" (Lieka ķermeņa masa)")
    } else 
    outputR = (" (Aptaukošanās)") 

    console.log("Jūsu ĶMI ir " + outputNum + outputR)
}

