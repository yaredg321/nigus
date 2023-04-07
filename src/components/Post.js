import axios from "axios";

import React, { useState } from "react";

function Post(e){
    axios({
        method: "post",
        url:'192.168/...',
        // data:{
        //     quantity: e.target.quantity.value,
        //     pricePerPiece: e.target.pricePerPiece.value
        // }
    })

    const [data , setdata] = useState([])
    const postdata = (quantity,pricePerPiece) =>{
  setdata([...data,{quantity},{pricePerPiece} ])
}


  
  return (
  
  
    <div id='div'>
     
      
   


     <form id='form' method='post' onSubmit={postdata}>
    
     <h2>add  data</h2>
     <input type="text" name='quantity' placeholder='enter your qintity'/>
     
     
     <input type="text" name='pricePerPiece' placeholder='enter your pricePerPiece'/>
     <input type="submit"/>
    
     </form>

     

    </div>
  );
}

export default Post