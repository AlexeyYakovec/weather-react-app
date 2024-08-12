import { useRef } from "react";
import { getWeather } from "../store/weatherSlice.js";
import { useDispatch } from "react-redux";

const InputBlock = () => {
   let inputRef = useRef(null);
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(getWeather(inputRef.current.value));
   };

   dispatch(getWeather("London"));

   return (
      <div className="flex justify-around space-between rounded-lg shadow-xl p-5 bg-white/50">
         <input
            ref={inputRef}
            placeholder="Введите город..."
            className="capitalize outline-none text-lg rounded-lg bg-white/50 w-3/4 px-5 py-2"
         />
         <button
            className="bg-white/50 rounded-lg px-5 py-2 text-xl ml-2 border-solid"
            onClick={handleClick}
         >
            button
         </button>
      </div>
   );
};

export default InputBlock;
