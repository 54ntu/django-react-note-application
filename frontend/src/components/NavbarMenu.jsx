import React from 'react'
import {Container, Nav, Navbar,NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarMenu = () => {

  return (
    <div>
            <Navbar className="bg-tertiary">
                <Container>
                    <Navbar.Brand href="/">NOTE</Navbar.Brand>
                    <Navbar.Brand href='/addNote'>AddNote</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
             </Navbar>

        
    </div>
  )
}

export default NavbarMenu