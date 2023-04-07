import React, { useState } from "react";

function GetAll(){

    const [data , setdata] = useState([ {
        "id": 22,
        "quantity": 50,
        "pricePerPiece": 25,
        "purchasedOn": "2022-06-01T10:44:50.186Z"
      },
      {
        "id": 23,
        "quantity": 50,
        "pricePerPiece": 25,
        "purchasedOn": "2022-06-01T10:47:02.185Z"
      },
    
      {
        "id": 44,
        "quantity": 0,
        "pricePerPiece": 0,
        "purchasedOn": "2022-07-11T07:26:12.754070Z"
      }])
    const postdata = (quantity,pricePerPiece) =>{
  setdata([...data,{quantity},{pricePerPiece} ])
}

const datefilter = (value)=>{
  setdata(data.filter(item=>(item.purchasedOn == value)
  
  ))
}
  
  return (
  
  
    <div id='div'>
     
   <h1 >all products</h1>

     
     {data.map(ma=>(
         <div key={ma.id}>
       
         <h1>id :{ma.id}</h1>

         <h3>{ma.purchasedOn}</h3>
       </div>
      

      )
      
       
      
     )}
     

    </div>
  );
}

export default GetAll