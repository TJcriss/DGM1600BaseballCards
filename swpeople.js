import { people } from './api.js'

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}

people.forEach((person) => {
    let cardElement = document.createElement('div')
    let innerElement = document.createElement('div')
    let frontElement = document.createElement('div')
    let backElement = document.createElement('div')
    let imageElement = document.createElement('img')
    let planetElement = document.createElement('h1')
    let speciesElement = document.createElement('h1')
    let heightElement = document.createElement('h1')
    let skinElement = document.createElement('h1')
    let eyeElement = document.createElement('h1')
    let genderElement = document.createElement('h1')



    cardElement.className = 'flip-card'
    innerElement.className = 'flip-card-inner'
    frontElement.className = 'flip-card-front'
    backElement.className = 'flip-card-back'
    frontElement.textContent = person.name
    imageElement.src = person.image
    planetElement.textContent = `Homeworld: ${person.homeworld}`
    speciesElement.textContent = `Species: ${person.species}`
    heightElement.textContent = `Height: ${person.height}m`
    skinElement.textContent = `Skin Color: ${person.skinColor}`
    genderElement.textContent = `Gender: ${person.gender}`
    eyeElement.textContent = `Eye Color: ${person.eyeColor}`


    cardElement.appendChild(innerElement)
    innerElement.appendChild(frontElement)
    innerElement.appendChild(backElement)
    frontElement.appendChild(imageElement)
    backElement.appendChild(planetElement)
    backElement.appendChild(speciesElement)
    backElement.appendChild(heightElement)
    backElement.appendChild(skinElement)
    backElement.appendChild(genderElement)
    backElement.appendChild(eyeElement)


    mainContainer.appendChild(cardElement)
})

document.body.appendChild(mainContainer)