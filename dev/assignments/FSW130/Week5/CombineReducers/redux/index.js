const redux = require("redux")
const {combineReducers, createStore} = redux

//import movieReducer from './movie'
const {movieReducer} = require('./movie')
//import tvShowReducer from './tvShow'
const {tvShowReducer} = require('./tvShow')

const rootReducer = combineReducers({
    movie: movieReducer,
    tvShow: tvShowReducer
})

module.exports = store = createStore(rootReducer)
// store.subscribe(() => {
//     console.log(store.getState())
// })
