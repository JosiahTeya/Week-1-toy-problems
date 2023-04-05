const API_URL = 'http://localhost:3000/characters';

const animalsListElem = document.getElementById('animals');
const animalDetailsElem = document.getElementById('animal');

function fetchAnimals() {
	fetch(API_URL)
		.then(response => response.json())
		.then(animals => {
			animals.forEach(animal => {
				const animalElem = createAnimalElem(animal);
				animalsListElem.appendChild(animalElem);
			});
		});
}

function createAnimalElem(animal) {
	const animalElem = document.createElement('li');
	animalElem.className = 'animal';
	animalElem.dataset.id = animal.id;
	animalElem.innerHTML = `
		<h3>${animal.name}</h3>
		<img src="${animal.image}" alt="${animal.name}">
		<p>${animal.votes} votes</p>
	`;
	animalElem.addEventListener('click', () => {
		showAnimalDetails(animal);
	});
	return animalElem;
}

function showAnimalDetails(animal) {
	animalDetailsElem.innerHTML = `
		<h3>${animal.name}</h3>
		<img src="${animal.image}" alt="${animal.name}">
		<p id="animal-votes">${animal.votes} votes</p>
		<button id="vote-button">Vote</button>
	`;
	const voteButtonElem = document.getElementById('vote-button');
	voteButtonElem.addEventListener('click', () => {
		animal.votes++;
		const animalVotesElem = document.getElementById('animal-votes');
		animalVotesElem.textContent = `${animal.votes} votes`;
        updateAnimalVotes(animal);
        });
        }
        
function updateAnimalVotes(animal) {
      fetch(`${API_URL}/${animal.id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
        })
        .then(response => response.json())
        .then(updatedAnimal => {
        console.log(`Votes for ${updatedAnimal.name} updated to ${updatedAnimal.votes}`);
        })
        .catch(error => console.error('Error updating animal votes:', error));
        }
        
        fetchAnimals();
