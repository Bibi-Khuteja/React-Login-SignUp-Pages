import React, { useEffect } from "react";
import { useApi } from "../Context/ContextAPi";
import { Card,Row,Col,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Mens() {
  // step1 call the api function
  const { productMenApiFunction } = useApi([]);
  // use the function by the hook
  useEffect(() => {
    productMenApiFunction();
  }, []);
  const token = localStorage.getItem("token");
  const productData = JSON.parse(localStorage.getItem("Mensdata"));
  console.log("---- random Mens product-------", productData);
  return (
    <>

      {token ? ( // Check if a valid token exists
        <div className="mainDiv">
          <h1 className="text-center py-4">ALL Men's PRODUCTS</h1>
          {/* ... (your existing code for displaying content) */}
          <Container>
            <Row className="cardRow">
              {productData?.map((item) => (
                <Col lg={4} md={6} sm={12} key={item.id}>
                  <Link to={`/productData/${item.id}`} className="text-dark" style={{textDecoration:"none"}}>

                    <Card className="productCards text-center shadow-lg p-3 mb-5  h-75 w-100 ">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="cards-img"
                      />
                      <Card.Body>
                        <Card.Title>Product_ID: {item.id}</Card.Title>
                        <Card.Title className="fontsize text-left">
                          Title: {item.title}
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
  );
}
export default Mens;
