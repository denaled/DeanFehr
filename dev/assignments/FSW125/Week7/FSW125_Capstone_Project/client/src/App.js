import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CapForm from './components/CapForm';
import CapList from './components/capsList'
import NavBar from './components/NavBar'

function App() {
  const [cap,setCap] = useState([])

  function getCaps(){
    axios.get("/cap")
    .then(res => setCap(res.data))
    .catch(err => console.log(err))
  }
  function addCap(newCap){
    axios.post("/cap", newCap)
    .then(res=>{
      setCap(prevCap => [...prevCap,res.data])
    })
    .catch(err => console.log(err))
  }
  function deleteCap(capID){
    axios.delete(`/cap/${capID}`)
    .then(res=> {
      setCap(prevCap =>prevCap.filter(cap => cap._id !== capID))
    })
    .catch(err => console.log(err))
  }
  function editCap(updates, capID){
    axios.put(`/cap/${capID}`, updates)
    .then(res =>{
    
      window.location.reload(true)
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getCaps()
  }, [])
  return (
    <div className="App">
      <NavBar/>
      <div>
              <CapForm btnText={"Add Cap Info"} submit={addCap}/>
      </div>
      {cap.map(cap =>
      <CapList
      {...cap}
      key = {cap._id}
      deleteCap = {deleteCap}
      editCap = {editCap}/>

        )}

    </div>
  );
}

export default App;
