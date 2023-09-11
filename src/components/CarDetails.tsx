import {FC, PropsWithChildren} from 'react';
import {ICar} from "../interface";

interface IProps extends PropsWithChildren {
car:ICar
}

const CarDetails: FC<IProps> = ({car:{id, price, brand, year}}) => {
    return (
        <div>
            <div>{id}: {brand} {price} {year}</div>
        </div>
    );
};

export {CarDetails};