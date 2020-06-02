import React from 'react';
import './styles.scss';
import Directory from '../../component/Directory';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Edition from '../../assets/1.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from '../../component/footer'
const Homepage = props =>{
    return (
        <section>
            <Directory/>
            <Container className="container">
  <Row>
    <Col md={{ span: 6, offset: 3 }} >
    <img className="season-edition" src={Edition} alt="season edition" />
    </Col>
  </Row>
  <Row>
      <Col md={{ span: 6, offset: 3 }} >
      <h4 className="text-padding">Spring 2020 Collection<span className="icon">  <MdKeyboardArrowRight/></span></h4>
      </Col>
      <Col>
    
      </Col>
  </Row>
</Container>
<Footer/>
            </section>
    );
};
export default Homepage;