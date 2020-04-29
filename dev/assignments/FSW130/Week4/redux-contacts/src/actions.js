

export function addCard(newCard){
    return{
        type:"ADD_CARD",
        payload: newCard
    }
}

export function removeCard(newCard){
    return{
        type:"REMOVE_CARD",
        payload: newCard
    }
}
export function currentName(name){
    return{
        type:"CURRENT_NAME",
        payload: name
    }
}
export function currentPhone(phone){
    return{
        type:"CURRENT_PHONE",
        payload: phone
    }
}
export function currentState(state){
    return{
        type:"CURRENT_NAME",
        payload: state
    }
}