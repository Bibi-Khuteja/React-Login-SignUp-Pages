import React, { useEffect } from 'react'
import { useApi } from '../Context/ContextAPi'
import { useParams ,Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const UserDetail = () => {
    const {apiResponse,fetchDataHome} = useApi();
    const dataApi = JSON.parse(localStorage.getItem("dataApi"));

    const {id} = useParams();

    const filteredData = dataApi.filter(data => data.id === parseInt(id));
    console.log("---user data---",filteredData);

    useEffect(()=>{
        fetchDataHome(id);
    },[id])

    const token = localStorage.getItem('token');

  return (
    <>
        {token?(
                    <div className="container my-5 ">
    <Card 
    style={{
        background: "linear-gradient(to bottom, #3494e6, #ec6ead)",
       }}
    className="text-center">
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Card.Title>User Id: {filteredData[0]?.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name: {filteredData[0]?.name}</Card.Subtitle>
        <Card.Text> Name: {filteredData[0]?.username}</Card.Text>
        <Card.Text>Year: {filteredData[0]?.year}</Card.Text>
        <Card.Text>Color: {filteredData[0]?.color}</Card.Text>
        <Card.Text>Color: {filteredData[0]?.pantone_value}</Card.Text>
        <Link to="/home">Go Back</Link>
      </Card.Body>
    </Card>
  </div>
        ):(
            <div className="text-center">
        <p>You must log in to access the home page.</p>
        <Link to="/home">Login</Link>
      </div>
        )}
    </>

  )
}
