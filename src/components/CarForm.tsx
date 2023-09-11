import {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
const {carForUpdate}=useAppSelector(state => state.cars)
    const {reset, register, handleSubmit, setValue}=useForm<ICar>()

    if(carForUpdate){
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save:SubmitHandler<ICar>=async (car)=>{

    }
    const update:SubmitHandler<ICar>=async (car)=>{

    }


    return (
        <form onSubmit={handleSubmit(carForUpdate? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'update':'save'} </button>
        </form>
    );
};

export {CarForm};