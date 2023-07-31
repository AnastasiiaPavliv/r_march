import React from 'react';
import {Comments} from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";
import css from './CommentPage.module.css'

const CommentPage = () => {
    return (
        <div className={css.Com}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentPage};