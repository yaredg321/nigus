const Cart = ({ cart, setCart, handleChange }) => {
    const handleRemove = (id) => {
      console.log("item")
      setCart(cart => cart.filter(item => item.id !== id));
    };
  
    const price = cart.reduce((id, item) => id + item.amount * item.userId, 0);
    // const price = cart.reduce((total, item) => total + item.amount * item.price, 0);
  
    return (
      <article>
        {cart.length > 0? cart.map((item) => (
          <div className="cart_box" key={item.id}>
            {console.log("item")}
            <div>
              <button onClick={() => handleChange(item.id, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item.id, -1)}>-</button>
            </div>
            <div>
              <span>{item.userId}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        )): "no Product yet :-add your Product"}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>R - {price}</span>
        </div>
      </article>
    );
  };
  export default Cart










  // const Cart = ({ cart, setCart, handleChange }) => {
  //   const handleRemove = (productCode) => {
  //     setCart(cart => cart.filter(item => item.productCode !== productCode));
  //   };
  
  //   const price = cart.reduce((total, item) => total + item.amount * item.price, 0);
  
  //   return (
  //     <article>
  //       {cart.map((item) => (
  //         <div className="cart_box" key={item.id}>
  //           <div>
  //             <button onClick={() => handleChange(item.productCode, 1)}>+</button>
  //             <button>{item.amount}</button>
  //             <button onClick={() => handleChange(item.productCode, -1)}>-</button>
  //           </div>
  //           <div>
  //             <span>{item.price}</span>
  //             <button onClick={() => handleRemove(item.productCode)}>Remove</button>
  //           </div>
  //         </div>
  //       ))}
  //       <div className="total">
  //         <span>Total Price of your Cart</span>
  //         <span>R - {price}</span>
  //       </div>
  //     </article>
  //   );
  // };
  // export default Cart