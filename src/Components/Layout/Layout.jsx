import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <ToastContainer />
        
        </>
    );
};

export default Layout;