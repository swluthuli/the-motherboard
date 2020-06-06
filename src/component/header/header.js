import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { MdShoppingBasket, MdSearch,MdPermIdentity,MdMenu } from "react-icons/md";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Login from "../login";
import Register from "../register";
import Clientzone from "../clientzone";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModel: false,
      showRegisterModel: false,
      showClienzoneModel: false,
      value: ""
    };
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  showLogin = e => {
    this.setState(
      {
        showLoginModel: !this.state.showLoginModel
      },
      () => console.log(this.state.showLoginModel)
    );
  };
  showRegister = e => {
    this.setState(
      {
        showRegisterModel: !this.state.showRegisterModel
      },
      () => console.log(this.state.showRegisterModel)
    );
  };
  showClientzone = e => {
    this.setState(
      {
        showClienzoneModel: !this.state.showClienzoneModel
      },
      () => console.log(this.state.showClienzoneModel)
    );
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
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
                  <ListGroup.Item onClick={this.showLogin} className="makeButton login">
                    Log in
                  </ListGroup.Item>
                  <ListGroup.Item className="icon user-control">
                    <MdPermIdentity/>
                  </ListGroup.Item>
                  <Login showLogin={this.showLogin} isShow={this.state.showLoginModel} />
                  <ListGroup.Item onClick={this.showRegister} className="makeButton signup" >
                    Sign up
                  </ListGroup.Item>
                  <Register showRegister={this.showRegister} isShow={this.state.showRegisterModel} />
                  <ListGroup.Item onClick={this.showClientzone} className="makeButton clientService" >
                    Client Service
                  </ListGroup.Item>
                  <Clientzone showClientzone={this.showClientzone} isShow={this.state.showClienzoneModel} />
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
  }
}
export default Header;
