import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product';
import { Container, Navbar, Nav } from 'react-bootstrap';



let App = () => {
  return (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            
          </Nav>
        
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
          
         
    </>
  );
}

export default App;
