import {FC, PropsWithChildren} from 'react';
import {CarForm} from "../components/CarForm";
import {Cars} from "../components";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const CarPage: FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};