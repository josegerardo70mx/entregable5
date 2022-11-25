import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PokemonCards from './PokemonCards';

const Pokedex = () => {

  const userName = useSelector(state => state.name) 
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((res) =>  setPokemons(res.data.results))

  }, [])
  console.log(pokemons)


    return (
        <div>
          hello world
          <h3>welcome {userName}</h3>
          <p>Here you'll find all your favorite pokemons info!</p>
          {
               pokemons.map(pokemon => (
                  <PokemonCards url={pokemon.url} />
                 

               ))
          }            
        </div>
    );
};

export default Pokedex;