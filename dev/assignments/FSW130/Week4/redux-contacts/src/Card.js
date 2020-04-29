import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addCard,currentName,removeCard,} from './actions'


class Card extends Component {

    handleSubmit(e){
        //addCard
        //how do I call currentName to pass?? call the payload?
        this.props.dispatch(addCard(currentName.payload))
        
    }
    updateName(e){
        this.props.dispatch(currentName(e))
    }

    render (){
        return(
            <div className = "theCard">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" placeholder="Name" onChange={e => {this.props.dispatch(currentName(e.target.value))}}/>
                </label>
                {/* <label>
                    Phone:
                    <input type="text" placeholder="Phone"/>
                </label>
                <label>
                    State:
                    <input type="text" placeholder="State"/>
                </label> */}
                <input type="submit" value="Submit"/>
            </form>

            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        
    }
}

export default Card

//<input type='text'placeholder = {props.placeholder} onChange={e => {context.updateUserName(e.target.value)}} ></input>