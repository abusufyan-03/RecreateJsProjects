const button = document.querySelectorAll('.button');
const body = document.querySelector('body')

// button.forEach((btn) => {
//     btn.addEventListener('click', function(e){
//         console.log(e.target.id)
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = 'grey';
//         } else if(e.target.id === 'white') {
//             body.style.backgroundColor = 'white';
//         } else if (e.target.id === 'blue') {
//             body.style.backgroundColor = 'blue';
//         } else if (e.target.id === 'yellow') {
//             body.style.backgroundColor = 'yellow'
//         } else {
//             console.log('No color selected')
//         }
//     })
// })

// improvement
button.forEach((btn) => {
    btn.addEventListener('click', function(e){
        console.log(e.target.id)
        if(e.target.id === `${e.target.id}`) {
            body.style.backgroundColor = `${e.target.id}`
        }
    })
})
