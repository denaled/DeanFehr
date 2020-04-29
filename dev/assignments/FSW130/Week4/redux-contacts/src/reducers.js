

const initalState ={
    card :[],
    name:""
}

function reducer(state=initalState,action){

    switch (action.type){
        case "ADD_CARD":
            //do something
            return{
                ...state,
                card:[...state.card, action.payload]
            }
        case "REMOVE_CARD":{
            //do something
            const arrCopy =[...state.card]
            const updatedArr = state.card.filter(newCard => newCard.toLowerCase() !== action.payload.toLowerCase())
            
            return{
                ...state,
                card:updatedArr
            }
        }
        case "CURRENT_NAME":{
            return{
                ...state,
                name: action.payload
            }
        }
        default:{
            return state
        }    
    }
}

export default reducer