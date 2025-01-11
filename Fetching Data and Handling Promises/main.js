// Fetching Data and Handling Promises

// What is a promise? Manageable way to handle async tasks.
// Handle promise with .then(), .catch()
// 3 states: pending, resolved, and rejected

const pokeCardImage = document.querySelector('img');
const pokeCardTitle = document.querySelector('h5');
const pokeForm = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const enemyPokeCard = document.querySelector('.enemy-poke-card');
const enemyPokeImage = document.querySelector("#enemy-poke-image");
const enemyPokeTitle = document.querySelector('#enemy-poke-title');

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
  createBattleButton()
});

// create a battle button
const createBattleButton = () => {
  const battleBtn = document.createElement('button')
  battleBtn.classList = 'btn btn-danger'
  battleBtn.id = 'battle-btn'
  battleBtn.textContent = "Battle"
  if(!document.querySelector('#battle-btn')){
    cardBody.append(battleBtn)
    battleBtn.addEventListener('click', getEnemyPoke)
  }
}

const getEnemyPoke = async() => {
  const randomPoke = Math.floor(Math.random() * 1025);
  console.log(randomPoke);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPoke}`
  );
  const data = await response.json();
  enemyPokeImage.src = data.sprites.front_default;
  enemyPokeTitle.textContent = data.name;
  // showing card when data is retrieved
  enemyPokeCard.style.display = '';
}