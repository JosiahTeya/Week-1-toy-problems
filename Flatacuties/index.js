const animalsList = document.getElementById('animals-list');
const animalDetails = document.getElementById('animal-details');

// fetch all animals
fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => {
    data.forEach(animal => {
      const animalItem = document.createElement('li');
      animalItem.textContent = animal.name;
      animalItem.addEventListener('click', () => {
        showAnimalDetails(animal.id);
      });
      animalsList.appendChild(animalItem);
    });
  });

// fetch animal details and display them
function showAnimalDetails(animalId) {
  fetch(`http://localhost:3000/characters/${animalId}`)
    .then(response => response.json())
    .then(animal => {
      const animalDetailsHtml = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}">
        <p>Votes: ${animal.votes}</p>
        <button onclick="addVote(${animal.id})">Add Vote</button>
      `;
      animalDetails.innerHTML = animalDetailsHtml;
    });
}

// add a vote for an animal and update the display
function addVote(animalId) {
  fetch(`http://localhost:3000/characters/${animalId}`)
    .then(response => response.json())
    .then(animal => {
      animal.votes++;
      const animalDetailsHtml = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}">
        <p>Votes: ${animal.votes}</p>
        <button onclick="addVote(${animal.id})">Add Vote</button>
      `;
      animalDetails.innerHTML = animalDetailsHtml;
    });
}