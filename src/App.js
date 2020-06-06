import React, { Component } from "react";
import "./default.scss";
import Header from "./component/header/header";
import Homepage from "./pages/Homepage";
import SideDrawer from "./component/sideDrawer/SideDrawer";
import Footer from "./component/footer/footer";
import Backdrop from "./component/backdrop/backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
backdropClickHandler=()=>{
  this.setState({sideDrawerOpen:false})
}
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Header drawerClickHandler={this.drawerToggleClickHandler}></Header>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}

        <Homepage></Homepage>
        <Footer />
      </div>
    );
  }
}

export default App;
