import React from 'react';
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";

const Movie = ({movie, pageId}) => {
    const {poster_path,id}=movie;

    const movieNavigate=useNavigate()

    return (
        <div>
            <div className={css.Movie} onClick={()=>{
                movieNavigate(`movie/${id}`);
            // localStorage.setItem('pageId', JSON.stringify(pageId))
            }}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
            </div>
        </div>
    );
};

export {Movie};