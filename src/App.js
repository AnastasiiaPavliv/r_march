import './App.css';
import React from "react";
import {Simpson} from "./simson/Simpson";

const App = () => {
  return (
    <div >
      <Simpson firstname={'Homer'} surname={"Simpson"} age={48} gender={"male"}
               photo={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>
        <Simpson firstname={'Marge'} surname={"Simpson"} age={40} gender={"female"}
               photo={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>
    </div>
  );
}

export {App};
