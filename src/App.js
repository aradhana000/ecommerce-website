import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';




const App = () => {

  const [showCart, setShowCart] = useState(false);

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);
  return (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            
          </Nav>
          <Button variant ="outline-light" onClick={handleCartOpen}>
            <FaShoppingCart />
          </Button>
        
         </Container>

    </Navbar>
    <header className='sub-header bg-secondary text-white py-5'>
          <Container className='text-center'>
            <h1>THE GENERICS</h1>
          </Container>

         </header>
         <Container>
          <Product />
         </Container>
         <Cart show={showCart} handleClose={handleCartClose} />
          
         
    </>
  );
}

export default App;
