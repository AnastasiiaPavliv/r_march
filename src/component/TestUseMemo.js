import React, {useMemo, useState} from 'react';

const TestUseMemo = () => {
    const [count, setCount]=useState(0)
    const [todos, setTodos]=useState([])
    const calculation= useMemo(()=> hardCalc(count), [count])

    const increment=()=> {
        setCount((c)=>c+1)
    };
    const addTodo=()=>{
        setTodos((t)=>[...t, "New Todo"])
    }
    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
                <hr/>
            </div>
            <div>
               <b> Count:</b> {count}
                <button onClick={increment}>+</button>
                <h2>Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};
const hardCalc=(num)=>{
    console.log("Loading...")
    for (let i=0; i < 1000; i++){
        num+=1
    }
    return num
} ;
export {TestUseMemo};