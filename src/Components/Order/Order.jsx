import React from 'react';

const Order = ({cart,handleDelete}) => {
    return (
        <div>
            <h3>Total : {cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>{(tshirt.name)} <button onClick={()=>handleDelete(tshirt._id)}>X</button></p> 
                )
            }
        </div>
    );
};

export default Order;