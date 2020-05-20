let defaultState={
    pokemons:[]
}

function pokemonReducer(state=defaultState,action){
    switch(action.type){
        case "GET_POKEMON":
            console.log("I am in Pokemon reducer ")
            console.log(action.payload)
            return{
                ...state,
                pokemons:action.payload
            }
        default:
            return state
    }
}
module.exports = {pokemonReducer:pokemonReducer};