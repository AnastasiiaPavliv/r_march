import React, {useEffect, useState} from 'react';
import {Start} from "./Start";

const Starts = () => {
    const [rockets, setRockets]=useState([])
    useEffect(()=>{
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then((value)=>value.json())
            .then((value)=>{
                const filtered = value.filter(item=>item.launch_year!=='2020');
                setRockets(filtered)
            })
    },[])
    return (
        <div>
            {rockets.map(rocket=> <Start key={rocket.mission_name} rocket={rocket} />)}
        </div>
    );
};

export {Starts};