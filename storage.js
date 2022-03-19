function counter() {
  const counter = document.querySelector(".counter")
  let number = document.querySelector(".number")


    let i = 0

      i++
      number.innerHTML = "in Cart(" + i + ")" 
  

    alert("added to Cart!")
      counter.addEventListener("click", (number))
  
}

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const Selection = document.getElementById('name','image','price','weight')
let itemsArray = localStorage.getItem('name','image','price','weight')
  ? JSON.parse(localStorage.getItem('name','image','price','weight'))
  : []

localStorage.setItem('name','image','price','weight', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('name','image','price','weight'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

button.addEventListener('click', function (addtocart) {
  addtocart.preventDefault()

  itemsArray.push(seletion.value)
  localStorage.setItem('name','image','price','weight', JSON.stringify(itemsArray))
  liMaker(Selection.value)
  Selection.value = 'name','image','weight','weight'
})

data.forEach((item) => {
  liMaker(item)
})

button.addEventListener('click', function (removefromcart) {
  removefromcart.preventDefault()
  
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})