import React from "react";
import "./SideDrawer.css";
import { MdClose } from "react-icons/md";
import Directory from "../Directory"
const sideDrawer = props =>{

    let drawerClasses = "side-drawer";

    if(props.show){
        drawerClasses = "side-drawer open"
    }
    return(
    <nav className={drawerClasses}>
        <ul>
<MdClose className="icon close" onClick={props.drawerClickHandler}/>
           <Directory />
        </ul>
    </nav>
);
}
export default sideDrawer;