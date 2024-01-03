import React, { useEffect } from "react";
import { useApi } from "../Context/ContextAPi";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Product.scss'

const Product = () => {
  // calling the usecontext hook
  const { productApiFunction, productApiResponse } = useApi([]);

  useEffect(() => {
    productApiFunction();
  }, []);
 
  const productData = JSON.parse(localStorage.getItem("ProductData"));
  console.log("---- random product-------", productData);

  return (
    <>
                     <h3 className="text-center cate my-3">Shop By Category</h3>
                    <div className='text-center my-4 '>
                    
                        <Link to='/men' className="mx-2 colorLink" style={{textDecoration:"none"}}>Men's Clothing</Link>
                        <Link to='/women '  className="mx-2 colorLink" style={{textDecoration:"none"}}>Women's Clothing</Link>
                        <Link to='/jewelery' className="mx-2 colorLink" style={{textDecoration:"none"}}>Jewelery</Link>
                        <Link to='/electronic'  className="mx-2 colorLink" style={{textDecoration:"none"}}>Electronics</Link>


                        </div>
       
     

             <div className="mainDiv">
            
          <h1 className="text-center py-4">ALL PRODUCTS</h1>
          {/* ... (your existing code for displaying content) */}
          <Container>
            <Row className="cardRow">
              {productData?.map((item) => (
                <Col lg={4} md={6} sm={12} key={item.id}>
                  <Link to={`/productData/${item.id}`} className="text-dark" style={{textDecoration:"none"}}>
                    {/* <Card
        style={{
          background: "linear-gradient(to bottom, #3494e6, #ec6ead)",
        }}
        className="text-center my-3 w-100"
      >
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Title>Product Id: {item.id}</Card.Title>
          
          <Card.Title>Title: {item.title}</Card.Title>
         
        </Card.Body>
      </Card> */}
                    <Card className="productCards text-center shadow-lg p-3 mb-5  h-75 w-100 ">
                      <Card.Img variant="top" src={item.image} className="cards-img"/>
                      <Card.Body>
                        <Card.Title>Product_ID: {item.id}</Card.Title>
                        <Card.Title className="fontsize text-left">Title: {item.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
     
    </>
  );
};

export default Product;
