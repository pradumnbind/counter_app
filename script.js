const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

incrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value >=10){
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText = value + 1;
    }
});

decrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1;
    }
    else{
        alert("Negative values are not allowed");
    }
});

resetBtn.addEventListener("click", () =>{
    displayValue.innerText = 0;
});