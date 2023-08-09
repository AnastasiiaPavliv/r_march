import React from 'react';
import css from './MovieI.module.css'

const MovieI = ({movie}) => {

    const{title, poster_path, overview,release_date,vote_average,popularity, genres}=movie

    return (
        <div className={css.main}>
          <div className={css.container}>
            <div className={css.poster}><img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></div>
           <div className={css.text}>
             <div className={css.title}>{title}</div>
             <div className={css.description}>{overview}</div>
             <div className={css.details}><b>genres:</b>{genres.name}</div>
             <div className={css.details}><b>release:</b>{release_date}</div>
             <div className={css.details}><b>rate:</b>{vote_average}</div>
             <div className={css.details}><b>popularity:</b>{popularity}</div>
            </div>
           </div>
        </div>
    );
};

export {MovieI};