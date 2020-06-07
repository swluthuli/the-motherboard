import React, { Component } from "react";
import "./default.scss";
import Header from "./component/header/header";
import Homepage from "./pages/Homepage/homepage";
import Directory from "./component/Directory";
import SideDrawer from "./component/sideDrawer/SideDrawer";
import Footer from "./component/footer/footer";
import Backdrop from "./component/backdrop/backdrop";
import Login from "./component/login";
import Register from "./component/register";
import Clientzone from "./component/clientzone/clientzone";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    showLoginModel: false,
    showRegisterModel: false,
    showClienzoneModel: false,
    clientHandle: false
  };
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
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  showClientHandle =()=>{
    this.setState(prevState => {
      return { clientHandle: !prevState.clientHandle };
    });
  }
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Header
          showLogin={this.showLogin}
          showRegister={this.showRegister}
          showClientzone={this.showClientzone}
          drawerClickHandler={this.drawerToggleClickHandler}
          showClientHandle={this.showClientHandle}
          clientHandle={this.state.clientHandle}
        ></Header>
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Register
          showRegister={this.showRegister}
          isShow={this.state.showRegisterModel}
        />
        <Login showLogin={this.showLogin} isShow={this.state.showLoginModel} />
        <Clientzone
          showClientzone={this.showClientzone}
          isShow={this.state.showClienzoneModel}
        />

        {backdrop}
        <Directory />
        <Homepage></Homepage>
        <Footer />
      </div>
    );
  }
}

export default App;
