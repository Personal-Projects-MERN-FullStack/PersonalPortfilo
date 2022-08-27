import React from "react";

import "./Project.css";
import Projectitem from "./Projectitem";

const Displayproject = (Props) => {
  return (
    <div className="flex-col space-x-2 w-full">
      <div>
        <h1 className="flex justify-center  py-4 text-xl font-bold dark:text-white ">
          {Props.title}
        </h1>
      </div>

      <div className="flex justify-start  overflow-y-scroll pb-10 hide-scroll-bar">
        <div className="flex  flex-nowrap  lg:ml-40 md:ml-20 ml-10 ">
          
          <Projectitem />
          <Projectitem />
          <Projectitem />
          <Projectitem />
          <Projectitem />
          <Projectitem />
          <Projectitem />
          <Projectitem />
        </div>
      </div>
    </div>
  );
};

export default Displayproject;
