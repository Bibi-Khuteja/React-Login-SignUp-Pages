
import {  useEffect } from "react";
import React from "react";
import { useApi } from "../Context/ContextAPi";
import { Row,Col,Card, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import './SignUp.scss'



//export default ApiContext;

function HomePage() {
  const { apiResponse, fetchDataHome } = useApi();
 


  useEffect(() => {
   
    fetchDataHome(); // Shuffle the data on page load or refresh
  }, []);
  const token = localStorage.getItem('token');
  const dataApi = JSON.parse(localStorage.getItem("dataApi"));
  console.log("----home page-------", dataApi);

  return (

    <>
    {token ? ( // Check if a valid token exists
      <div>
        <h1 className="text-center my-5">Home Page</h1>
        <Container>
            <Row>
            {dataApi?.map((item) => (
  <Col lg={4} md={6} sm={12} key={item.id} >
    <Link to={`/dataApi/${item.id}`} className="text-dark">
      <Card
        style={{
          background: "linear-gradient(to bottom, #3494e6, #ec6ead)",
        }}
        className="text-center my-3 w-100"
      >
        <Card.Body>
          <Card.Title>User Details</Card.Title>
          <Card.Title>User Id: {item.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Name: {item.name}</Card.Subtitle>
          <Card.Text>Year: {item.year}</Card.Text>
          <Card.Text>Color: {item.color}</Card.Text>
          <Card.Text>Pantone_value: {item.pantone_value}</Card.Text>
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
        <p>You must log in to access the home page.</p>
        <Link to="/registerLogin">Login</Link>
      </div>

    )}
  </>
  );
}

export default HomePage;

