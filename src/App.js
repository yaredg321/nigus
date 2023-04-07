
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [startDate,setStartDate]= useState(new Date());
  const [endDate,setEndDate]= useState(new Date());

  useEffect(()=>{
    axios.get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
    .then((response)=>{
      setProducts(response.data);
      setAllProducts(response.data);
    })

  },[])

  const handleSelect = (date) =>{
    let filtered = allProducts.filter((product)=>{
      let productDate = new Date(product["createdAt"]);
      return(productDate>= date.selection.startDate &&
        productDate<= date.selection.endDate)
    })
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  console.log(startDate,endDate)
  return (
    <div  className="App">

      {/* <header className="App-header"> */}
  
        <div className='date'>
      < DateRangePicker
      
        ranges={[selectionRange]}
       
        onChange={handleSelect}/>

        </div>
      {/* <hr></hr> */}

     <div className='list'>
          <table>
            <thead>
              <tr className='tr'>
                <th >ID</th>
                <th>Product</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {products.length>0 ? products.map((product)=>{
              let date = new Date(product["createdAt"]);
              
            
              return(
                <div>
               { 
              //  products.length > 0?
   
              ( <tr className='item'  key={product["id"]}>
                  <td >{product["id"]}</td>
                  <td>{product["name"]}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>)
                // : "console.lo"
                }

                </div>
              );
            }):(
              <div style={{textAlign:"center",fontSize:"20px",color:"red" }}>
         
               <p> no product yet this time</p> 
                  select other time
              </div>
              )}

              
            </tbody>
          </table>
     </div>
      {/* </header> */}
    </div>
  );
}

export default App;













// import Discover from "./pages/itemDetail";
// import Cart from "./pages/cart";
// import ItemDetail from "./pages/productDetail";

// import { useState,useEffect } from "react";
// import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';

// function App() {
  
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);


//   const handleClick = (item) => {
//     console.log("jhhhhhhhhhhh")
//     // Update cart item quantity if already in cart
//     console.log("items",item)
//     if (cart.some((cartItem) => cartItem.id === item.id)) {
//       setCart((cart) =>
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? {
//                 ...cartItem,
//                 amount: cartItem.amount + 1
//               }
//             : cartItem
//         )
//       );
//       return;
//     }

//     // Add to cart
//     setCart((cart) => [
//       ...cart,
//       { ...item, amount: 1 } // <-- initial amount 1
//     ]);
//   };

//   const handleChange = (id, d) => {

//     setCart((cart) =>
//       cart.flatMap((cartItem) =>
//         cartItem.id === id
//           ? cartItem.amount + d < 1
//             ? [] // <-- remove item if amount will be less than 1
//             : [
//                 {
//                   ...cartItem,
//                   amount: cartItem.amount + d
//                 }
//               ]
//           : [cartItem]
//       )
//     );
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Discover />} />
//       <Route
//         path="/itemDetail/:id/:userId/:title"
//         element={<ItemDetail handleClick={handleClick} />}
//       />
//       <Route
//         path="/Cart/"
//         element={(
//           <Cart
//             cart={cart}
//             setCart={setCart}
//             handleChange={handleChange}
//           />
//         )}
//       />
//       </Routes>
//     </BrowserRouter>
      
//   );
// }


// export default App










// import logo from './logo.svg';
// import './App.css';

// import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';
// import Products from './pages/products';
// import ProductDetail from './pages/productDetail';
// /* 
// * react project made for nigus sporting plc
// * used libraries/technologies -> React.js, Redux
// */ 


// ///flat list le react nativi map le react 

// function App() {
//   return (
    
//       <BrowserRouter>
//       <Routes>
         
//           <Route path='/' element={<Products />} />
//           <Route path='/detail/:id' element={<ProductDetail />} />
//         </Routes>
     
//       </BrowserRouter>
    
//   );
// }

// export default App;







// import CreatePurchase from './components/createPuchase'
// import {useState} from 'react'

// function App(){
//   const [stor, setstor] = useState(null)

//   return(
//     <div>
//       <button onClick={()=>setstor(1)}>click me</button>
//       {!!stor && <CreatePurchase id={stor}/> }{/*??*/}
//       {/* {!!stor ? <CreatePurchase id={stor}/>:"" }?? */}
//     </div>
//   )
// }



// export default App














// import React from "react";
// import './App.css'

// export default function(){
//   const datas = [
//     {
//       name:'New product',
//       price: '$300'
//      },
     
    
//      {
//       name:'New product',
//       price: '$300'
//      },
//      {
//       name:'New product',
//       price: '$300'
//      },
//      {
//       name:'New product',
//       price: '$300'
//      }
//   ]
//   return(
//     <div className="all">

//     <div className="conteiner">
//       <div className="products">
//         <h3>products</h3>
//       </div>
//       <div style={{display:"flex"}} className="date">
//         <p>state data</p>
//         <input type='Date'></input>
//         <p>end data</p>
//         <input type='Date'></input>
//       </div>
//       <div className="inputData">
//         {datas.map(data=>(
//           <div  className="inputs" key={data.price}>
//             <h4>{data.name}</h4>
//             <p >{data.price}</p>
//            <button >purchase</button>
//           </div>
//         ))}
       

//       </div>
     

//     </div>
//     </div>
    
//   )

// }

