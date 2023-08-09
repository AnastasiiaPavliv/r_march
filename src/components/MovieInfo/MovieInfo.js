import React, {useEffect, useState} from 'react';
import {movieService} from "../../service/movieService";
import {useNavigate, useParams} from "react-router-dom";
import {MovieI} from "./MovieI";

const MovieInfo = () => {
    const navigation=useNavigate()
    const [movie, setMovie]=useState(null)

    const {id}=useParams()


    useEffect(()=>{
        movieService.getAll(id).then(({data})=> setMovie(data))
    },[id])

    return (
        <div>
         <div>
            {movie&& <MovieI movie={movie} />}
         </div>
        </div>
    );
};

export {MovieInfo};