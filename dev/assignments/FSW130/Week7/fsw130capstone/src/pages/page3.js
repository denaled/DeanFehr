import React , {useEffect}from 'react';
import PokemonList from '../components/pokemonList'
import {useSelector, useDispatch} from "react-redux"
import allActions from '../actions/index'

function Page3() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state=> state.pokemon.pokemons)
  useEffect(()=>{
    dispatch(allActions.pokemonActions.getPokemon())},[dispatch])
  console.log("I am in Page 3")
  console.log(pokemons)
  return (
    <div className="page3">
      <h1 className="pageHeader">A Few Star Wars People</h1>
      <PokemonList sendPokemons = {pokemons}/>
    </div>
  );
}
export default Page3;
