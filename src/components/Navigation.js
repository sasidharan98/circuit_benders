import React, {useState} from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
import ConvoBot from './ConvoBot';
import { AuthProvider } from "../contexts/AuthContext"
import { useAuth } from "../contexts/AuthContext"
import i18n from '../i18n';
import {  useTranslation } from 'react-i18next'
function Navigation() {
    const [value, setValue] = useState({value:"jap"})
    const { logout } = useAuth()
    const {t, i18n} = useTranslation();
    const  {currentUser}  = useAuth()
    const signout = ()=> {
        logout()
        currentUser = null
    }
    console.log(currentUser)
    const handleChange = (event) => {
        console.log("selected val is ", event.target);
        console.log("selected val is ", event.target.href);
        console.log("selected val is ", event.target.name);
        let newlang = event.target.name;
        setValue(() => ({ value: newlang }));
        console.log("state value is", newlang);
        i18n.changeLanguage(newlang);
      };
    return (
        <div>
            <div className="row">
                    <div className="col" >

                            <Navbar  bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Circuit Benders</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/login" onClick={signout}>{currentUser ? t('Logout') : t('Home')}</Nav.Link>
                                    <Nav.Link href="/" style = {{pointerEvents: currentUser ? 'auto' : 'none'}}>{t('About Us')}</Nav.Link>
                                    <Nav.Link href="/update-profile" style = {{pointerEvents: currentUser ? 'auto' : 'none'}}>{t('Profile')}</Nav.Link>
                                    <Nav.Link href="/product" style = {{pointerEvents: currentUser ? 'auto' : 'none'}}>{t('Donate')}</Nav.Link>
                                    {/* <Nav.Link href="/translate">{t('Translate')}</Nav.Link> */}
                                    <NavDropdown title={t('Language')} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleChange} href = '/' name="en">{t('English')}</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleChange}  href = '/' name="jap">{t('Japanese')}</NavDropdown.Item>
                                        {/* <NavDropdown.Item href="#action/3.3">IOT Boards</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">ESP 8266</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Nodemcu</NavDropdown.Item> */}
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

export default Navigation

