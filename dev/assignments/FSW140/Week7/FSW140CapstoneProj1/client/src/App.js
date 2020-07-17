import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CapForm from './components/CapForm';
import CapList from './components/capsList'
import NavBar from './components/NavBar'

function App() {
  const [cap,setCap] = useState([])

  function getCaps(){
    axios.get("/getAll")
    .then(res => setCap(res.data))
    .catch(err => console.log("WTF DEAN" + err ))
  }
  function addCap(newCap){
    axios.post("/addData", newCap)
    .then(res=>{
      setCap(prevCap => [...prevCap,res.data])
    })
    .catch(err => console.log("DEAN I AM IN addCAP-->"+err))
  }
  function deleteCap(capID){
    console.log("I AM IN DWLWTW CAP APP.JS-->" + capID)
    axios.get(`/removeCap/${capID}`)
    .then(res=> {
      setCap(prevCap =>prevCap.filter(cap => cap._id !== capID))
    })
    .catch(err => console.log("I AM IN DELETECAP-->" + err))
  }
  function editCap(updates, capID){
    console.log("CLient SIDE--- Edit"+ updates)
    axios.put(`/editCap/${capID}`, updates)
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
