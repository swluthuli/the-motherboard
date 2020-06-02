import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles.scss";
function Login(props) {
  return (
    <Modal animation show={props.isShow} onHide={props.showLogin} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registered User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
    
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Text className="text-muted">
            <a className="register_link">Forgot password?</a>
          </Form.Text>
          <Form.Group>
          <Button className="login_button" block variant="dark" onClick={props.showLogin}>
          Log in
        </Button>
          </Form.Group>
          <Form.Text className="text-muted">
           New to The Motherboard Project? <a className="register_link">Sign up here</a>
          </Form.Text>
        </Form>
      </Modal.Body>
     
    </Modal>
  );
}

export default Login;
