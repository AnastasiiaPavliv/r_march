import {FC, PropsWithChildren} from 'react';
import {ICar} from "../interface";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
car:ICar
}

const Car: FC<IProps> = ({car}) => {
    const navigate = useNavigate()
    const {id, brand}= car

    const deleteCar=async ()=>{

    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={()=>navigate(id.toString(), {state:car})}>details</button>
        </div>
    );
};

export {Car};