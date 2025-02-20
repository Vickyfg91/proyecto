import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, FormLabel, FormControl } from 'react-bootstrap';

function VentanaLogin({ mostrar, toggle, loguear }) {
    const [formData, setFormData] = useState({ user: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        if (formData.user === 'maria' && formData.password === '123456') {
            loguear(formData.user.toLowerCase(), formData.password);
            alert('You have logged in successfully');
        } else {
            alert('User or Password incorrect'); 
        }
    };

    return (
        <Modal show={mostrar} onHide={toggle}>
            <ModalHeader closeButton>
                <Modal.Title>Login</Modal.Title>
            </ModalHeader>
            <ModalBody>
                <FormGroup row>
                    <FormLabel sm={4}>User:</FormLabel>
                    <Col sm={8}>
                        <FormControl
                            onChange={handleChange}
                            id="user"
                            name="user"
                            type="text"
                            value={formData.user}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <FormLabel sm={4}>Password:</FormLabel>
                    <Col sm={8}>
                        <FormControl
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                        />
                    </Col>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="info" outline onClick={handleLogin}>
                    ACCESS
                </Button>
                <Button color="danger" outline onClick={toggle}>
                    CLOSE
                </Button>
            </ModalFooter>
        </Modal>
    );
}

function Header() {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    const toggleLogin = () => setMostrarLogin(!mostrarLogin);

    const loguear = (user, password) => {
        console.log('user:', user);
        console.log('Password:', password);
        
        toggleLogin(); 
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <div className="w-100 d-flex justify-content-center">
                        <Navbar.Brand href="#">React Proyect</Navbar.Brand>
                    </div>
                    <div>
                        <Button onClick={toggleLogin}>Login</Button>
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#cowhides">Cowhides</Nav.Link>
                                <Nav.Link href="#Pig lining">Cuero</Nav.Link>
                                <Nav.Link href="#LeatherRemnants">Leather remnants</Nav.Link>
                                <Nav.Link href="#Adhesives">Adhesives</Nav.Link>
                                <Nav.Link href="#LeatherStraps">Leather Straps</Nav.Link>
                                <Nav.Link href="#LeatherHandles">Leather Handles</Nav.Link>
                                <Nav.Link href="#Finishes">Finishes</Nav.Link>
                                <Nav.Link href="#Dyes">Dyes</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

            <VentanaLogin mostrar={mostrarLogin} toggle={toggleLogin} loguear={loguear} />
        </>
    );
}

export default Header;
