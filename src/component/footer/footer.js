import React from "react";
import "./footer.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { MdSend } from "react-icons/md"; 
import Container from "react-bootstrap/Container";
const Footer = props => {
  return (


  
    <Container>
       <Row className="padding-top">
<Col xs={12} md={8}>
  <Row>
<Col xs={12} md={4}>
 <Row className="hasChildren">
            <Col className="bottomBoard">
              <h5 className="menuItem" >Client Service</h5>
            </Col>
          </Row>
          <Row >
            <Col className="menuItemPadding"> Email us</Col>
          </Row>
          <Row>
            <Col className="menuItemPadding">FAQs</Col>
          </Row>
</Col>
<Col xs={12} md={4}>
<Row className="hasChildren">
            <Col className="bottomBoard">
              <h5 className="menuItem" >Legal Area</h5>
            </Col>
          </Row>
          <Row className="padding">
            <Col className="menuItemPadding">Privacy Policy</Col>
          </Row>
          <Row>
            <Col className="menuItemPadding">Cookie Policy</Col>
          </Row>
</Col>
<Col xs={12} md={4}>
<Row>
  <Col className="sitemap">
  <h5 className="menuItem ">Site map</h5>
  </Col>
</Row>
</Col>
</Row>
</Col>
<Col xs={12} md={4} className="rightBoard">
<Row>
            <Col className="bottomPadding">
              <h6>SIGN UP FOR THE MOTHERBOARD PROJECT UPDATES</h6>
            </Col>
          </Row>

          <Row className="padding">
            <Col>The data fields with an asterisk (*) must be completed in order <br/> to satisfy any request you make. By submitting this request,<br/> you confirm that you have reached, in your country of residence</Col>
          </Row>
          <Row className="email-bar padding">
            <Col>
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="dark"><MdSend/></Button>
    </InputGroup.Append>
  </InputGroup>
            </Col>
          </Row>

</Col>
      </Row>
      <Row className="copyright">
        <Col>
        <p>Copyright &copy; 2020 THE MOTHERBOARD PROJECT All Rights Reserved</p>
        </Col>
      </Row>

      </Container>


     
 
  );
};
export default Footer;
