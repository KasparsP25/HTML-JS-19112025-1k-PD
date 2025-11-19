const masInput = document.getElementById("masInput");
const heInput = document.getElementById("heInput");
const output = document.getElementById("outputt");
const button = document.getElementById("button");
// const history = document.getElementById("history");

button.addEventListener(`click`, massCalc)

function massCalc(){
    let heiInput = heInput.value * heInput.value
    let outputNum = masInput.value / heiInput
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


//  historyItem = document.createElement('li')
//  historyItem.innerHTML = `${masInput.value} + "KG" + " + " + ${heInput.value} + "cm"`;
//  history.appendChild(historyItem)