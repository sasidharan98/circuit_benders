import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row ">
                    <div className="col" >
                            <Navbar className="p-3" bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Circuit Benders</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/login">Home</Nav.Link>
                                    <Nav.Link href="/">About Us</Nav.Link>
                                    <Nav.Link href="/update-profile">Profile</Nav.Link>
                                    <NavDropdown title="Product" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Raspberry pi</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Arduino</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">IOT Boards</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">ESP 8266</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Nodemcu</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />

                       
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar