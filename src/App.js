import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './components/HeaderComponent'; 
import Footer from './components/FooterComponent'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import productos from './components/productos';

const App = () => {
    const [productos, setProductos] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {
        setCart([...cart, producto]);
    };

    useEffect(() => {
        fetch('https://icarosproject.com/2daw/pieles.json')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => console.error("Error al cargar los productos:", error));
    }, []); 

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    {productos.map((producto, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={producto.imagen_url} alt={producto.nombre} />
                                <Card.Body>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Text>{producto.descripcion}</Card.Text>
                                    <p><strong>Precio: </strong>${producto.precio}</p>
                                    <p><strong>Categoría: </strong>{producto.categoria}</p>
                                    <Button onClick={() => addToCart(producto)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
