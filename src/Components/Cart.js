import React, {useState} from "react";

import { ListGroup, Modal, Row, Col, Image, Button } from "react-bootstrap";



const Cart = ({show, handleClose}) => {
  const [cartItems, setCartItems] = useState([

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

},

]);

// fun to remove items from cart

const removeItem = (index) => {
  const newCartItems = cartItems.filter((_, i) => i!== index);
  setCartItems(newCartItems);
};

return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {cartItems.length>0 ? (
        <ListGroup>
          {cartItems.map((item,index) => (
            <ListGroup.Item key = {index}>
              <Row>
                <Col xs={4}>
                <Image src={item.imageUrl} thumbnail />
                </Col>
                <Col xs={6}>
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                </Col>
                <Col xs={6} className = "text-right">
                <Button variant="danger" onClick={() => removeItem(index)}>Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Your Cart is empty</p>
      )
      }
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

};
export default Cart;

