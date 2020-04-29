const redux =require('redux')

function addContact (contact){
    return{
        type:"ADD_CONTACT",
        payload:contact
    }
}
function removeContact (contact){
    return{
        type:"REMOVE_CONTACT",
        payload:contact
    }
}

const initialState={
    contacts:[]
}

function reducer (state= initialState,action){
    switch(action.type){
        case "ADD_CONTACT":
            return{
                //something
                ...state,
                contacts:[...state.contacts, action.payload]
            }
        case "REMOVE_CONTACT":
            //const updatedArr = state.contacts.filter(contact => contact.toLowerCase() !== action.payload.toLowerCase())
            const arrCopy = [...state.contacts]
            //const index = arrCopy.indexOf(action.payload)
            const removeIndex = arrCopy.map(function(item){ return item.name;}).indexOf(action.payload)
            console.log (arrCopy)
            console.log("remove index numer " + removeIndex)
            
                arrCopy.splice(removeIndex,1)
                console.log (arrCopy)
            
            return{
                //something
                ...state,
                contacts:arrCopy
            }
        default:
            return state
    }
}

const store =redux.createStore(reducer)
store.subscribe(()=>{
    //console.log(store.getState().contacts[0])
     console.log(store.getState().contacts.length)
    
    
})

store.dispatch(addContact({name: "Dean",phone:"237129381",email:"dean@gagkl"}))
store.dispatch(addContact({name: "Mike",phone:"237134181",email:"mike@gagkl"}))

store.dispatch(removeContact("Mike"))
