import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import constants from '../constants';
import CreatePurchase from '../components/createPuchase';
//import actions from '../store/actions';

function Products({history}) {
   // const dispatch = useDispatch()
  //  const _products = useSelector(state => state.products)
    const [isPurchasing, setIsPurchasing] = useState(null)
    const fetchProducts = () => {
        axios({
            url: constants.baseUrl + constants.path.getProducts,
            method: 'get'
        }).then(
          //  d => dispatch({type: actions.ADD_PRODUCTS, payload: d.data})
            )
    }

    useEffect(fetchProducts, [])

    const products = [
        {
            name: 'New product',
            price: 300
        },
        {
            name: 'New product 2',
            price: 400
        },
        {
            name: 'New product 3' ,
            price: 450
        }
    ]
    return (
        <div className='container'>
            <div className='header'>
                <h4>Producs</h4>
            </div>
            <div style={{display: 'flex', marginTop: 15}}>
                <p style={{marginRight: 5}}>Start date</p>
                <input style={{marginRight: 5}} type={'date'}></input>

                <p style={{marginRight: 5}}>end date</p>
                <input type={'date'}></input>

            </div>
            <div className='products-container'>
                {products.map((product, k) => (
                    <div to={'/detail/' + (k+1)} key={k}  className='product' >
                         <Link to={'/detail/dede'} className='info'>{/*filter data yetu gar new*/}
                         {console.log("K value",k)}
                            <h5>{product.name}</h5>
                            <p>${product.price}</p>
                        </Link>
                        <button onClick={() => setIsPurchasing(k.toString())} className='purchase'>Purchase</button>
                        {/* <button onClick={() => setIsPurchasing(product.id)} className='purchase'>Purchase</button> */}
                        {/* use history metekem yichalal router lemekeyer */}
                    </div>
                ))}
            </div>
            {!!isPurchasing && <CreatePurchase id={isPurchasing} />}{/*??*/}
        </div>
    );
}


export default Products;