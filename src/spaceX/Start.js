import React from 'react';

const Start = ({rocket}) => {
    const {mission_name,launch_year,links,mission_patch_small}=rocket
    return (
        <div>
            <p>mission_name:{mission_name}</p>
            <p>launch_year:{launch_year}</p>
            <p>mission_patch_small:</p>
            <img src={links.mission_patch_small}/>
        </div>
    );
};

export {Start};