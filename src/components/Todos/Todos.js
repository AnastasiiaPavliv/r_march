import React, {useEffect, useState} from 'react';
import {todosService} from "../../services";
import {Todo} from "./Todo";
import {useDispatch, useSelector} from "react-redux";
import {todosAction} from "../../redux/action/todosAction";


const Todos = () => {
    const todos=useSelector((store)=>store.todosReducer.todos)
     const store=useSelector((store)=>store)
    const dispatch = useDispatch
    // const [todos, setTodos]=useState([])

    useEffect(()=>{
         todosService.getAll(dispatch).then(({data}) => todosAction(data))
    },[])
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};