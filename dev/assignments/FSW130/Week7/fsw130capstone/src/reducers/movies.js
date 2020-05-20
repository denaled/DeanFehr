let defaultState={
    movies:[]
}

function movieReducer(state=defaultState,action){
    switch(action.type){
        case "GET_MOVIE":
            console.log("I am in Moviereducer ")
            console.log(action.payload)
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state
    }
}
module.exports = {movieReducer:movieReducer};