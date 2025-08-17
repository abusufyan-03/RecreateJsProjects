
const form = document.querySelector('form');
const result = document.getElementById('results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    let bmi = ((weight * 10000) / (height * height)).toFixed(2);
    console.log(height, weight);

    if(isNaN(height) || height === 0 || height < 0){
        alert('please enter valid height');
    } else if(isNaN(weight) || weight === 0 || weight < 0) {
        alert('please enter valid weight');
    } else if(bmi < 18.6){
        result.innerHTML = `${bmi}: Under Weight`;
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `${bmi}: Normal Range`;
    } else if(bmi > 24.9) {
        result.innerHTML = `${bmi}: Over Weight`;
    }
})