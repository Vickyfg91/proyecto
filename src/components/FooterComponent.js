import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>
                            Addres<br />
                            Andalucía<br />
                            <i className="fa fa-phone"></i> +123456789<br />
                            <i className="fa fa-envelope"></i> <a href="mailto:info@empresa.com" className="text-white">info@empresa.com</a>
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Follow us</h5>
                        <a className="btn btn-outline-light me-2"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-outline-light"><i className="fa fa-facebook"></i></a>
                    </Col>
                </Row>
                <div className="text-center mt-3">
                    <p>&copy; 2025 React Proyect <br/>All rights reserved</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
