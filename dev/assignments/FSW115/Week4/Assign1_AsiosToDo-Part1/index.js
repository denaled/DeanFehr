
const form = document.mainForm

const liElements =[]
const myWrapper = document.getElementById("myListWithButtons")
const listUL = document.getElementById("theList");
let test = document.getElementById("test") // my test H1 on the DOM
const who = document.getElementById("byWho");

// // event listner for Submit
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let inputValue = document.getElementById("add1").value
//     let whoValue  = document.getElementById("byWho").value
//     if (inputValue === "" ){
//         alert("Need to at least input a task")
//     }else{
//         addListToDOM(inputValue)
//     }
    
//     document.getElementById("add1").value = "" ;//reset the input so they can add again\
//     document.getElementById("byWho").value=""
// })

axios.get("https://api.vschool.io/dean/todo")
    .then(response=>{
        for(let i = 0 ; i < response.data.length ; i++){
            // const h1 = document.createElement('h1')
            // h1.textContent = response.data[i].title
            // document.body.appendChild(h1)
            let theListItem = createTaskElement(response.data[i])
            listUL.append(theListItem)
            console.log(response.data[i].title)
        }

    })
    .catch(error => console.log(error))


function addListToDOM(taskedItem){
    let theListItem = createTaskElement(taskedItem)
    //console.log(theListItem)
    listUL.append(theListItem);
}

function  createTaskElement(addToLists){
    let listItem = document.createElement("li")
    let theLabel = document.createElement("label")
    //let deleteButton = document.createElement("button")
    //let who = document.getElementById("byWho").value
    theLabel.innerText =  addToLists.title + ".........." + addToLists.description + "                 $" + addToLists.price;
    //deleteButton.innerText = "Delete";
    addToLists.completed?listItem.classList.add("checked"):""
    //listItem.onclick = clickedTask
    //deleteButton.onclick = deleteAction
    //deleteButton.className = "delete"
    listItem.appendChild(theLabel)
    //listItem.appendChild(deleteButton)
    return listItem    
}

function deleteAction(){
    //this.style.display = "none"
   this.parentNode.parentNode.removeChild(this.parentNode)
   
}
function clickedTask(){
    console.log(this.classList.toggle)
this.classList.toggle("checked")
}

