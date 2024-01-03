


import React, { createContext, useContext, useState,useCallback } from 'react';
import axios from 'axios';

// Step 1: Create the authentication context
const AuthContext = createContext([]);
const ApiContext = createContext([]);
const SignUpContext= createContext([]);
const CartContext = createContext();

export const ContextApi = ({ children }) => {
  const [apiResponse, setApiResponse] = useState();
  // this use state for product
  const [productApiResponse,setProductApi] = useState();
  //     // this use state for cart
  //     const [cart, setCart] = useState([]);


  //      // Function to add an item to the cart
  // const addToCart = useCallback((item) => {
  //   setCart((prevCart) => [...prevCart, item]);
    
  // }, []);

  // // Function to get the number of items in the cart
  // const getCartCount = useCallback(() => cart.length, [cart]);
  // const count = localStorage.setItem('count',cart.length);
  // console.log("count",count)
  



  // Initialize the cart with data from local storage or an empty array
  const initialCart = localStorage.getItem('cart') || [];
  const initialCartCount = localStorage.getItem('cartCount') || 0;

  const [cart, setCart] = useState(initialCart);
  const [cartCount, setCartCount] = useState(parseInt(initialCartCount, 10));

  // Function to add an item to the cart
  const addToCart = useCallback((item) => {
    const data=setCart((prevCart) => [...prevCart, item]);
    // Update the cart data in local storage
    localStorage.setItem('cart', JSON.stringify(data));

    // Update the cart count and store it in local storage
    const updatedCartCount = cartCount + 1;
    setCartCount(updatedCartCount);
    localStorage.setItem('cartCount', updatedCartCount);
  }, []);

  // Function to get the number of items in the cart
  const getCartCount = useCallback(() => cartCount, [cartCount]);



// this api is for fetch ramdom data for home page

  const url = 'https://reqres.in/api/unknown';
  const baseURL = url;
  
  async function fetchDataHome() {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Handle the fetched data here
      const data = response.data;
      // console.log("data ===", data);
      let newData = data.data;
      // console.log("newData ===", newData);
      setApiResponse(newData);
  
      function fetchRandomObjects(newData, numObjects = 6) {
        const allObjects = Object.values(newData);
        const randomObjects = [];
  
        while (randomObjects.length < numObjects && allObjects.length > 0) {
          const randomIndex = Math.floor(Math.random() * allObjects.length);
          const randomObject = allObjects.splice(randomIndex, 1)[0];
          randomObjects.push(randomObject);
        }
  
        return randomObjects;
      }
  
      // Fetch six random objects
      const randomObjects = fetchRandomObjects(newData, 6);
  
      localStorage.setItem("dataApi", JSON.stringify(randomObjects));
     
  
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  
// the api ends here 
// the second product api starts here
const productUrl = "https://fakestoreapi.com/products";


const productApiFunction = async () => {
  try{
    const response =await axios.get(productUrl,{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("data ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('ProductData',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}


// api for mens product
const productMenApiFunction = async () => {
  try{
    const response =await axios.get("https://fakestoreapi.com/products/category/men's clothing",{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("men's ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('Mensdata',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}
// 

// api for women product
const productWomenApiFunction = async () => {
  try{
    const response =await axios.get("https://fakestoreapi.com/products/category/women's clothing",{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("women's ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('Womensdata',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}

// api for women product
const productJeweleryApiFunction = async () => {
  try{
    const response =await axios.get("https://fakestoreapi.com/products/category/jewelery",{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("Jewelery's ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('Jewelery',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}

// api for electronics
const productElectronicsApiFunction = async () => {
  try{
    const response =await axios.get("https://fakestoreapi.com/products/category/electronics",{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("electronics's ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('electronics',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}


// api to get all cards
const productCardsApiFunction = async () => {
  try{
    const response =await axios.get("https://fakestoreapi.com/carts",{
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Handle the fetched data here
    const data = response.data;
    console.log("carts's ===", data);
    setProductApi(data);

    // create an function to fetch the objects from api
    function fetchProductObject(data,numObjects=20){
      // here i am taking the values of object storing in varible and creating an empty array
      const allObjects = Object.values(data);
      const randomObjects = [];

      while (randomObjects.length < numObjects && allObjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * allObjects.length);
        const randomObject = allObjects.splice(randomIndex, 1)[0];
        randomObjects.push(randomObject);
      }

      return randomObjects;

    }
    // here fetchProductObject is a function which we have created above
     const randomObjectProduct = fetchProductObject(data,20)
    //  next we are storing the 3 random data in local storage
    localStorage.setItem('carts',JSON.stringify(randomObjectProduct));

  }catch(e){
    console.log('--error--',e);
  }
}


  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  
  // Function to log in the user
  const signup = async (userData) => {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // const response = await axios.get('https://reqres.in/api/register');
      // const personsData = response.data.data;
      // setApiResponse(personsData);
      // console.log("---data---",personsData)


      if (response.status === 200) {
        setIsSignUpSuccessful(true);
        return true;
      } else {
        setIsSignUpSuccessful(false);
        return false;
      }
    } catch (error) {
      console.error('API Error:', error);
      // setIsSignUpSuccessful(false);
      return false;
    }
  };



  const [isAuthenticated, setIsAuthenticated] = useState(false);




  // Function to log in the user
  const login = async (userData) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // const response = await axios.get('https://reqres.in/api/login');
      //   const personsData = response.data.data
      //   setApiResponse(personsData);
      //   console.log("---datalogin---",personsData)
      

      if (response.status === 200) {
        // Store the token in local storage
        localStorage.setItem('token', 'QpwL5tke4Pnpja7X4');
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      console.error('API Error:', error);
      setIsAuthenticated(false);
      return false;
    }
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cartCount')
    setIsAuthenticated(false);
  };




  // Provide the authentication status and login/logout functions in the context
  return (
        <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
          <SignUpContext.Provider value={{signup}}>
            <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
              <ApiContext.Provider value={{ apiResponse, fetchDataHome,productCardsApiFunction,productElectronicsApiFunction,productJeweleryApiFunction,productApiFunction,productApiResponse,productMenApiFunction,productWomenApiFunction }}>
                {children}
              </ApiContext.Provider>
            </AuthContext.Provider>
          </SignUpContext.Provider>
        </CartContext.Provider>
  );
};

// Create a custom hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a custom hook to access the API context
export const useApi = () => {
  return useContext(ApiContext);
};
// create a custom hook to access the signup context
export const useSignupApi = () => {
  return useContext(SignUpContext)
}

// create a custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}
