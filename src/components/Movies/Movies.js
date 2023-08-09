import React, {useEffect, useState} from 'react';
import {moviesService} from "../../service/moviesService";
import {Movie} from "./movie/Movie";
import {useNavigate, useParams} from "react-router-dom";
import css from './Movies.module.css'

const Movies = () => {
    const pageId=useParams();

    const nav=useNavigate()

    const [movies, setMovies] = useState([])
    const [page, setPage]=useState(+pageId.page)


    useEffect(()=>{
        nav(`/page/${page}`)
    },[page])

    useEffect(()=>{
        moviesService.getAll(page).then(({data})=>setMovies(data.results))
    },[page])

    const pageUp=()=>{
        setPage(prev => prev !== 500 ? prev + 1:500)
    }
    const pageDown=()=>{
        setPage(prev => prev !== 1 ? prev - 1 : 1)
    }

    return (
        <div className={css.main}>
        <div className={css.Movies}>
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie} pageId={page}/>)}

     <div className={css.pag}>

    <button onClick={()=>{pageDown(); nav(`/page/${page}`)}}>Back</button>
    <div className={css.text}>{page} of 500</div>
    <button onClick={()=>{pageUp(); nav(`/page/${page}`)}}>Next</button>
      </div></div>

        </div>
    );
};

export {Movies};