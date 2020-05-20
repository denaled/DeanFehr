import React from "react";

function PokemonList(props) {
  const pokemons = props.sendPokemons;
  console.log("I am in PokemonList")
  console.log({pokemons})
  const listPokemon = pokemons.map(pokemon =>  
    <div className="card"  >
         <h5 className="card-header bg-secondary text-white" >{pokemon.name}</h5>
    <div className="card-body">
       <h6 className="card-subtitle mb-2 text-dark">Birth Year : :{pokemon.birth_year}</h6>
       <h6 className="card-subtitle mb-2 text-muted">Gender : {pokemon.gender}</h6>
    </div>
  </div>
  );

  return <div className="pokemonList">{listPokemon}</div>;
}
export default PokemonList;


