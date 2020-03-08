import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class MakeBadge extends Component{

  render(){
    let contstyle = {
      border: "2px solid black",
      width: "700px",
      padding: "10px"
    };
    return (
      <div className="container" style={contstyle}>
        <Row>
          <Col>
          <h1 style={{backgroundColor:'grey'}}>Badge:</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <label>Name: {this.props.gotInfo[0]}
            </label>
          </Col>
          <Col md={{ span: 4 }}>
          <label>Phone:  {this.props.gotInfo[1]}
            </label>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
          <label>Place of Birth:  {this.props.gotInfo[2]}
            </label>
          </Col>
          <Col md={{ span: 4 }}>
          <label>Favorite food:  {this.props.gotInfo[3]}
            </label>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
          <label>Email:  {this.props.gotInfo[4]}
            </label>
          </Col>
          
        </Row>
        <br />
        <Row>
          <Col md={{ offset: 2 }}>
            <textarea cols={60} value = {this.props.gotInfo[5]} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ span: 8, offset: 5 }}>
            <button>Submit</button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default MakeBadge;
