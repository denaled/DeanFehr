import thunk from 'redux-thunk'
const redux = require("redux")
const {combineReducers, createStore,applyMiddleware} = redux


//import movieReducer from './movie'
const {movieReducer} = require('./movies')
const {pokemonReducer} = require('./pokemon')

const rootReducer = combineReducers({
    movie: movieReducer,
    pokemon: pokemonReducer
    
})
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store

