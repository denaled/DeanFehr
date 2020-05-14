
const redux = require('redux')
//import contactReducer from './contacts'
const {combineReducers,createStore} = redux
const {contactReducer} = require('./contacts')




//const {contactReducer} = require('./contacts')

const rootReducer = combineReducers({
    contacts: contactReducer
})
//const store =redux.createStore(reducer)
const store = createStore(rootReducer)
//module.exports = store = createStore(rootReducer)
export default store