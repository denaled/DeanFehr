import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";

function ToDoListComponents(props) {
  return (
    // <div>
    //     <input type = 'checkbox'></input>
    //     <p>{props.todoTask}</p>
    // </div>
    // <div class="form-check">
    //       <label class="form-check-label">
    //         <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" unchecked/>
    //         {props.todoTask}
    //       </label>
    //     </div>
    //    <div class="form-check">
    //      <label class="form-check-label">
    //        <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader"/>
    //        {props.todoTask}
    //      </label>
    //    </div>

    <Container>
      <Row className="justify-content-md-center">
        <Col md={2} ></Col>
        <Col md={8}>
          <Alert key="1" variant={props.varient}>
            {props.todoTask}
          </Alert>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default ToDoListComponents;
