import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {charactersService} from "../../../services";
import {charactersActions} from "../../../redux";

const Characters = () => {
    const dispatch=useDispatch()
    const {characters}=useSelector(state=>state.characters)
    const{state:{ids}}= useLocation()

    useEffect(()=>{
        charactersService.getByIds(ids).then(({data})=>dispatch((charactersActions.set(data))))
    },[])
    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};