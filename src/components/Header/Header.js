import React from 'react';
import {NavLink} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.block}>
        <div className={css.Header}>
          <NavLink to={AppRouter.MAIN}>MAIN</NavLink>
          <NavLink to={AppRouter.MOVIES}>MOVIES</NavLink>
        </div>
        </div>
    );
};

export {Header};