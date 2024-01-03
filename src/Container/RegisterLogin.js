// import React,{useState} from "react";
// import { Container, Row, Col, Form, InputGroup,Card,Button } from "react-bootstrap";
// import signupImg from "../images/sig.webp";
// import img from "../images/password-svgrepo-com.svg";
// import './RegisterSignup.scss'
// import { Link,useNavigate } from "react-router-dom";
// // first import thr package from useform hook
// import { useForm } from "react-hook-form";

// export const RegisterLogin = () => {
//     //2 extract the useForm hook objects 
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate = useNavigate(); // Initialize useNavigate
//     const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
//     const [apiError, setApiError] = useState(null); // Add state for API error

//     const onSubmit = async (data) => {
//         try {
//           const response = await fetch("https://reqres.in/api/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//           });
    
//           if (response.status === 200) {
//             // Store the token in local storage
//           localStorage.setItem('token', 'QpwL5tke4Pnpja7X4');
//             setIsSignUpSuccessful(true);
//             alert('Successfully signed up!!');
//             navigate('/home');
//           } else {
//             setApiError("Invalid email or password. Please try again.");
//           }
//         } catch (error) {
//           console.error("API Error:", error);
//           setApiError("An error occurred while signing up. Please try again later.");
//         }
//       }
    

//        // If signup is successful, navigate to the login page
  
  
//   return (
//     <div>
//       <div className="signupPage">
//         <Container>
//           <Row>
//             <Col lg={6} md={6} sm={12}>
//               <div className="my-4">
//                 <img
//                   src={signupImg}
//                   className="w-100"
//                   alt="Signup"
//                   style={{ height: 400 }}
//                 />
//               </div>
//             </Col>
//             <Col lg={6} md={6} sm={12}>
             
//               <div className="my-4">
//                 <Card className="mycard">
//                   <Card.Body>
//                     <Card.Title>
//                     <div className="text-center mb-2">
//                         <h1> Login</h1>
//                     </div>
//                     </Card.Title>
//                     <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Form.Group controlId="formGroupEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <InputGroup className="mb-3">
                       
//                       <InputGroup.Text>@</InputGroup.Text>
//                       <Form.Control
                      
//                         placeholder="email"
//                         aria-label="email"
//                         type="text"
//                         {...register("email", {
//                             required: "Email is required",
//                             pattern: {
//                                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                 message: "Invalid email format",
//                               },
//                           })}
//                     />
                      
//                     </InputGroup>
//                     {errors.email?.message && (
//     <small className="text-danger">{errors.email.message}</small>
//   )}

//                   </Form.Group>
//                   <Form.Group controlId="formGroupPassword">
//                     <Form.Label>Password</Form.Label>
//                     <InputGroup className="mb-3">
//                       <InputGroup.Text >
//                         <img src={img} style={{ height: 20 }} />
//                       </InputGroup.Text>
//                       <Form.Control
                        
//                         placeholder="password"
//                         aria-label="pass"
//                         type="password"
//                         {...register("password", { 
//                             required: 'password is required', 
//                             pattern:{
//                                 value:/^[a-z]{4,}$/,
//                                 message: "Invalid password format",
//                             },
//                         })}
//                       />
//                     </InputGroup>
//                     {errors.password?.message && (
//                  <small className="text-danger">{errors.password.message}</small>
//                  )}

//                   </Form.Group>
//                   {apiError && (
//                         <div className="text-danger">{apiError}</div>
//                       )}
                  
//                     <div className="text-center">
//                     <Button type="submit" variant="primary">
//                         Login
//                     </Button>
//                     </div>
//                 </Form>
//                    <div className="text-center my-3">
//                        <small className="text-muted">Don't have an account?</small>
//                         <Link to='/'>SignUp</Link>
//                     </div>
//                   </Card.Body>
//                 </Card>
               
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };







import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Card, Button } from "react-bootstrap";
import signupImg from "../images/sig.webp";
import img from "../images/password-svgrepo-com.svg";
import './RegisterSignup.scss';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from '../Context/ContextAPi'; // Import useAuth

export const RegisterLogin = () => {
  const { login } = useAuth(); // Get the login function from the context
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [apiError, setApiError] = useState(null);

  const onSubmit = async (data) => {
    const success = await login(data); // Use the login function

    if (success) {
      localStorage.setItem('userId',data.email)
      navigate('/product');
      
    } else {
      setApiError("Invalid email or password. Please try again.");
    }
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
                                <h1> Login</h1>
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
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                              <InputGroup.Text >
                                <img src={img} style={{ height: 20 }} />
                              </InputGroup.Text>
                              <Form.Control
                                
                                placeholder="password"
                                aria-label="pass"
                                type="password"
                                {...register("password", { 
                                    required: 'password is required', 
                                    pattern:{
                                        value:/^[a-z]{4,}$/,
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
                                Login
                            </Button>
                            </div>
                        </Form>
                           <div className="text-center my-3">
                               <small className="text-muted">Don't have an account?</small>
                                <Link to='/'>SignUp</Link>
                            </div>
                          </Card.Body>
                        </Card>
                       
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          );
};

