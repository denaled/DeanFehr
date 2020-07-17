import React, {useState} from 'react'
import CapForm from './CapForm'
function CapList (props){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className= "capsMain">
            { !editToggle ?
            <>
            <div className="card"  >
                <h5 className="card-header bg-secondary text-white" >{props.firstName} {props.lastName}</h5>
                    <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">ID Number: {props._id}</h6>
                    {/* <h6 className="card-subtitle mb-2 text-dark"> Would like a Free hat:{props.freeCap?" Yes":" No"}</h6>
                    <h6 className="card-subtitle mb-2 text-dark"> Favortie Football Team: {props.favTeams[0]}</h6>
                    <h6 className="card-subtitle mb-2 text-dark"> Favortie Baseball Team: {props.favTeams[1]}</h6> */}
                    <h6 className="card-subtitle mb-2 text-dark">Number of hats owend: {props.hatNum}</h6>
                    <button className ="delete-btn"
                onClick={() => props.deleteCap(props._id)}>Delete</button>
                <button 
                className="edit-btn"
                onClick ={() => setEditToggle(prevToggle => !prevToggle)} > Edit</button>
                    </div>
            </div>
            </>
            :
            <>
            <CapForm
            firstName = {props.firstName}
            lastName = {props.lastName}
            // freeCap = {props.freeCap}
            // favTeams={props.favTeams}
            hatNum = {props.hatNum}
            _id = {props._id}
            submit={props.editCap}
            btnText="Submit Edit"/>
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>

            }
        </div>
    )
}
export default CapList