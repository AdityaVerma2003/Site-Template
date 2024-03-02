import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
function Layout() {
    return ( 
<>
<Header/>
<Outlet/>
<Footer/>
</>
);
}

export default Layout;