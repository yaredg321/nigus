import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react'

function App() {





  
  const [data,setdata]=useState([         
    {
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
    "id": 24,
    "quantity": 50,
    "pricePerPiece": 25,
    "purchasedOn": "2022-06-01T10:47:47.283Z"
  },
  {
    "id": 25,
    "quantity": 50,
    "pricePerPiece": 25,
    "purchasedOn": "2022-06-01T10:48:12.616Z"
  },
  
]) 

const postdata = (quantity,pricePerPiece) =>{
  setdata([...data,{quantity},{pricePerPiece} ])
}

const datefilter = (value)=>{
  setdata(data.filter(item=>(item.purchasedOn == value)
  
  ))
}
  
 

return (
  
  
    <div id='div'>
     
      
      <form id='fo' onClick={datefilter} method='post'>
      <label>date 1</label>
     <input type="date"  placeholder='date1' onChange={(e)=>{datefilter(e.target.value)}}/>
     <label>data 2</label>
     <input type="date"  placeholder='date2' onChange={(e)=>{datefilter(e.target.value)}}/>
     <input type="submit"  placeholder='filterd by date '/>
      </form>
     
     <label>stattPosition</label>
     <input type="text" placeholder=''/>
     <label>maxResult</label>
     <input type="text" placeholder=''/>


     <form id='form' method='post' onSubmit={postdata}>
    
     <h2>add  data</h2>
     <input type="text" name='quantity' placeholder='enter your qintity'/>
     
     
     <input type="text" name='pricePerPiece' placeholder='enter your pricePerPiece'/>
     <input type="submit"/>
    
     </form>

     
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

export default App;
