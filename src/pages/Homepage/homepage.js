import React from 'react';
import './homepage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Edition from '../../assets/1.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";

const Homepage = props =>{
    return (
        <section>
           
            <Container className="homeContainer">
  <Row>
    <Col md={{ span: 6, offset: 3 }} >
    <img className="season-edition" src={Edition} alt="season edition" />
    </Col>
  </Row>
  <Row>
      <Col md={{ span: 6, offset: 3 }} >
      <h5 className="text-padding">Spring 2020 Collection<span className="icon">  <MdKeyboardArrowRight/></span></h5>
      </Col>
      <Col>
    
      </Col>
  </Row>
</Container>

            </section>
    );
};
export default Homepage;