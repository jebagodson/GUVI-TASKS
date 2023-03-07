///////////////////
//FETCH POKEMON API
///////////////////

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase(0) + string.slice(1);
}

async function displayPokemonData() {
  const data = await fetchPokemonData(apiUrl);

  const pokemonRow = document.createElement('div');
  pokemonRow.classList.add('row');
  pokemonContainer.appendChild(pokemonRow);

  for (const pokemon of data.results) {
    const pokemonData = await fetchPokemonData(pokemon.url);

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon', 'col-3');

    const pokemonName = document.createElement('h3');
    pokemonName.textContent = capitalizeFirstLetter(pokemonData.name);

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

    pokemonRow.appendChild(pokemonElement);
  }
}
displayPokemonData();