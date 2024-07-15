// src/App.js
import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { FaShoppingCart } from 'react-icons/fa';
import { CartProvider, CartContext } from './Components/CartContext';

const App = () => {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    return (
        <CartProvider>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Nav className="mx-auto">
                      <Nav.Link href="#home">HOME</Nav.Link>
                       <Nav.Link href="#store">STORE</Nav.Link>
                      <Nav.Link href="#about">ABOUT</Nav.Link>
                        
                        <Nav.Link onClick={handleShowCart}>
                            <CartIcon />
                            
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <header className='sub-header bg-secondary text-white py-5'>
          <Container className='text-center'>
            <h1>THE GENERICS</h1>
          </Container>

         </header>
            <Container>
                <h1 className="my-4">Products</h1>
                <Product />
            </Container>
            <Cart show={showCart} handleClose={handleCloseCart} />
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