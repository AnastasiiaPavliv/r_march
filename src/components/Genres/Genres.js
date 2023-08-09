import React, {useEffect, useState} from 'react';
import {genreService} from "../../service/genreService";
import {Genre} from "./Genre";
import css from './Genres.module.css'

const Genres = () => {
    const [genres, setGenres]=useState([])

    useEffect(()=>{
        genreService.getAll().then(({data})=>setGenres(data.results))
    },[])
    return (
        <div className={css.genres}>

            {/*{genres.map(genre=><Genre key={genre.id} genre={genre}/>)}*/}
        </div>
    );
};

export {Genres};