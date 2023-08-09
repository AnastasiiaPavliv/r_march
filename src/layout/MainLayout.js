import React from 'react';
import {Header} from "../components";
import {Outlet} from "react-router-dom";
import {Genres} from "../components/Genres/Genres";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>


        </div>
    );
};

export {MainLayout};