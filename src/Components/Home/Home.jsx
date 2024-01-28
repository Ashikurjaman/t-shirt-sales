import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtData = useLoaderData();
    return (
        <div>
            <h3>Total tshirt :{tshirtData.length} </h3>
        </div>
    );
};

export default Home;