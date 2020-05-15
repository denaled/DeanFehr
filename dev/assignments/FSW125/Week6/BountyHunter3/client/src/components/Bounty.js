import React, {useState} from 'react'
import AddBountyForm from  './AddBountyForm'

function Bounty(props){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bountyMain">
            {  !editToggle ?
                <>
                <h1 className = "bountyHead">Bounty</h1>
                <h2>{props.FirstName}  {props.LastName}</h2>
                <p>Bounty Amount: {props.BountyAmount}</p>
                <button 
                className ="delete-btn"
                onClick={() => props.deleteBounty(props._id)}>Delete</button>
                <button 
                className="edit-btn"
                onClick ={() => setEditToggle(prevToggle => !prevToggle)} > Edit</button>
                </>
            :
            <>
                <AddBountyForm
                FirstName={props.FirstName}
                LastName={props.LastName}
                BountyAmount= {props.BountyAmount}
                _id = {props._id}
                submit={props.editBounty}
                btnText="Submit Edit" 
                />
                 <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Bounty