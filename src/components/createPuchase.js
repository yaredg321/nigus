import axios from 'axios';
import React from 'react';
import constants from '../constants';

function CreatePurchase({ id }) {
    const purchase = (q) => {
        axios({
            url: constants.baseUrl + constants.path.purchase + '/' + id,
            method: 'post',
            data: {
                quantity: q
            }
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        purchase(e.target.quantity.value)
    }
    return ( 
        <div className='create-container'>
            <form onSubmit={onSubmit}>
                <input name='quantity' type={'number'} placeholder='quantity'/>
                <button className='purchase' type='submit'>Create</button>
            </form>
        </div>
     );
}

export default CreatePurchase;