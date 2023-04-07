
import { useParams} from "react-router-dom";
function ItemDetail({ handleClick }) {

    const { id, userId, title} = useParams();
    const item = { id, userId, title };
    console.log(item)
  
    return (
      <div>
        <p>product id: {id}</p>
        <p>price: {title}</p>
        <p>vendor: {title}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    );
  }
  export default ItemDetail




// import React, { useState } from 'react';
// import CreatePurchase from '../components/createPuchase';

// function ProductDetail() {
//     const [isPurchasing, setIsPurchasing] = useState(null)
//     const product = {
//         name: 'New product',
//         price: 34
//     }
    
//     return (
//         <div className='container'>
//             <div className='header'>
//                 <h4>Product detail</h4>
//             </div>
//            <div className='detail'>
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <button onClick={() => setIsPurchasing(1)} className='purchase'>Purchase</button>
//            </div>
//            {!!isPurchasing && <CreatePurchase id={isPurchasing} />}
//         </div>
//     );
// }

// export default ProductDetail