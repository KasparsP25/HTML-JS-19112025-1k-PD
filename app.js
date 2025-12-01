const massInput = document.getElementById("massInput");
const heInput = document.getElementById("heInput");
const output = document.getElementById("output");
const button = document.getElementById("button");
const history = document.createDocumentFragment("history");

button.addEventListener(`click`, massCalc)

function massCalc(){
    let heightMeter = heInput.value * 0.01
    //cm -> m
    let outputNum = massInput.value / (heightMeter * heightMeter)
    // mass (kg) / height (m^2)
    //console.log (outputNum)
    if (outputNum <= 19){
        outputR = " (Nepietiekama ķermeņa masa)"
    } else if (outputNum <= 25){
        outputR = " (Normāla ķermeņa masa)"
    } else if (outputNum <= 30){
        outputR = " (Lieka ķermeņa masa)"
    } else {
        outputR = " (Aptaukošanās)"
    }
    output.innerHTML = ("Jūsu ĶMI ir " + outputNum + outputR)


    const historyItem = history.appendChild(document.createElement(`li`));
    historyItem.innerHTML = `${massInput.value}KG / ${heInput.value}cm = ${outputNum + outputR}`;
    document.body.appendChild(history);
}
    // historyItem = document.createElement('li')
    // historyItem.innerHTML = `${masInput.value}KG + ${heInput.value}cm = ${output}`
    // history.appendChild(historyItem);


