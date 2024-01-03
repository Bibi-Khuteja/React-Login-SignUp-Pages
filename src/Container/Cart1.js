import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Container,Col,Row,Card,Button } from 'react-bootstrap';

import removeImg from '../images/icons8-remove-48.png'
import './Cart1.scss'

function Cart1  () {


// Get the array of IDs from localStorage
const ids = localStorage.getItem('productId');

const [filteredProductData, setFilteredProductData] = useState([]);



const url='https://fakestoreapi.com/products';

async function productsApi (){
    try{
        const res = await axios.get(url,{
            headers:{
                'Content-Type': 'application/json',
            }
        });
        const dataCard = res.data;
        console.log('===dataCart',dataCard);
        localStorage.setItem("cardData", JSON.stringify(dataCard));   
    }
    catch(e){

    }
    
    
}

useEffect(() => {
    productsApi();
      }, []);
    

useEffect(()=>{
            // Get the product data from localStorage
        const productData = JSON.parse(localStorage.getItem('cardData'));
        //Filter the product data to include only the products with matching IDs
         const filteredProductData = productData.filter(product => ids.includes(product.id));
         setFilteredProductData(filteredProductData);
},[ids]);

  const removeItem = (id) => {
    // Remove the item from filteredProductData
    const updatedData = filteredProductData.filter(item => item.id !== id);
    setFilteredProductData(updatedData);

    //  // Remove the ID from localStorage
    //  const updatedIds = ids.split(',').filter(itemId => itemId !== id).join(',');
    //  localStorage.setItem('productId', updatedIds);


      // 1. Retrieve the array of tasks from localStorage and parse it into JavaScript objects.
    const existingEntries = JSON.parse(localStorage.getItem("productId"));
    // 2. Use the splice method to remove the task at the specified index from the array.
    existingEntries.splice(id, 1);

     // 3. Update the "tasks" key in localStorage with the modified array (without the deleted task).
     localStorage.setItem("productId", JSON.stringify(existingEntries));
  
    
  };


console.log('Filtered Product Data:', filteredProductData);



  return (
    <>
    <h1 className="text-center mt-3 detail-head">Shopping Bag PRODUCTS </h1>
  
   
   <Container>
            <Row >
            {filteredProductData?.map((item) => (
              <>

                <Col
                lg={6}
                md={6}
                sm={12}
                key={item.id}
                className="my-5"
              >
                <Card className="productCards text-center shadow-lg p-3 mb-5  h-100 w-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: 250 }}
                    className="cards-img"
                  />
                </Card>
              </Col>

              <Col lg={6} md={6} sm={12} className="mt-5" >
                
                <h4 className="cradTitle text-info">
                  {" "}
                  {item.title}
                </h4>
                <h3 className="text-danger">
                  $ <span>{item.price}</span>
                </h3>
                {/* <button>-</button>0<button>+</button> */}
                <button className='removeBut'  onClick={() => removeItem(item.id)}>
                    <img src={removeImg}/>
                </button>
              </Col>
              </>
            ))}
            </Row>
          </Container>
   </>
  
  )
}
export default Cart1;
