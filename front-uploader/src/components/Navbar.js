// components/Navbar.js
//import data from './jokes-en.json';
import { List, House, BoxArrowInRight,Search } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button,Dropdown } from 'react-bootstrap';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ background: "none", border: "none" }}
  >
    {children}
  </button>
));


function NavigationBar() {
  return (
    
    <Navbar key={true} expand={true} className="bg-body-tertiary p-2" data-bs-theme="dark">
        
        <Navbar.Collapse id="basic-navbar-nav" className="gap-md-5">
          <Navbar.Brand as={Link} to="/">My uploader</Navbar.Brand>


          <Nav>
            <Form inline className="d-flex align-items-center">
              <FormControl type="text" placeholder="Search" className="d-none d-md-block"/>
              <Button variant="outline-info" className="d-none d-md-block">
                <Search/>
              </Button>
            </Form> 
          </Nav>
        </Navbar.Collapse>    
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav>
            <Nav.Link as={Link} to="/" className="d-none d-md-block">
              <House style={{ color: 'white', marginRight: '5px' }} className="fs-2"/>
              Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/login" className="d-none d-md-block">
              <BoxArrowInRight style={{ color: 'white', marginRight: '5px'}} className="fs-2"/>
              Connection
            </Nav.Link>
          </Nav>

          <Dropdown className="d-block d-md-none">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <List className="fs-2 "/>
            </Dropdown.Toggle>
            <Dropdown.Menu  align={{ lg: 'start' }}>
              <Dropdown.Item>
                <Form inline className="d-flex align-items-center" onClick={(e) => e.stopPropagation()}>
                  <FormControl type="text" placeholder="Search" />
                </Form> 
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/"><House className="fs-2"/></Dropdown.Item>
              <Dropdown.Item as={Link} to="/login"><BoxArrowInRight className="fs-2"/></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>        
        </Navbar.Collapse>
    </Navbar>
        
      
    
  );
}

export default NavigationBar;

