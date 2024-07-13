import React from "react"
import {  Card , Row, Col, Container, Button } from "react-bootstrap";

const Product = () => {
  const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

    
      return (
        
      <Container className="mt-3">
        <h2 className="text-center mb-4">Music</h2>
        <Row>
          {productsArr.map((product, index) => (
            <Col sm={12} md={6} lg={4} className="mb-2" key={index}>
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Price: ${product.price}
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
      
  );
  

};
export default Product;