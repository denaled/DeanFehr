
const form = document.mainForm

const liElements =[]
const myWrapper = document.getElementById("myListWithButtons")
const listUL = document.getElementById("theList");
let test = document.getElementById("test") // my test H1 on the DOM
const title = document.getElementById("title")
const description = document.getElementById("description");
const price = document.getElementById("price")

// event listner for Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const addToDo ={
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    
    axios.post("https://api.vschool.io/dean/todo", addToDo)
        .then (response => location.reload())
        .catch(error => console.log(error))

        title.value=""
        description.value=""
        price. value=""
})

axios.get("https://api.vschool.io/dean/todo")
    .then(response=>{
        for(let i = 0 ; i < response.data.length ; i++){
            // const h1 = document.createElement('h1')
            // h1.textContent = response.data[i].title
            // document.body.appendChild(h1)
            let theListItem = createTaskElement(response.data[i])
            listUL.append(theListItem)
           //console.log(response.data[i].title)
        }

    })
    .catch(error => console.log(error))


function addListToDOM(taskedItem){
    let theListItem = createTaskElement(taskedItem)
    //console.log(theListItem)
    listUL.append(theListItem);
}
function handleChange(checkBox){
    //console.log(checkBox.checked)
    console.log(checkBox.id)
    let update = {
        completed: checkBox.checked
    }
    
    axios.put("https://api.vschool.io/dean/todo/"+checkBox.id, update)
    .then(response => location.reload())
    .catch(error => console.log(error))
    
}

function  createTaskElement(addToLists){
    let listItem = document.createElement("li")
    let theLabel = document.createElement("label")
    let checkBox = document.createElement("input")
    let deleteButton = document.createElement("button")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", addToLists._id)
    checkBox.setAttribute("onchange", 'handleChange(this)')
    deleteButton.innerText = "Delete";
    //let who = document.getElementById("byWho").value
    //theLabel.innerText =  addToLists.title + ".........." + addToLists.description + "                 $" + addToLists.price;
    theLabel.appendChild(document.createTextNode(addToLists.title + ".........." + addToLists.description + "                 $" + addToLists.price))
    addToLists.completed?listItem.classList.add("checked"):listItem.classList.add("uncheck")
    addToLists.completed?checkBox.checked=true:""

    //listItem.onclick = clickedTask
    deleteButton.setAttribute("onClick", 'deleteAction(this)')
    deleteButton.setAttribute("id", addToLists._id)
    deleteButton.className = "delete"
    listItem.appendChild(checkBox)
    listItem.appendChild(theLabel)
    listItem.appendChild(deleteButton)
   
    return listItem    
}

function deleteAction(buttonID){
    //this.style.display = "none"
   //this.parentNode.parentNode.removeChild(this.parentNode)
   console.log(buttonID.id)
   axios.delete("https://api.vschool.io/dean/todo/"+buttonID.id)
    .then(response => location.reload())
    .catch(error => console.log(error))
   
}
function clickedTask(){
    console.log(this.classList.toggle)
this.classList.toggle("checked")
}

