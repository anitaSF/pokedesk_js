console.log('Pokeapi!');

const pokeList = document.querySelector('#pokedex');

function createPoke(pokemon) {
    const li = document.createElement('li');

    li.innerHTML = `
    <div class="poke-card">
        <img class="image-poke" src="${pokemon.sprites['front_default']}" >
        <h2 class="name-poke">${pokemon.name}</h2>
        <h4 class="tipo-poke">${pokemon.types.map((type) => type.type.name).join(' - ')}</h4>
    </div>
    `;

    pokeList.appendChild(li);
}

async function getPoke(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const pokemon = data;
        console.log(pokemon);

        createPoke(pokemon);

    } catch (error) {
        console.log(error);
    }
}

function getPokemons() {
    for (let i = 1; i <= 150; i++) {
        getPoke(i);
    }
}

getPokemons();




