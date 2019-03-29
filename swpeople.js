import { people } from './api.js'

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

people.forEach((person) => {
    let cardElement = document.createElement('div')
    let innerElement = document.createElement('div')
    let frontElement = document.createElement('div')
    let backElement = document.createElement('div')
    let planetElement = document.createElement('h1')
    let imageElement = document.createElement('img')
    let heightElement = document.createElement('h1')


    cardElement.className = 'flip-card'
    innerElement.className = 'flip-card-inner'
    frontElement.className = 'flip-card-front'
    backElement.className = 'flip-card-back'
    frontElement.textContent = person.name
    planetElement.textContent = `Home World: ${person.homeworld}`
    imageElement.src = person.image
    heightElement.textContent = `Height: ${person.height}`


    cardElement.appendChild(innerElement)
    innerElement.appendChild(frontElement)
    innerElement.appendChild(backElement)
    frontElement.appendChild(imageElement)
    backElement.appendChild(planetElement)
    backElement.appendChild(heightElement)


    mainContainer.appendChild(cardElement)
})

document.body.appendChild(mainContainer)