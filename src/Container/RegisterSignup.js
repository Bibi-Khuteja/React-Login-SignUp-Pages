import React, { useState,useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Card, Button,Dropdown,DropdownButton } from "react-bootstrap";
import signupImg from "../images/sig.webp";
import img from "../images/password-svgrepo-com.svg";
import './RegisterSignup.scss'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useSignupApi} from '../Context/ContextAPi';
import { CircularProgressbar } from 'react-circular-progressbar';
import DataDemo from "./dummydata.json"

export const RegisterSignup = () => {

  // progress
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const maxDataValue = 1000; // Assuming your maximum value is 100,000
    const normalizedValue = (DataDemo.data / maxDataValue) * 100; // Normalize the value to a percentage
  
    const timer = setTimeout(() => {
      if (percentage < normalizedValue) {
        setPercentage(percentage + 1);
      }
    }, 4);
  
    return () => clearTimeout(timer);
  }, [percentage, DataDemo.data]);
  
  // end
    
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const {signup} = useSignupApi(); //get the fetchData function from the context

//   const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [apiError, setApiError] = useState(null); // Add state for API error

  const onSubmit = async (data) => {
    const success = await signup(data);

    if(success){
        navigate('/registerLogin')
    } else {
        setApiError("Invalid email or password. Please try again.");
      }
    // try {
    //   const response = await fetch("https://reqres.in/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.status === 200) {
    //     setIsSignUpSuccessful(true);
    //     alert('Successfully signed up!!');
    //     navigate('/registerLogin');
    //   } else {
    //     setApiError("Invalid email or password. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("API Error:", error);
    //   setApiError("An error occurred while signing up. Please try again later.");
    // }
  }

  return (
    <div>
      <div className="signupPage">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="my-4">
                <img
                  src={signupImg}
                  className="w-100"
                  alt="Signup"
                  style={{ height: 400 }}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="my-4">
                <Card className="mycard">
                  <Card.Body>
                    <Card.Title>
                      <div className="text-center mb-2">
                        <h1> Register</h1>
                      </div>
                    </Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>@</InputGroup.Text>
                          <Form.Control
                            placeholder="email"
                            aria-label="email"
                            type="text"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                              },
                            })}
                          />
                        </InputGroup>
                        {errors.email?.message && (
                          <small className="text-danger">{errors.email.message}</small>
                        )}
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <img src={img} style={{ height: 20 }} />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="password"
                            aria-label="pass"
                            type="password"
                            {...register("password", { 
                              required: 'Password is required', 
                              pattern: {
                                value: /^[a-z]{4,}$/,
                                message: "Invalid password format",
                              },
                            })}
                          />
                        </InputGroup>
                        {errors.password?.message && (
                          <small className="text-danger">{errors.password.message}</small>
                        )}
                      </Form.Group>
                      {apiError && (
                        <div className="text-danger">{apiError}</div>
                      )}
                      <div className="text-center">
                        <Button type="submit" variant="primary">
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="text-center my-3">
                      <small className="text-muted">Already have an account?</small>
                      <Link to='/registerLogin'>Login</Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        
       


     
      <Row>
        <Col lg={4}>
        </Col>
        <Col lg={3}>
        <div className="d-flex">
          <p>Radius</p>
        <input className="form-control input-Km" style={{width:"73px"}} placeholder="25km">
        </input>
        <DropdownButton style={{width:"34px"}}
        variant="outline-light"
        className="dropdownbutton"       
    >
        </DropdownButton>
      </div>
        </Col>
        <Col lg={2}>
       
        <div className="d-flex">
        <p>Age</p>
        <input className="form-control input-Km" style={{width:"73px"}} placeholder="25km">
        </input>
        <DropdownButton style={{width:"34px"}}
        variant="outline-light"
        className="dropdownbutton"
       
    >
        </DropdownButton>
      </div>
        </Col>
        <Col lg={3}>
        
        <div className="d-flex">
        <p>Gener</p>
        <input className="form-control input-Km" style={{width:"73px"}} placeholder="25km">
        </input>
        <DropdownButton style={{width:"34px"}}
        variant="outline-light"
        className="dropdownbutton"
       
    >
        </DropdownButton>
      </div>
        </Col>
      </Row>

      
      {/* <div style={{textAlign:"center"}}>
      <h4>Circular progress bar in React </h4>
      <div style={{ width: 150, marginLeft: 0}}>
        <CircularProgressbar value={percentage} text={`${DataDemo.data}%`} className="text-center"
                   styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      // Path color
                      stroke: `rgba(62, 152, 199, ${DataDemo.data / 40})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.1s ease 0s',
                      // Rotate the path
                      // transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: '#ffff',
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Rotate the trail
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: 'rgb(14 13 13)',
                      // Text size
                      fontSize: '16px',
                      
                      
                    
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: '#3e98c7',
                    },
        }}
        />
      </div>
    </div> */}





     
    
        </Container>
      </div>
    </div>
  );
};
