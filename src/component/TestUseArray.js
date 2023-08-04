import React from 'react';
import {useArray} from "../hooks/useArray";

const TestUseArray = () => {
    const {data, add, remove}=useArray([1,2,3,4,5])
    return (
        <div>
            {data.map((item, index)=>(
                <div key={index}>
                    {item} <button onClick={()=>remove(index)}>remove</button>
                </div>
            ))}
        </div>
    );
};

export {TestUseArray};