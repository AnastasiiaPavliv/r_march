import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../component/Header/Header";

const MainLayot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayot};