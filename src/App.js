import './App.css';
import React from "react";
import {Simpson} from "./simson/Simpson";

const App = () => {
  return (
    <div >
      <Simpson firstname={'Homer'} surname={"Simpson"} age={48} gender={"male"}
               photo={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest?cb=20221226145155'}/>
    </div>
  );
}

export {App};
