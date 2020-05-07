import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'


function App() {
  const [bounty, setBounty] = useState([])

  function getBounty(){
    axios.get("/bounty")
    .then(res =>setBounty(res.data))
    .catch(err => console.log(err))
  }
  function addBounty(newBounty){
    axios.post("/bounty", newBounty)
    .then(res=>{
      setBounty(prevBounty => [...prevBounty,res.data])
    })
    .catch(err => console.log(err))
  }
  function deleteBounty(bountyID){
    axios.delete(`/bounty/${bountyID}`)
    .then(res=> {
      setBounty(prevBounty =>prevBounty.filter(bounty => bounty._id !== bountyID))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyID){
    axios.put(`/bounty/${bountyID}`, updates)
    .then(res =>{
      console.log(res.data)
      console.log (bountyID)
      console.log(updates)
      console.log(this._id)
      window.location.reload(true)
      //setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyID ? bounty : res.data))
     //setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyID ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }
  

  //userEffect similar to componenDIDMount and DidUpdate
  useEffect(()=>{
    getBounty()
  }, [])

  return (
    <div >
      <AddBountyForm submit={addBounty} btnText={"Add Bounty"}/>
      {bounty.map(bounty => 
        <Bounty
        {...bounty}
        key ={bounty._id}
        deleteBounty={deleteBounty}
        editBounty = {editBounty}/>)}
    </div>
  );
}

export default App;
