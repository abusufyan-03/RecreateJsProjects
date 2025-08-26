# Color Changer

## About Project
A simple DOM mini project to change the page's background color by clicking colored boxes.

[live demo]()


This project contains 4 colored boxes: Grey, White, BLue, Yellow.

when we click a boxe, the background color changes to match the boxe's color.

Each Box is a `span` with the same class name (`button`) but a unique `id` matching it's color name.

## How it works
1. Select all boxes at once using element selector method (read about retreiving elements from the DOM)

2. loop through each box 

3. add a `click` event listener to each box

4. Inside the event listener change the body background color

## Prerequsites / Concept You should know or revisit

- [Retrieving Elements from the DOM](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/67df06b9e22457629b05f9bd/article/read)
- [HTMLCollection vs NodeList](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/)
- [addEventListener Basics](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## My struggled
It had been a while since i worked with DOM Manuplation, so I inititally forgot how to rerive multiple element efficiently.

I also needed to Revisit Difference Between `HTMLCollection` and `NodeList`.

These Resource helped I already mention in ubove 1st and 2nd one





























<!-- there are four boxes with different colors such as
- grey 
- white 
- blue
- yellow

these all are span with the same `class` name `button` and `id` name as their `color name`

when a user click `grey box` then the body color of `web page` should be `changed` as their `box color` same for each color box

## Now how can we Exactly acheive this?
The very first approach that are comming to your mind is maybe we can retreive each element from the dom and the use click event listner and then change to body color but that would be too much work as we have to retreive each element from the dom instead what we can do is we select all nodelist from the dom and the loop through each elements and then change background color 

Before jumping the code here is the prerequsite: 

- [Retreiving elements from the DOM](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/67df06b9e22457629b05f9bd/article/read)

- [HTMLCollection VS NodeList](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/)

# Struggle

As it's been while since i coded in javascript especially (dom part) i struggled with retreiving element from the DOM here what helped me:

- [Retreiving elements from the DOM](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/67df06b9e22457629b05f9bd/article/read) 

Also I got confused about HTMLCollection and nodeList and here the reference link that helped me:

- [HTMLCollection VS NodeList](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/) -->