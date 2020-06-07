import React, {Component} from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { MdShoppingBasket, MdSearch,MdPermIdentity,MdMenu } from "react-icons/md";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
class Header extends Component {
  constructor(props) {
    super(props);

  }

 
  render(){
    const popover = (
      <Popover id="popover-basic">
        
        <Popover.Content>
        <ListGroup>
        <ListGroup.Item onClick={this.props.showRegister} >
                    Sign up
                  </ListGroup.Item>
                 
                  <ListGroup.Item onClick={this.props.showLogin} >
                    Log in
                  </ListGroup.Item>

</ListGroup>
        </Popover.Content>
      </Popover>
    );
    return (
      <Container className="Toolbarcontainer">
        <Row className="top-padding">
          <Col xs={3} md={4}>
          <MdMenu className="menu icon" onClick={this.props.drawerClickHandler}/>
            <div className="locationIdicator">Shop in : South Africa</div>
          </Col>
          <Col xs={6} md={4} className="logo">
          
            <a href="/home" label="The Motherboard Project">
              <img className="logoImage" src={Logo} alt="TMP Logo" />
            </a>
          </Col>
          <Col xs={3} md={4}>
            <Row className="txtEnd">
              <Col className="rightAlign">
                <ListGroup horizontal>
                  <ListGroup.Item onClick={this.props.showLogin} className="makeButton login">
                    Log in
                  </ListGroup.Item>
                  <ListGroup.Item className="icon user-control">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <MdPermIdentity />
                    </OverlayTrigger>
                  </ListGroup.Item>
                 
                  <ListGroup.Item onClick={this.props.showRegister} className="makeButton signup" >
                    Sign up
                  </ListGroup.Item>
                 
                  <ListGroup.Item onClick={this.props.showClientzone} className="makeButton clientService" >
                    Client Service
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="icon">
                    <MdShoppingBasket />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row >
              <Col className="rightAlign padding-right top-padding">
                <div className="searchBarWrapper">
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Search" className="searchbar" />
                    <InputGroup.Append>
                      <Button variant="dark">
                        <MdSearch />
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Header;
