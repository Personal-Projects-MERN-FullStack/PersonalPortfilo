import React from "react";
import { RiPagesLine } from "react-icons/ri";
import Education from "./Education";
import Wexperiance from "./Wexperiance";
const Resume = () => {
  return (
    <div className="h-5/6  overflow-scroll w-full     py-auto p-4 space-y-2  pb-44">
      <div className=" flex justify-center itmes-center text-3xl">
        <RiPagesLine />
      </div>
      <div className="flex justify-center itmes-center text-2xl text-indigo-900">
        MY <span className="font-semibold ml-2"> RESUME</span>
      </div>
      <div className="flex justify-center items-center ">
        <div className="h-8 border-2 border-indigo-900 w-0"></div>
      </div>
      <div className="flex justify-center items-center w-full ">
        <div className="w-full border-t-4  border-indigo-900 "></div>
      </div>
      <Education/>
      <Wexperiance/>
    </div>
  );
};

export default Resume;
