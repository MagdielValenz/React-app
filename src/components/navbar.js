import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navegacion = () => {
  

  return (
    <Navbar className='color-nav' variant='light' expand="lg">
      <Container >
        <Navbar.Brand id='logo-1' href="#home">MARKETPLACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='tcolor' href="/home">Inicio</Nav.Link>
            <Nav.Link id='tcolor' href="">Ordenar</Nav.Link>
            <NavDropdown title="Mas info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Proximos Diseños</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Localizacion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Creditos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion;
