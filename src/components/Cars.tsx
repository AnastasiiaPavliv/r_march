import {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Car} from "./Car";
import {carActions} from "../redux";


interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const {cars}=useAppSelector(state => state.cars)

    useEffect(()=>{
        dispatch(carActions.getAll())
    })

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};