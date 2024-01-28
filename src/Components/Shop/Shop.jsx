import React from 'react';
import './Shop.css'
const Shop = ({tshirt}) => {
    const {name,picture,price} = tshirt;
    console.log(name);
    return (
        <div className='shop'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p></p>
        </div>
    );
};

export default Shop;