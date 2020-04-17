import React, { Component } from "react";
import axios from "axios";
const MyContext = React.createContext();

class MyContextProvider extends Component {
  updateReload = newReload => {
    this.setState({ reload: newReload });
  };
  updateUserName = newUserName => {
    this.setState({ userName: newUserName });
  };
  updateMessage = newMessage => {
    this.setState({ message: newMessage });
  };
  updateID = newID => {
    this.setState({ id: newID });
  };
  updateCurrentName = newName => {
    if (newName === "") {
      console.log(this.state.holdName);
      this.setState({ currentName: this.state.holdName });
    } else {
      this.setState({ currentName: newName });
    }
  };
  updateCurrentMessage = newMessage => {
    if (newMessage === "") {
      this.setState({ currentMessage: this.state.holdMessage });
    } else {
      this.setState({ currentMessage: newMessage });
    }
  };
  cipherWhat = value => {
    const addInfo = {
      title: this.state.userName,
      description: this.state.message,
      price: 1
    };
    const buttonName = value.value;
    const id = value.id;

    console.log(value.className);
    if (buttonName === "Add") {
      console.log("I am in " + buttonName);
      //post
      axios
        .post("https://api.vschool.io/dean/todo", addInfo)
        .then(response => window.location.reload(true))
        .catch(error => console.log(error));
    } else if (buttonName === "Edit") {
      console.log(value);
      this.setState({ currentName: value.name });
      this.setState({ currentMessage: value.className });
      this.setState({ id: value.id });
      this.setState({ holdName: value.name });
      this.setState({ holdMessage: value.className });
      this.togglePopUp();
    } else if (buttonName === "Delete") {
      //DELETE
      axios
        .delete("https://api.vschool.io/dean/todo/" + id)
        .then(response => window.location.reload(true))
        .catch(error => console.log(error));
    } else if (buttonName === "Save") {
      console.log(this.state.id);
      console.log(this.state.currentName);
      console.log(this.state.currentMessage);
      let saveInfo= {
          title: this.state.currentName,
          description: this.state.currentMessage

      }
      axios
        .put("https://api.vschool.io/dean/todo/" + this.state.id, saveInfo)
        .then(response =>this.togglePopUp("true"))
        .catch(error => console.log(error));
    }
  }; //CipherWhat end
  togglePopUp = (val) => {
    this.setState({ showPopUp: !this.state.showPopUp });
    console.log("I am in Toggle" + this.state.showPopUp);
    console.log("I am in Toggle" + this.state.currentMessage);
    if (val ==="true"){
        window.location.reload(true)
    }
  };

  state = {
    reload: "Generic",
    updateReload: this.updateReload,
    userName: "user",
    updateUserName: this.updateUserName,
    message: "start",
    updateMessage: this.updateMessage,
    id: 1,
    updateID: this.updateID,
    doWhat: this.cipherWhat,
    showPopUp: false,
    togglePopUp: this.togglePopUp,
    currentName: "",
    currentMessage: "hellow",
    updateCurrentName: this.updateCurrentName,
    updateCurrentMessage: this.updateCurrentMessage,
    holdName: "",
    holdMessage: ""
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContextProvider, MyContext };
