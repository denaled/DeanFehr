

async function getData(){
    let speciesResults = ""
    let worldResults =''
    const pendingHomeWorldPromises =[]
    try{
        const species = await axios.get("https://swapi.co/api/species/")
        speciesResults = species.data.results 
        //console.log(species.data.results[0].homeworld)
        
        console.log(speciesResults[0].homeworld)
        for (let i = 0; i <speciesResults.length ; i++){
            pendingHomeWorldPromises.push(axios.get(speciesResults[i].homeworld))
        }
       
       
    }
    catch(error){
            console.log(error)
    }
    Promise.all(pendingHomeWorldPromises)
    .then(response =>  listInfoOnDom(speciesResults,response)  )
    .catch(error => console.log(error))
  
    //listInfoOnDom(speciesResults,worldResults)
    
}
getData()

function listInfoOnDom (species,homeWorld){
    // const h1 = document.createElement('h1')
    // h1.textContent = species[0].name
    // document.body.appendChild(h1)
    for (let i = 0; i < species.length; i++){
       console.log(homeWorld[i].data.name)
        const hDiv = document.createElement('div')
        const hName = document.createElement('h1')
        const wName = document.createElement('h2')
        let divID = "div" + i
        hName.textContent = species[i].name
        wName.textContent = "HomeWorld: " +homeWorld[i].data.name
        hDiv.setAttribute('id', divID)
        hName.setAttribute('class', "speciesName")
        wName.setAttribute('class',"worldName")
        document.body.append(hDiv)
        const betweenDiv = document.getElementById(divID)
        betweenDiv.appendChild(hName)
        betweenDiv.appendChild(wName)
    }
}