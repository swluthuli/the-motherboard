import React from "react";
import Modal from "react-bootstrap/Modal";
import { MdCall,MdMail } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Clientzone(props){
 
    return (
     
        <Modal
          animation
          show={props.isShow}
          onHide={props.showClientzone}
          centered 
          dialogClassName="modal"
          size="lg"
        >
           <Modal.Header closeButton>
       
      </Modal.Header>
          <Modal.Body closeButton>
     
            <Row className="contact_us">
              <Col>
              <Row><MdCall size="30px" /></Row>
              <Row><p className="clientzone_title">Phone</p></Row>
              <Row><p>Call us from Monday to Friday , 9 to 17</p></Row>
              <Row><p>+27</p></Row>
              </Col>
              <Col><Row><MdMail  size="30px"/></Row>
              
              <Row><p className="clientzone_title">Email</p></Row>
              <Row><p>we will respond to every email within 24 business hours, Monday to Friday</p></Row>
              <Row><p>motherboardevents@gmail.com</p></Row>
              </Col>
            </Row>
          </Modal.Body>
        
        </Modal>
      

    );
  }


export default Clientzone;
