import React, {useEffect, useState} from 'react';
import {movieService} from "../../service/movieService";
import {useParams} from "react-router-dom";
import {MovieI} from "./MovieI";

const MovieInfo = () => {
    const [movieInfo, setMovieInfo]=useState([])
      // const {pageId}=JSON.parse(localStorage.getItem('pageId'))
    // const [trigger, setTrigger]=useState(null)

    const {id}=useParams()

    useEffect(()=>{
        movieService.getAll(id).then(({data})=> setMovieInfo(data))
    },[id]
    )
    return (
        <div>
            {movieInfo&& <MovieI movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfo};