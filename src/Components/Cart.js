// src/Cart.js
import React, { useContext } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Cart = ({ show, handleClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item, index) => (
                            <Row key={index} className="mb-3">
                                <Col md={3}>
                                    <Image src={item.imageUrl} thumbnail />
                                </Col>
                                <Col md={6}>
                                    <h5>{item.title}</h5>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </Col>
                                <Col md={3}>
                                    <Button variant="danger" onClick={() => removeFromCart(item)}>
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    )}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;


