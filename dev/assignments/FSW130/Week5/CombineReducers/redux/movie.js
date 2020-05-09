

module.exports.add = function addMovie(movie){
    return{
        type:"ADD_MOVIE",
        payload:movie
    }
}
module.exports.remove = function removeMovie(movie){
    return{
        type:"REMOVE_MOVIE",
        payload:movie
    }
}
 module.exports.get = function getMovie(movie){
    return{
        type:"GET_MOVIE",
        payload:movie
    }
}
const initialState ={
    movies:[]
}
module.exports.movieReducer = function movieReducer(state=initialState,action){
    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state,
            movies:[...state.movies, action.payload]
            }
        case "REMOVE_MOVIE":
            const moviesCopy = [...state.movies]
           //console.log("What Is Remove ITEM" + action.payload.title)
            const removeIndex = moviesCopy.map(function(item){ return item.title;}).indexOf(action.payload.title)
            console.log(moviesCopy)
            moviesCopy.splice(removeIndex,1)
            return{
                ...state,
                movies:moviesCopy
            }
        case "GET_MOVIE":
            return{
                movies:state
            }
        default:
            return state
    }
}
// exports.movieReducer = movieReducer
// exports.addMovie = addMovie;
// exports.removeMovie = removeMovie;
// exports.getMovie = getMovie;

//module.exports = {add:addMovie,remove:removeMovie,movieReducer:movieReducer };


