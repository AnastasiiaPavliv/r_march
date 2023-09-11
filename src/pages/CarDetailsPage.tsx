import {FC, PropsWithChildren, useState} from 'react';
import {CarDetails} from "../components";
import {ICar} from "../interface";

interface IProps extends PropsWithChildren {

}

const CarDetailsPage: FC<IProps> = () => {
    const [car, setCar] = useState<ICar>(null);
    return (
        <div>
            {car && <CarDetails car={car}/>}
        </div>
    );
};

export {CarDetailsPage};