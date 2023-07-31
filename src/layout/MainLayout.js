import React from 'react';
import {Navbar} from "../components/Header/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
                <Navbar/>
                <Outlet/>
        </div>
    );
};

export {MainLayout};