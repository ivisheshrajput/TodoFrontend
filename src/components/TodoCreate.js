import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

const TodoCreate = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto  text-black  md:rounded-3xl rounded-md mb-5  bg-primary-400 shadow-sm  bg-gradient-to-b from-primary-800 ">
        <div className="px-6 py-3 ">
          <form>
            <div className="">
              <div className="md:flex items-center md:space-x-5 ">
                {" "}
                <div className="md:w-1/4 w-full ">
                  {/* <label htmlFor='title'  className='text-sm font-poppins font-semibold '>Title</label> */}
                  <input
                    id="title"
                    type="text"
                    placeholder="Enter Title"
                    className="mt-1 block w-full px-3 py-2   border-2 rounded-md 
                    text-sm placeholder-primary-400 focus:outline-none focus:border-1 focus:border-custom-purple focus:bg-white
                    focus:ring-1 focus:ring-primary-400  "
                    name="title"
                    required
                  />
                </div>
                <div className="md:space-x-4 md:w-3/4 w-full">
                  {/* <label htmlFor='description'  className='text-sm font-poppins font-semibold'>Description</label> */}
                  <textarea
                    id="description"
                    type="text"
                    placeholder="Description"
                    className="mt-1 block w-full px-3 py-2   border-2 rounded-md 
                    text-sm placeholder-primary-400 focus:outline-none focus:border-1 focus:border-custom-purple focus:bg-white
                    focus:ring-1 focus:ring-primary-400 "
                    name="description"
                    required
                  />
                </div>
              </div>
              <div className="text-3xl  text-black cursor-pointer flex justify-end mt-2">
                <MdAddCircleOutline />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoCreate;
