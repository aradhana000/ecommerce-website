// src/Pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import { FaPlay } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <header className='home-header bg-secondary text-white py-5  text-center'>
             
              
                <Container>
                    <h1 className="display-5">The Generics</h1>
                    <Button variant="outline-light" className="mt-3">Get our Latest Album</Button>
                    <div className="mt-3">
                        <Button variant="outline-light" size="lg" className="rounded-circle">
                            <FaPlay />
                        </Button>
                    </div>
                </Container>
                
                
            </header>
            <Container className='my-5'>
                <h2 className='text-center mb-4'>Tours</h2>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <span>JUL 16</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <Button variant="info">BUY TICKETS</Button>
                    </Col>
                    <Col xs={12} md={8} className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <span>JUL 19</span>
                        <span>TORONTO, ON</span>
                        <span>BUDWEISER STAGE</span>
                        <Button variant="info">BUY TICKETS</Button>
                    </Col>
                    <Col xs={12} md={8} className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <span>JUL 22</span>
                        <span>BRISTOW, VA</span>
                        <span>JIGGY LUBE LIVE</span>
                        <Button variant="info">BUY TICKETS</Button>
                    </Col>
                    <Col xs={12} md={8} className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <span>JUL 29</span>
                        <span>PHOENIX, AZ</span>
                        <span>AK-CHIN PAVILION</span>
                        <Button variant="info">BUY TICKETS</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
