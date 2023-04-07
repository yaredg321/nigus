import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";

const cardStyle = {
  backgroundColor:"#ccc",
  margin:"20px",
  textAlign:"center"
  // listStyle: "none",
  // margin: "10px",
  // paddingLeft: 0,
  // minWidth: 240,
};

const Discover = () => {
  // const token = "not-the-actual-token";
  const [result, setResult] = useState([]);

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
       setResult(res.data)
      }).catch(err=>{
        console.log(err)
      })
  }, []);

  return (
    <div className="latestdeals container my-5">
      <h1>All Products</h1>
          {result.length > 0 ? result.map((item) => (
            <div key={item.id} style={cardStyle}>
              <Link to={`/itemDetail/${item.id}/${item.userId}/${item.title}`}>
                
                  {item.userId}<br/>
                   {item.title}<br/>
                   {item.body}
              </Link>
            </div>
          )): "no proudact yet"}
    </div>
  );
};
export default Discover