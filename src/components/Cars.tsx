import {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from 'react';
import {ICar} from "../interface";
import {carService} from "../services";
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks/reduxsHooks";
import {carActions} from "../redux/slices/carSlice";

interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
 const dispatch=useAppDispatch()
    const {cars}= useAppSelector(state=>state.cars)

    useEffect(() => {
       dispatch(carActions.getAll())
    }, []);
    
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
