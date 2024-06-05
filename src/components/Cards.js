import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Cards = ({todos}) => {
  return (
    <div className="space-y-4">
{todos.map((todo,index)=>(
        <div key={todo._id} className="w-11/12  mx-auto h-[80px] text-black bg-primary-400 shadow-sm  bg-gradient-to-b from-primary-800   md:rounded-3xl rounded-md">
        <div className="px-6 md:px-20 py-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl text-white font-poppins">{todo.title}</div>
              <div className="text-md text-white font-poppins">{todo.description}</div>
            </div>
            <div className="text-3xl cursor-pointer">
            <MdDeleteForever />
          </div>
          </div>
          
        </div>
      </div>
))}
    </div>
  );
};

export default Cards;
