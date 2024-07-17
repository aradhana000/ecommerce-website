// src/App.js
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import { FaShoppingCart } from 'react-icons/fa';
import { CartProvider, CartContext } from './Components/CartContext';

const App = () => {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    return (
        <CartProvider>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">eCommerce</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link onClick={handleShowCart}>
                                <CartIcon />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Container>
                <Cart show={showCart} handleClose={handleCloseCart} />
            </Router>
        </CartProvider>
    );
};

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <>
            <FaShoppingCart size={25} />
            {cartItemCount > 0 && <span>({cartItemCount})</span>}
        </>
    );
};

export default App;

