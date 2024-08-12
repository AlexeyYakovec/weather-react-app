import React from "react";
import { useSelector } from "react-redux";
import Icon from "./Icon.jsx";
const OutputBlock = () => {
   const data = useSelector((store) => store.weather.data);

   return (
      <div className="flex justify-start gap-x-5 mt-10">
         {data?.map((item) => {
            return (
               <div
                  className="shadow-xl rounded-lg text-center px-5 py-2 bg-white/50"
                  key={item.id}
               >
                  <Icon iconType={item.iconType} />
                  <p className="p-5 pt-0 text-xl">{item.temp}&#186;C</p>
                  <hr className="border-purple-950" />
                  <p className="p-5 text-base">{item.time}</p>
               </div>
            );
         })}
      </div>
   );
};

export default OutputBlock;
