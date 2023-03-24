import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Shop from '../components/Shop/Shop'

function Main() {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Main;