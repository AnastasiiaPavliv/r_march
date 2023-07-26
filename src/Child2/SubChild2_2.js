import React, {useContext} from 'react';
import {Context} from "../App";


const SubChild22 = () => {
    const {setData}=useContext(Context)
    return (
        <div>
            SubChild22
            <button onClick={()=>setData(prev=>[...prev, 5])}>push</button>
        </div>
    );
};

export {SubChild22};