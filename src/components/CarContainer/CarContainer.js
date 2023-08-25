import React from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useSelector} from "react-redux";


const CarContainer = () => {
    const {isLoading}=useSelector(state=>state.cars)
    return (
        <div>
            <CarForm/>
            <hr/>
            {isLoading && <h2>Loading...</h2>}
            <Cars/>
        </div>
    );
};

export {CarContainer};