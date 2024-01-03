import React, { useEffect } from 'react'
import { useApi } from '../Context/ContextAPi'
import { Container, Row,Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.scss'

export const Cart = () => {
    const {productCardsApiFunction} = useApi([]);
    useEffect(()=>{
        productCardsApiFunction();
    },[])
    const token = localStorage.getItem("token");
    const productData = JSON.parse(localStorage.getItem("carts"));
    console.log("---- random carts product-------", productData);
  return (
    <>

    {token ? ( // Check if a valid token exists
      <div className="main">
        <h1 className="text-center py-4">ALL Card's</h1>
        {/* ... (your existing code for displaying content) */}
        <Container>
          <Row className="cardRow">
            {productData?.map((item) => (
              <Col lg={4} md={6} sm={12} key={item.id}>
                <Link to={`/productData/${item.id}`} className="text-dark" style={{textDecoration:"none"}}>

                  <Card className="productCards text-center shadow-lg p-3 mb-5  h-75 w-100 ">
                    <Card.Body>
                      <Card.Title className="fontsize text-left">
                        Date:{item.date}
                      </Card.Title>
                      <Card.Title className="fontsize text-left">
                        Products:
                        
                        <p>Product_Id:{item.products[0].productId}</p>
                        <p>Product_Quantity:{item.products[0].quantity}</p>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    ) : (
      <div className="text-center">
        <p>You must log in to access the Product page.</p>
        <Link to="/registerLogin">Login</Link>
      </div>
    )}
  </>
  )
}
