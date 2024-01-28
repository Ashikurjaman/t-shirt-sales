import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shop from '../Shop/Shop';
import './Home.css'

const Home = () => {
    const t_shirtData = useLoaderData();
    console.log(typeof(t_shirtData));
    const [cart,setCart] =useState([]);

    


    return (
        <div className='home_container'>
            <div className='shopContainer'>

           {
            
            t_shirtData.map(tshirt => <Shop key={tshirt._id} 
            tshirt={tshirt} 
            
            
            />) 
           }
            </div>
            <div>
                <h2>{t_shirtData.length}</h2>
            </div>
        </div>
    );
};

export default Home;