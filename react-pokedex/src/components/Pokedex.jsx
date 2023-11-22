import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null); 
  console.log(pokemonData);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error(`Error fetching data for ${name}:`, error);
      });
  }, [name]);

  return (
    <div>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <p>Type(s): {pokemonData.types.map(type => type.type.name).join(', ')}</p>
          {/* Puedes mostrar más detalles del Pokémon según tus necesidades */}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
