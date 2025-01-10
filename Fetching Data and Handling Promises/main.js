// Fetching Data and Handling Promises

// What is a promise? Manageable way to handle async tasks.
// Handle promise with .then(), .catch()
// 3 states: pending, resolved, and rejected

const pokeCardImage = document.querySelector('img');
const pokeCardTitle = document.querySelector('h5');
const pokeForm = document.querySelector('form');

const getPokemon = (pokeName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      pokeCardImage.src = data.sprites.front_default;
      pokeCardTitle.textContent = data.name;
    })
    .catch((error) => console.log(error));
};

pokeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const pokeInput = document.querySelector('#pokeInput').value;
  getPokemon(pokeInput);
});
