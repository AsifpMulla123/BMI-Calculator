const btn = document.getElementById('btn');

const bmiInputEle = document.getElementById('bmi-result');
const result = document.getElementById('weight-condition');

function calculateBMI() {
    const heightValue = document.getElementById('height').value / 100; //to convert to meter
    const weightValue = document.getElementById('weight').value;
    const bmiValue = weightValue / (heightValue * heightValue)
    bmiInputEle.value = bmiValue;
    if (bmiValue < 18.5) {
        result.innerText = "Under Weight";
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        result.innerText = "Normal Weight";
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        result.innerText = "Over Weight";
    }
    else if (bmiValue >= 30) {
        result.innerText = "Obesity";
    }
}

btn.addEventListener('click', calculateBMI);