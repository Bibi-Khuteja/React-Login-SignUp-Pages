
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Container/Home';
import { RegisterSignup } from './Container/RegisterSignup';
import {RegisterLogin} from './Container/RegisterLogin'
import { UserDetail } from './Container/UserDetail';
import Cart1 from './Container/Cart1'
import Product from './Container/Product';
import ProductDetails from './Container/ProductDetails';
import Mens from './Container/Mens';
import Women from './Container/Women';
import Jewelery from './Container/Jewelery';
import Electronics from './Container/Electronics';

import CircularProgressBar from './Container/CircularProgressBar';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <RegisterSignup/>}/> 
        <Route path='/registerLogin' element={ <RegisterLogin/>}/>
        <Route path='/home' element={ <Home/>}/> 
        <Route path='/dataApi/:id' element={< UserDetail/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productData/:id' element={<ProductDetails/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/cart' element={<Cart1/>}/>
        <Route path='/men' element={<Mens/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/jewelery' element={<Jewelery/>}/>
        <Route path='/electronic' element={<Electronics/>}/>


        
      </Routes>
      </BrowserRouter>

      <CircularProgressBar/>
     
      <Footer/>
    </div>
  );
}

export default App;
