function plusOne() {
    let number = document.querySelector('div')
    number.textContent = (number.textContent - 0) + 1 
}

function minusOne() {
    let number = document.querySelector('div')
    number.textContent = (number.textContent - 0) - 1 
}

function multiple() {
    let number = document.querySelector('div')
    number.textContent = (number.textContent - 0) * 2 
}

function divizion() {
    let number = document.querySelector('div')
    number.textContent = (number.textContent - 0) / 2 
}

document.querySelector('.plus').addEventListener('click', plusOne)
document.querySelector('.minus').addEventListener('click', minusOne)
document.querySelector('.multiple').addEventListener('click', multiple)
document.querySelector('.divizion').addEventListener('click', divizion)