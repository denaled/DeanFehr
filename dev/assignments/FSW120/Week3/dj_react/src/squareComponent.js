import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MakeSquare(props) {
  return (
    <Col style={{ backgroundColor: props.squareColor, margin: 5 }}>
      
    </Col>
  );
}

export default MakeSquare;
