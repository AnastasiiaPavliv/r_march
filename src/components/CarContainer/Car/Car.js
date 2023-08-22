import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux";

const Car = ({car}) => {
    const dispatch= useDispatch()
    const {id, brand, price, year}=car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarsForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar(id))}>delete</button>
            <br/>
        </div>
    );
};

export {Car};