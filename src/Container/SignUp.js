import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sigupImg from "../images/sig.webp";
import { TextField, Button } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import PasswordIcon from "@mui/icons-material/Password";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }


    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Password must be at least 4 characters long.";
    }

    if (Object.keys(newErrors).length === 0) {
      // // Form is valid, you can submit the data or perform other actions here.
      // alert("Form submitted successfully!");

      // navigate('/login')


      try {
        const response = await axios.post("https://reqres.in/api/register", {
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200) {
          alert("Signup successful!");
          navigate("/login");
        } else {
          
          setErrors(newErrors);
        }
      } catch (error) {
        console.error("Error:", error);
        newErrors.mail = "Invalid email or password";
        setErrors(newErrors);
      }
      
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // A simple email validation regex pattern
    const pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
  };

  const isValidPassword = (password) => {
    // Password must be at least 8 characters long and contain a number, a special character, and a capital letter
    const pattern = /^[a-z]{4,}$/;
    return pattern.test(password);
  };

  return (
    <div className="signupPage">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="d-flex my-4">
            <img src={sigupImg} className="w-100" alt="Signup" style={{height:400}} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form>
              <h2 className="text-center my-4">SignUp</h2>

              <Form.Group controlId="formBasicEmail" className="text-center">
                <AlternateEmailIcon className="m-3" />
                <TextField
                  id="email"
                  label="Enter email"
                  variant="standard"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="text-danger mr-3 text-center ">{errors.email}</div>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className=" text-center ">
                <PasswordIcon className="m-3" />
                <TextField
                  id="password"
                  label="Enter password"
                  variant="standard"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <div className="text-danger passError">{errors.password}</div>
              </Form.Group>
              <div className="text-danger errorText text-center">{errors.mail}</div>

             
                <div className="text-center my-3">
                  <Button variant="contained" onClick={handleSubmit}>
                    SignUp
                  </Button>
                </div>
                <div className="text-center  my-3">
                  <Link to="/login" >
                    Login
                  </Link>
                  <Form.Text className="text-muted">Already have an account?</Form.Text>
                </div>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



