import React from 'react';
import css from './EpisodesPag.css'
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPag = () => {
    const {prevPage, nextPage}=useSelector(state=>state.episodes)
    const [,setQuery]=useSearchParams()

    const toPrevPage=()=> {
        setQuery(prev=>({...prev, page:+prev.get('page')-1}))
    }

    const toNextPage=() =>{
        setQuery(prev=>({...prev, page:+prev.get('page')+1}))
    }

    return (
        <div className={css.EpisodesPag}>
            <button disabled={!prevPage} onClick={toPrevPage}>back</button>
            <button disabled={!nextPage} onClick={toNextPage}>next</button>
        </div>
    );
};

export {EpisodesPag};