
import React,{useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, NavLink } from 'react-bootstrap';
import profile from '../images/profile.png';
import logo from '../images/logo.png';
import basket from '../images/basket.png'
import { useAuth } from '../Context/ContextAPi'; // Import useAuth
import { useApi } from '../Context/ContextAPi'; // Import useApi
import { useCart } from '../Context/ContextAPi';//import the useCart 
import './Header.scss'
import { Link } from 'react-router-dom';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth(); // Get authentication status and logout function from the context
  const { fetchDataHome } = useApi(); // Get the fetchDataHome function from the context
  // const { badgeCount } = useCart();
  const { getCartCount } = useCart(); // Use the useCart hook
  
 

  const token = localStorage.getItem('token');
  const productData = JSON.parse(localStorage.getItem("productId") || "[]");
  const len = productData.length;
  

  // Function to handle the logout click
  const handleLogoutClick = () => {
    logout();
    window.location.href = "/product";
     
    // Call the logout function from the context
    // Additional logic, e.g., redirect to a login page, if needed
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand  className='mr-0'>
                 <img
                   src={logo}
                   width="40"
                   height="40"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                 />
               </Navbar.Brand>
        <Navbar.Brand href="/product" className='mx-2'>Online Shopping Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
            <Nav.Link href='/product' className='mx-2'>Products</Nav.Link>

            {/* Conditionally render SignUp and Login buttons */}
            {(token) ? (
               <>
               
              <NavLink href='/cart'>
                    <img
                        src={basket}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mx-2"
                        alt="React Bootstrap logo"
                      />
                      {/* {getCartCount() > 0 && ( */}
                    <span className="badge badge-pill badge-danger badge-above">{len}</span>
                  {/* )} */}
              </NavLink>
                
                
                  
                 {/* {badgeCount > 0 && (
                    <span className="badge badge-pill badge-danger badge-above">
                      {badgeCount}
                    </span>
                  )} */}
              
               <Navbar.Brand  className='mr-0'>
                 <img
                   src={profile}
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                 />
               </Navbar.Brand>
               <NavDropdown title="" id="basic-nav-dropdown">
                 <NavDropdown.Item onClick={fetchDataHome}>Profile</NavDropdown.Item>
                 <NavDropdown.Item onClick={handleLogoutClick}>Logout</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
             </>
             
            )
            :
           
              (
                <>
                <Button href='/' className='mx-2' variant="light">SignUp</Button>
                <Button href='/registerLogin' className='mx-2' variant="light">Login</Button>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
