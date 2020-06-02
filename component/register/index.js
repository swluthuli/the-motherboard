import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Register(props) {
  return (
    <Modal
      animation
      show={props.isShow}
      onHide={props.showRegister}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Welcome to the family</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>
<Row>
<Col md={{ span: 6, offset: 3 }}>
<Form.Group>
          <Button className="login_button" block variant="dark" onClick={props.showLogin}>
          Sign up
        </Button>
          </Form.Group>
</Col>

</Row>

          <Form.Text className="text-muted">
            Already have an account log in <a className="register_link">here</a>
          </Form.Text>
        </Form>
      </Modal.Body>
      
    </Modal>
  );
}

export default Register;
