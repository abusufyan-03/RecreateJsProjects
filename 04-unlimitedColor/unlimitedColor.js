const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const generate = document.querySelector('#generate');
const hexaValue = document.querySelector('.hexa-value');
const copy = document.querySelector('.copy');


copy.addEventListener('click', async () => {
  const copiedText = hexaValue.innerHTML;
  try {
    await navigator.clipboard.writeText(copiedText);
    copy.innerHTML = `Copied!`;
    copy.style.color = '#1d4ed8';
    console.log('copied')
  } catch (error) {
    console.error('err', error)
  }
});
stop.style.display = 'none';

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color
}

let valId
start.addEventListener('click', function () {
  let color = randomColor();
  stop.style.display = 'inline-block';
  start.style.display = 'none';
  copy.innerHTML = 'Click to copy';
  copy.style.color = '#000000';
  if (!valId) {
    valId = setInterval(function () {
      document.body.style.backgroundColor = color;
      hexaValue.innerHTML = `${color}`;
    }, 1000)
  }
});

generate.addEventListener('click', function () {
  document.body.style.backgroundColor = randomColor();
})

stop.addEventListener('click', function () {
  stop.style.display = 'none';
  start.style.display = 'inline-block';

  clearInterval(valId);
  valId = null

})
