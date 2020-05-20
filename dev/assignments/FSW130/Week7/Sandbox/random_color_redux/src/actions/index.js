import axios from 'axios'

export function loadColor(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random")
        .then((response)=>{
            console.log(response)
            dispatch(changeColor("#" + response.data.new_color))
        })
        .catch(err => console.log(err))
    }
}

export function changeColor(color){
    console.log("I am here " + color)
    //window.location.reload
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}