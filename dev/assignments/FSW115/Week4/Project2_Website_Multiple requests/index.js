const list = document.getElementById("indexList")


 //document.getElementById("indexBut").onclick = infoForIndex()

document.getElementById("indexBut").addEventListener("click", infoForIndex)

 function infoForIndex (){
    axios.get("https://api.vschool.io/dean/todo")
    .then(response=>{
        for(let i = 0 ; i < response.data.length ; i++){
            // const h1 = document.createElement('h1')
            // h1.textContent = response.data[i].title
            // document.body.appendChild(h1)
            let theListItem = createLI(response.data[i])
            list.append(theListItem)
            console.log(response.data[i].title)
        }

    })
    .catch(error => console.log(error))
    return true

 }

 function createLI(addToLists){
    let listItem = document.createElement("li")
    listItem.textContent = addToLists.title + ".........." + addToLists.description + "                 $" + addToLists.price;
    return listItem 
 }

 