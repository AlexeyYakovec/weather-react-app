import { useRef } from "react";
import "./App.css";

import { getWeather } from "./store/weatherSlice.js";
import { useDispatch } from "react-redux";

function App() {
   let inputRef = useRef(null);
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(getWeather(inputRef.current.value));
   };

   return (
      <div>
         <input ref={inputRef} type="text" name="" id="" />
         <button onClick={handleClick}>button</button>
      </div>
   );
}

export default App;
