import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCards = ({url}) => {
    const [pokemon, setPokemon] = useState({}); 
     useEffect(() => {
     axios.get(url)
     .then((res) => setPokemon(res.data))

     }, [])
     console.log(pokemon)

    return (
        <div key={pokemon.url} >
         <h2>{pokemon.name}</h2>
         <img src={pokemon.sprites.other.home.front_default} ></img>
            
        </div>
    );
};

export default PokemonCards;