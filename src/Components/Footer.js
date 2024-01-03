import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <Container >
        <Row >
          <Col lg={4} md={6} sm={12} className='my-4 '>
           <div className='text-center'>
           <h5>Contact Us</h5>
            <p>Email: khuteja@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
           </div>
          </Col>
          <Col lg={4} md={6} sm={12} className='my-4'>
          <div className='text-center'>
          <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
           </div>
            
          </Col>
          <Col lg={4} md={6} sm={12} className='my-4'>
          <div className='text-center'>
          <h5>Services</h5>
            <p>Business</p>
            <p>Project related</p>
           </div>
           
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">&copy; 2023 Your Website Name</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
