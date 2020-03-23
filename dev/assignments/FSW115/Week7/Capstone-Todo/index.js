const form = document.mainForm;
const listUL = document.getElementById("theList");
//let test = document.getElementById("test") // my test H1 on the DOM

// event listner for Submit
form.addEventListener("submit", event => {
  event.preventDefault();
  const addToDo = {
    title: form.title.value,
    description: form.description.value,
    price: form.price.value
  };
//POST
  axios
    .post("https://api.vschool.io/dean/todo", addToDo)
    .then(response => location.reload())
    .catch(error => console.log(error));

  title.value = "";
  description.value = "";
  price.value = "";
});
// Get part
axios
  .get("https://api.vschool.io/dean/todo")
  .then(response => {
    for (let i = 0; i < response.data.length; i++) {
      let theListItem = createTaskElement(response.data[i]);
      listUL.append(theListItem);
    }
  })
  .catch(error => console.log(error));

function addListToDOM(taskedItem) {
  let theListItem = createTaskElement(taskedItem);
  //console.log(theListItem)
  listUL.append(theListItem);
}
function handleChange(checkBox) {
  //console.log(checkBox.checked)
  //console.log(checkBox.id);
  let update = {
    completed: checkBox.checked
  };
//PUT
  axios
    .put("https://api.vschool.io/dean/todo/" + checkBox.id, update)
    .then(response => location.reload())
    .catch(error => console.log(error));
}
// Create Dom Stuff and 
function createTaskElement(addToLists) {
  let listItem = document.createElement("li");
  let theLabel = document.createElement("label");
  let checkBox = document.createElement("input");
  let deleteButton = document.createElement("button");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", addToLists._id);
  checkBox.setAttribute("onchange", "handleChange(this)");
  deleteButton.innerText = "Delete";
  theLabel.setAttribute("id",addToLists._id)
  //theLabel.setAttribute("onClick", "editAction(this)")
  //let who = document.getElementById("byWho").value
  //theLabel.innerText =  addToLists.title + ".........." + addToLists.description + "                 $" + addToLists.price;
  theLabel.appendChild(
    document.createTextNode(
        '\t' + addToLists.title +
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'\t'+
        addToLists.description +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+'\t'+" $" +
        addToLists.price + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
    )
  );
  addToLists.completed
    ? listItem.classList.add("checked")
    : listItem.classList.add("uncheck");
  addToLists.completed ? (checkBox.checked = true) : "";
  //listItem.onclick = clickedTask
  deleteButton.setAttribute("onClick", "deleteAction(this)");
  deleteButton.setAttribute("id", addToLists._id);
  deleteButton.className = "delete";
  listItem.appendChild(checkBox);
  listItem.appendChild(theLabel);
  listItem.appendChild(deleteButton);

  return listItem;
}
function editAction(buttonID){
    console.log("made it here")
    console.log(buttonID)
}

//DELETE
function deleteAction(buttonID) {
  axios
    .delete("https://api.vschool.io/dean/todo/" + buttonID.id)
    .then(response => location.reload())
    .catch(error => console.log(error));
}
function clickedTask() {
  this.classList.toggle("checked");
}
