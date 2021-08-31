import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
import ConvoBot from './ConvoBot';


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col" >
                            <Navbar  bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Circuit Benders</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/login">Home</Nav.Link>
                                    <Nav.Link href="/">About Us</Nav.Link>
                                    <Nav.Link href="/update-profile">Profile</Nav.Link>
                                    <NavDropdown title="Product" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/product">Raspberry pi</NavDropdown.Item>
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
                <div style={{ display: 'flex', zIndex: 1, justifyContent: 'center',position: 'fixed', bottom: '30px', right: '30px' }}>
                <ConvoBot/>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar