let form = document.querySelector("#form");
let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let submit = document.querySelector("#btn");
let result1 = document.querySelector("#result");

form.addEventListener('submit', function(f){
    f.preventDefault();
    let calc = parseInt(weight.value / ((height.value * height.value) / 10000));

    if (!((height === ' ')||(height < 0)||(isNaN(height)))) {
        result1.style.display = "block";
        result1.innerHTML = "Please enter correct height";
        result1.style.color = "black";
        result1.style.background = "red";
    } else if (!((weight === ' ')||(weight < 0)||(isNaN(weight)))) {
        result1.style.display = "block";
        result1.innerHTML = "Please enter correct weight";
        result1.style.color = "black";
        result1.style.background = "red";
    } else if (calc > 0 && calc <= 22) {
        result1.style.display = "block";
        result1.style.background = "Yellow";
        result1.innerHTML = "Your BMI is Under Weight = " + calc;
    } else if (calc >= 23 && calc <=25) {
        result1.style.display = "block";
        result1.style.background = "green";
        result1.innerHTML = "Your BMI is Normal Weight = " + calc;
    } else if (calc >= 26) {
        result1.style.display = "block";
        result1.style.background = "red";
        result1.innerHTML = "Your BMI is Over Weight = " + calc;
    } 
    else {
        result1.style.display = "none";
    }
});