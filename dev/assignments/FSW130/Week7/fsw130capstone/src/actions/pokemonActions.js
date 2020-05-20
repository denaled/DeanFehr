import axios from 'axios'

function getPokemon(){
    return(dispatch)=>{
        return axios.get("http://swapi.dev/api/people")
        .then((res)=>{
            console.log("I am in getPokemon function")
            console.log(res)
        dispatch({
            type:"GET_POKEMON",
            payload: res.data.results
        })
        })

    }
}

export default {getPokemon}