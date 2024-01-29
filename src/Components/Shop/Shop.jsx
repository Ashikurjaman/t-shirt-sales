import React from 'react';
import './Shop.css'
const Shop = ({tshirt,handlerCart}) => {
    const {name,picture,price} = tshirt;
    
    return (
        <div className='shop'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button className='btn' onClick={()=>handlerCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Shop;