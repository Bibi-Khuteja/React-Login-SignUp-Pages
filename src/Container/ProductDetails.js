import React, { useContext, useEffect } from "react";
import { useApi } from "../Context/ContextAPi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from '../Context/ContextAPi' // Import the useCart hook
import Button from "react-bootstrap/Button";

import "./ProductDetails.scss";

import { Card, Container, Row, Col } from "react-bootstrap";

const ProductDetails = () => {

    const { addToCart } = useCart(); // Use the useCart hook

    const { addToCartAndUpdateBadge } = useCart();

    // function to handle add to cart
    
  const handleAddToCart = (item) => {
    addToCartAndUpdateBadge(item);
  };


  // step 1 taking the function from contextApi
  const { productApiFunction } = useApi();
  // taking the product data from local storage which is already stored
  const productData = JSON.parse(localStorage.getItem("ProductData"));
  console.log("productdata===", productData);
  // take the id from useParam
  const { id } = useParams();

  console.log("id from useParams:", id);
 
 

  // filter the data based on id
  const filteredData = productData.filter((data) => data.id === parseInt(id));
  console.log("filtered data-->", filteredData);

  useEffect(() => {
    productApiFunction(id);
   
  }, [id]);

  function productId() {
    const existingProductIds = JSON.parse(localStorage.getItem("productId")) || [];
    // Push the new ID into the existing array
    existingProductIds.push(id);
    // Store the updated array in local storage
    localStorage.setItem("productId", JSON.stringify(existingProductIds));
  }
  


  // const token = localStorage.getItem("token");

  return (
    <>
      {/* {token ? ( */}
        <div>
          <h1 className="text-center mt-3 detail-head"> PRODUCTS DETAILS</h1>
          {/* ... (your existing code for displaying content) */}
          <Container>
            <Row>
              <Col
                lg={6}
                md={6}
                sm={12}
                key={filteredData[0]?.id}
                className="my-5"
              >
                <Card className="productCards text-center shadow-lg p-3 mb-5  h-100 w-100">
                  <Card.Img
                    variant="top"
                    src={filteredData[0]?.image}
                    style={{ height: 350 }}
                    className="cards-img"
                  />
                  {/* <Card.Body>
                           <Card.Title>Product_ID: {filteredData[0]?.id}</Card.Title>
                           <Card.Title className="fontsize">Product_Title: {filteredData[0]?.title}</Card.Title>
                           <Card.Text>$ {filteredData[0]?.price}</Card.Text>
                           <Card.Text>Description :{filteredData[0]?.description}</Card.Text>
                           <Card.Text>Category :{filteredData[0]?.category}</Card.Text>
                           <Card.Text>Rating :{filteredData[0]?.rating.rate}</Card.Text>
                           <Link to="/product">Go Back</Link>

                         </Card.Body> */}
                </Card>
              </Col>

              <Col lg={6} md={6} sm={12} className="mt-5">
                
                <h4 className="cradTitle text-info">
                  {" "}
                  {filteredData[0]?.title}
                </h4>
                <h3 className="text-danger">
                  $ <span>{filteredData[0]?.price}</span>
                </h3>
                <p className="desc">{filteredData[0]?.description}</p>

                <h4 className="text-info">
                  Category:
                  <span className="text-dark category">
                    {filteredData[0]?.category}
                  </span>
                </h4>

                <h5 className="text-warning ">Rating<span className="text-dark category mx-3">
                    {filteredData[0]?.rating.rate}
                  </span>
                  <span className="text-dark category mx-2">
                    {filteredData[0]?.rating.count}
                  </span></h5>
                
                
                
               

                <div className="text-center my-3">
                 
                    <div className="my-3">
                    <button type="button" className="btn btn-warning btn-lg btn-block addButton"
                     onClick={(item) => {
                        addToCart(item);
                          productId()// Call addToCart to add the item to the cart
                         
                      }}

                    
                    // onClick={() => handleAddToCart(filteredData[0])}
                    > Add to Card</button>
                    
                  
                    </div>
                    <div>
                    <button type="button" className="btn btn-info btn-lg btn-block addButton">Buy Now</button>
                   
                      
                   
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      {/* ) : (
        <div className="text-center">
          <p>You must log in to access the product detail page.</p>
          <Link to="/home">Login</Link>
        </div>
      )} */}
    </>
  );
};

export default ProductDetails;
