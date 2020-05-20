import axios from 'axios'

function getMovies(){
    return(dispatch)=>{
        return axios.get("https://swapi.dev/api/films")
        .then((res)=>{
            console.log("I am in getMovies function")
            console.log(res)
        dispatch({
            type:"GET_MOVIE",
            payload: res.data.results
        })
        })

    }
}

export default {getMovies}