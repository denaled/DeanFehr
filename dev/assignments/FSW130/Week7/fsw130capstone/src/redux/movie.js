import axios from 'axios'

 function addMovie(movie){
    return{
        type:"ADD_MOVIE",
        payload:movie
    }
}
 function removeMovie(movie){
    return{
        type:"REMOVE_MOVIE",
        payload:movie
    }
}
function getMovies(){
    return(dispatch)=>{
        return axios.get("")
        .then((res)=>{
            console.log(res)

        })

    }
}

const initialState ={
    movies:[{name: "The Blues Brothers"},{name:"Jaws"},{name: "The Lion King"},{name:"Better of Dead"}]
}
function movieReducer(state=initialState,action){
    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state,
            movies:[...state.movies, action.payload]
            }
        case "REMOVE_MOVIE":
            const moviesCopy = [...state.movies]
            const removeIndex = moviesCopy.map(function(item){ return item.title;}).indexOf(action.payload.title)
            console.log(moviesCopy)
            moviesCopy.splice(removeIndex,1)
            return{
                ...state,
                movies:moviesCopy
            }
        case "GET_MOVIE":
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state
    }
}
module.exports = {add:addMovie,remove:removeMovie,movieReducer:movieReducer};


