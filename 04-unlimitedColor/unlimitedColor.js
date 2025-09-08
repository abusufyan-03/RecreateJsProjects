const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

stop.style.display = 'none';

function randomColor(){
  const hex = '0123456789abcdef';
  let color = '#';

  for(let i = 0; i<6; i++){
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color
}

let valId
console.log("after declaring valId: ", valId)
document.querySelector('#start').addEventListener('click', function(){
  stop.style.display = 'inline-block'
 if(!valId){
   valId = setInterval(function(){
    document.body.style.backgroundColor = randomColor();
  }, 1000)
 }
 console.log('after clicking start button valId', valId )
});

document.querySelector('#stop').addEventListener('click', function(){
  stop.style.display = 'none';
  clearInterval(valId);
   console.log('after clicking stop button valId', valId )
  valId = null
   console.log('after clicking stop 2 button valId', valId )

})
