// accessing elements

// nott = document.querySelector(".list-items") 
// console.log(nott)
// // console.log(document.querySelector(".list-items"))

// const title = document.getElementById('heading');
// console.log(title)

// console.log("hello")
// console.log(document.innerHtml)
// console.log(title.innerHTML)





// styling elements
const title = document.getElementById('heading');
title.style.color = "white"


// const listItems = document.querySelectorAll('.list-items')
// console.log(listItems)

// console.log(typeof(listItems))

// listItems[2].style.color = 'blue'





// creting elements
unL = document.querySelector('ul')
newItem = document.createElement('li')

unL.append(newItem)

newItem.innerText = 'Mission Impossible'

newItem.setAttribute('class', 'list-items')
newItem.removeAttribute('class')

console.log(newItem.classList)

newItem.remove()
