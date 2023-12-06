var input = document.getElementById("input").value;
var start;
var clicked = false;
function Write(){
    document.getElementById("output").innerText = input;
    if (clicked){
        Spellcheck();
    }
}
input.addEventListener("input", Write)

function Submit(){
    if (clicked == false){
        start = new Date();
        input = "";
        clicked = true;
    }else{
        input.removeEventListener("input", Write);
        var end = new Date();
        let words = 1;
        for (let i = 0; i < input.length; i++) {
            if (input[i] = " ") {
                words++;
            }
        }
        let adequate = 0;
        let wrong = 0;
    }
}
document.getElementById("submitbtn").addEventListener("click", Submit);

function Spellcheck() {
    let correct = document.getElementById("output").innerText;
    let current = input;

    document.getElementById("output").innerHTML = "";
    for(let i = 0; i < correct.length; i++){
        if (i >= current.length){
            document.getElementById("output").innerHTML += `${correct[i]}`;
        }else if (correct[i] == current[i]){
            document.getElementById("output").innerHTML += `<span class = "correct">${correct[i]}</span>`
        }else{
            document.getElementById("output").innerHTML += `<span class = "wrong">${correct[i]}</span>`
        }
    }
}