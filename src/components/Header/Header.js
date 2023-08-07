import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={AppRouter.MAIN}>MAIN</NavLink>
            <NavLink to={AppRouter.TODOS}>TODOS</NavLink>
            <NavLink to={AppRouter.ALBUMS}>ALBUMS</NavLink>
            <NavLink to={AppRouter.COMMENTS}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};