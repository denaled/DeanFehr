import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class MakeCont extends Component {
  constructor() {
    super();
    //this.firstName = React.createRef()
    this.state = {
      fName: "",
      lName: "",
      email: "",
      pob: "",
      pNum: '',
      fFood: "",
      skillText: "",
      errors: []
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSomething = e => {
    e.preventDefault();
    //validate the input
    //put info into array
    console.log("I am here");
    console.log(this.state.fName);
    console.log(this.state.lName);
    const { fName, lName, email, pNum,fFood,pob,skillText } = this.state;
    const errors = validate(fName, lName, email, pNum,fFood,pob,skillText);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    let fullName = this.state.fName + " " + this.state.lName;
    let passSomething = [
      fullName,
      this.state.pNum,
      this.state.pob,
      this.state.fFood,
      this.state.email,
      this.state.skillText
    ];
    this.props.getInfo(passSomething);

    this.setState({
      fName: "",
      lName: "",
      email: "",
      pob: "",
      pNum: "",
      fFood: "",
      skillText: "",
      errors: []
    });
  };

  render() {
    let contstyle = {
      border: "2px solid black",
      width: "700px",
      padding: "10px"
    };
    const { errors } = this.state;
    return (
      <div className="container" style={contstyle}>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <input
              className="form-control"
              placeholder="First name"
              name="fName"
              value={this.state.fName}
              onChange={this.handleChange}
            ></input>
          </Col>
          <Col md={{ span: 4 }}>
            <Form.Control
              placeholder="Last name"
              name="lName"
              value={this.state.lName}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Control
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Col>
          <Col md={{ span: 4 }}>
            <Form.Control
              placeholder="Place of Birth"
              name="pob"
              value={this.state.pob}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Control
              placeholder="Phone"
              name="pNum"
              value={this.state.pNum}
              onChange={this.handleChange}
            />
          </Col>
          <Col md={{ span: 4 }}>
            <Form.Control
              placeholder="Favorite Food"
              name="fFood"
              value={this.state.fFood}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ offset: 2 }}>
            <textarea
              cols={60}
              placeholder="Tell us about yourself"
              name="skillText"
              value={this.state.skillText}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 8, offset: 5 }}>
            <button onClick={this.handleSomething}>Submit</button>
            {errors.map(error => (
              <p key={error}>Error: {error}</p>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}
function validate(fname, lname, email, phone,fFood,pob,skillText) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (fname.length === 0) {
    errors.push(" First Name can't be empty");
  }
  if (lname.length === 0) {
    errors.push(" Last Name can't be empty");
  }
  if (fFood.length === 0) {
    errors.push("Favorite food can't be empty");
  }
  if (pob.length === 0) {
    errors.push(" Place of Birth can't be empty");
  }
  if (skillText.length === 0) {
    errors.push(" tell us about yourself can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  if (phone.length < 6) {
    errors.push("Phone should be at least 6 characters long");
  }

  return errors;
}
export default MakeCont;
