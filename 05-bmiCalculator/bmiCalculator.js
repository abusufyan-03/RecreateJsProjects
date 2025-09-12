
// const form = document.querySelector('form');
// const result = document.getElementById('results');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const height = parseInt(document.getElementById('height').value);
//     const weight = parseInt(document.getElementById('weight').value);

//     let bmi = ((weight * 10000) / (height * height)).toFixed(2);
//     console.log(height, weight);

//     if(isNaN(height) || height === 0 || height < 0){
//         alert('please enter valid height');
//     } else if(isNaN(weight) || weight === 0 || weight < 0) {
//         alert('please enter valid weight');
//     } else if(bmi < 18.6){
//         result.innerHTML = `${bmi}: Under Weight`;
//     } else if(bmi >= 18.6 && bmi <= 24.9) {
//         result.innerHTML = `${bmi}: Normal Range`;
//     } else if(bmi > 24.9) {
//         result.innerHTML = `${bmi}: Over Weight`;
//     }
// })


const form = document.querySelector('form');
const bmi_value = document.querySelector('.bmi-value');
const badge = document.querySelector('.badge');
const warning = document.querySelector('.warning');

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    let bmi = ((weight * 10000) / (height * height)).toFixed(2);
    console.log(height, weight, bmi)

    if(isNaN(height) || height == '' || height < 1) {
        badge.innerHTML = `Please enter valid height`;
        badge.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
        badge.style.color = 'oklch(44.4% .177 26.899)';
    } else if(isNaN(weight) || weight == '' || weight < 1){
        badge.innerHTML = `Please enter valid weight`;
        badge.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
        badge.style.color = 'oklch(44.4% .177 26.899)';
    } else if(bmi<18.5){
        bmi_value.innerHTML = `${bmi}`;
        warning.innerHTML = '';
        badge.innerHTML = `Underweight`;
        badge.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
        badge.style.color = 'oklch(44.4% .177 26.899)';
    } else if(bmi >= 18.5 && bmi <= 24.5){
        bmi_value.innerHTML = `${bmi}`;
        warning.innerHTML = '';
        badge.innerHTML = `Normal`;
        badge.style.backgroundColor = 'oklch(96.2% .044 156.743)';
        badge.style.color = '#016630';
    } else if(bmi >= 25 && bmi < 30) {
        bmi_value.innerHTML = `${bmi}`;
        warning.innerHTML = '';
        badge.innerHTML = `Overweight`;
        badge.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
        badge.style.color = 'oklch(44.4% .177 26.899)';
    } else if(bmi > 30){
        bmi_value.innerHTML = `${bmi}`;
        badge.innerHTML = `Obesity`;
        warning.innerHTML = `⚠️ Consult a doctor`
        badge.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
        badge.style.color = 'oklch(44.4% .177 26.899)';
    }
})