import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "../components";
import {ICar} from "../interface";
import {carService} from "../services";
import {Outlet} from "react-router-dom";

const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars />
        </div>
    );
};

export {CarsPage};
