

function addTV(tv){
    return{
        type:"ADD_TV",
        payload:tv
    }
}
function removeTV(tv){
    return{
        type:"REMOVE_TV",
        payload:tv
    }
}

const initialState ={
    tvShows:[{name: "All In The Family"},{name:"Family Guy"},{name: "Big Bang Theory"},{name:"Cheers"}]
}

function tvShowReducer(state=initialState,action){
    switch(action.type){
        case "ADD_TV":
            return{
                ...state,
            tvShows:[...state.tvShows, action.payload]
            }
        case "REMOVE_TV":
            const tvShowsCopy = [...state.tvShows]
            const removeIndex = tvShowsCopy.map(function(item){ return item.title;}).indexOf(action.payload.title)
            console.log(tvShowsCopy)
            tvShowsCopy.splice(removeIndex,1)
            return{
                ...state,
                tvShows:tvShowsCopy
            }
        default:
            return state
    }
}
module.exports = {add:addTV,remove:removeTV,tvShowReducer:tvShowReducer };
