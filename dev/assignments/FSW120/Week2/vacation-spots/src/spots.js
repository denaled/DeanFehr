import React from "react"

function Spots(props){
    // let yearColor = props.timeColor
    // if (props.timeSpot.toLowerCase() === "spring"){
    //     yearColor = "yellow"
    // }else if(props.timeSpot.toLowerCase() === "winter"){
    //     yearColor = "lightblue"
    // }else if(props.timeSpot.toLowerCase() === "fall"){
    //     yearColor = "orange"
    // }else if (props.timeSpot.toLowerCase() === "summer"){
    //     yearColor = "green"
    // }
    let yearColor = seasonColor(props.timeSpot)
    let dollarSign = dollarCost(props.priceSpot)
    const styles = {
        backgroundColor:yearColor,
        width: 300
    }
    
    return(
        <div style={styles}> 
            <h2>{props.placeSpot}</h2>
            <h5>COST:{dollarSign} {props.priceSpot}</h5>
            <p>Best time to go: {props.timeSpot}</p>
        </div>
    )
    
}
// Spots.defaultProps ={
//     timeColor: "grey"
// }

function seasonColor(timeYear){
    if (timeYear.toLowerCase() === "spring"){
            return "yellow"
        }else if(timeYear.toLowerCase() === "winter"){
            return  "lightblue"
        }else if(timeYear.toLowerCase() === "fall"){
            return "orange"
        }else if (timeYear.toLowerCase() === "summer"){
            return "green"
        }else{
            return "lightgrey"
        }
}

function dollarCost(cost){
    if(cost <= 500){
        return "$"
    }else if (cost > 500 && cost <= 1000){
        return "$$"
    }else if (cost > 1000){
        return "$$$"
    }else{
        return "unsure"
    }

}

export default Spots