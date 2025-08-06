1.What is DOM?
Document Object Model(dom) is an API for manipulating html documents.

Dom provides functions that allow you to add,remove,and modify parts of the document

2.What is nodes and type of nodes?
DOM represents an HTML document as a tree of nodes.
html,head,title,body are elementNodes
and textNode

3.Selecting elements using DOM?
Element Selectors are used to select one or multiple html elements from DOM.

1.getElementById(): return an element by its ID.
2.getElementsByClassName(): return HTML Collection by their class name.
3.getElementsByTagName(): return HTML Collevtion by their tag name.
4.querySelector(): return the first element matching a CSS selector.
5.querySelectorAll(): return all elements matching a CSS selector as NodeList.

DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

// fetch
// promise or async and wait

// step 1: we use fetch function to call https or api request default status is pending
// step 2: we have use .then or await method to get response from fetch method by using call back and converting into json()
// step 3 we have to receive json data by using callback using .then method or await

async keyword

When you declare a function as async, it always returns a Promise.

await keyword

You can only use await inside an async function.
It makes JavaScript wait until the Promise is settled.
If the Promise resolves → returns the resolved value.
If the Promise rejects → throws the error
