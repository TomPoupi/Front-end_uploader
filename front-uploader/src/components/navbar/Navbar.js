import data from './jokes-en.json';
import logo from './Mu.gif';
import {React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container,InputGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import {House, BoxArrowInRight,Search,Display } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import "./Navbar.css";




function NavBar() {

  const navigate = useNavigate();
  const typeaheadRef = useRef();
  const [searchInput, setSearchInput] = useState([]);
 
  return (
    
    
    <Navbar className="styledNavbar" collapseOnSelect expand="sm" variant ="dark">
        {/* expend = sm permet de rendre la navbar mouvable jusqu'au petit écran  le collapseOnselect et le navbar.toogle permettent de changer la disposition pour les petits écrans*/}
        {/* p-2 p-md-0 permet d'afficher un gap de l'objet  pour les écran moyen et + */}
        
        <Container fluid>

          {/* pour changer le logos */}
          {/******************************************************************************/}
          <Navbar.Brand href="/" className= "styledBrand"><img src={logo} alt="My Gif" width="99%" height="99%" /></Navbar.Brand>
          {/******************************************************************************/}
          <Navbar.Toggle as={Button} className='styledToggle' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
            {/* c'est la bar de recherche */}
            {/******************************************************************************/}
            <Nav className="justify-content-center styledNav p-2 p-md-0">
              <div className="search-bar" >
                <InputGroup className="search-bar-input-group">
                  <InputGroup.Text>
                    <Search />
                  </InputGroup.Text>
                  <Typeahead
                    ref={typeaheadRef}
                    id="basic-typeahead-example"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigate(`/search/${e.target.value}`);
                        typeaheadRef.current.clear();  
                      }
                    }}
                    onChange={(selected) => {
                      setSearchInput(selected);
                      if (selected.length > 0) {
                        navigate(`/video/${selected[0].label}`);
                        setSearchInput([]);
                      }
                    }}
                    options={data.data}
                    placeholder=""
                    selected={searchInput}
                  />
                </InputGroup>
              </div>
            </Nav>
            {/******************************************************************************/}
             
            {/* ici on peut ajouter des onglets */}
            {/******************************************************************************/}
            <Nav className="justify-content-end styledNav">
              <Nav.Link href="/search" >
                <Display style={{ marginRight: '5px' }} className=" icon fs-2"/>
                Video
              </Nav.Link>
              <Nav.Link href="/" >
                <House style={{ marginRight: '5px' }} className="icon fs-2"/>
                Home
              </Nav.Link>
              <Nav.Link href="/login" >
                <BoxArrowInRight style={{ marginRight: '5px'}} className="icon fs-2"/>
                Connection
              </Nav.Link>
            </Nav>
            {/******************************************************************************/}
          </Navbar.Collapse>
        </Container>
    
    </Navbar>
              
    
  );
}

export default NavBar;





