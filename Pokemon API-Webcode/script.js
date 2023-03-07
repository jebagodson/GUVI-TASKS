const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';

const pokemonContainer = document.getElementById('pokemon-container');

async function fetchPokemonData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayPokemonData() {
  const data = await fetchPokemonData(apiUrl);

  for (const pokemon of data.results) {
    const pokemonData = await fetchPokemonData(pokemon.url);

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemonData.name;

    const pokemonImage = document.createElement('img');
    pokemonImage.setAttribute("class", "card-img")
    pokemonImage.src = pokemonData.sprites.front_shiny;

    const pokemonAbilities = document.createElement('p');
    pokemonAbilities.textContent = `Abilities: ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}`;

    const pokemonMoves = document.createElement('p');
    pokemonMoves.textContent = `Moves: ${pokemonData.moves[0].move.name}`;

    const pokemonWeight = document.createElement('p');
    pokemonWeight.textContent = `Weight: ${pokemonData.weight}`;

    pokemonElement.appendChild(pokemonName);
    pokemonElement.appendChild(pokemonImage);
    pokemonElement.appendChild(pokemonAbilities);
    pokemonElement.appendChild(pokemonMoves);
    pokemonElement.appendChild(pokemonWeight);

    pokemonContainer.appendChild(pokemonElement);
  }
}

displayPokemonData();

