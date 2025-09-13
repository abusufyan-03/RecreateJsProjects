## Mistake and fixes

- While selecting the form element i was using `getElementByTagName`. which was wrong as i needed to use EventListener and `getElementById` returns `HTMLCollection` and EventListern doesn't not work on HTMLCollection.

- So, i used `querySelector `instead of `getElementbyTagName` which fixed the problem.

- toFixed is not a global function. It’s a method of a number.
So you must call it on the value:
```js
bmi.toFixed(2)
```