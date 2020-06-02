import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './styles.scss';
const Directory = props =>{
    return (
        <div className="wrapper">
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">New Arrival</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Ready to Wear</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Bags</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Shoes</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4">Accessories</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    );
};
export default Directory;