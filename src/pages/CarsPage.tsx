import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "../components";
import {ICar} from "../interface";
import {carService} from "../services";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    const [cars, setCars]=useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[trigger])
    return (
        <div>
            <Outlet/>
            <CarForm setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsPage};
