So in summary:

.catch() handles network errors (like no connection).

It also catches runtime errors in your code (like trying to access properties of undefined).

But HTTP errors like 404 do not automatically trigger .catch() → You must check manually using data.cod or response.ok.


data.main is undefined, because the response doesn’t contain the main object when the city is not found.

Then this line runs:

temp.innerHTML = `${Math.round(data.main.temp)}°C`;


→ data.main is undefined → trying to access data.main.temp throws:

TypeError: Cannot read properties of undefined (reading 'temp')


Since that is a runtime error inside .then(), the promise is rejected, and the .catch(error => { ... }) is executed.