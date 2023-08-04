import './App.css';
import {TestUseMemo} from "./component/TestUseMemo";
import {TestUseToggle} from "./component/TestUseToggle/TestUseToggle";
import {TestUseFetch} from "./component/TestUseFetch";
import {TestUseArray} from "./component/TestUseArray";

function App() {
  return (
    <div >
      {/*<TestUseMemo/>*/}
      {/*  <TestUseToggle/>*/}
      {/*<TestUseFetch/>*/}
        <TestUseArray/>
    </div>
  );
}

export {App};
