import React, {useEffect, useState} from 'react';
import {moviesService} from "../../service/moviesService";
import {Movie} from "./movie/Movie";
import {useNavigate, useParams} from "react-router-dom";
import css from './Movies.module.css'

const Movies = () => {
    const pageId=useParams();
    const [movies, setMovies] = useState([])
    const [page, setPage]=useState(+pageId.page)

    useEffect(()=>{
        moviesService.getAll(page).then(({data})=>setMovies(data.results))
    },[])

    // const pageUp=()=>{
    //     setPage(prev => prev !== 500 ? prev + 1:500)
    // }
    // const pageDown=()=>{
    //     setPage(prev => prev !== 1 ? prev - 1 : 1)
    // }

    return (
        <div>
        <div className={css.Movies}>
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie} pageId={page}/>)}
        </div>


        </div>
    );
};

export {Movies};