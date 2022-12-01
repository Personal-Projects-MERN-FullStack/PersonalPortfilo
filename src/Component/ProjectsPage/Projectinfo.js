import React from "react";
import image from "./insignia.png";
import Projectreq from "./Projectreq";
const Projectinfo = (props) => {
  return (
    <>
      <div className="   h-auto  p-4 md:m-4 ">
        <div className="flex justify-center item-center">
          <span className="text-4xl font-bold text-sky-500/90 Dark:text-white">
            {props.title} Insignia
          </span>
        </div>
        <div className="md:py-12 pt-8 ">
          <img
            src={image}
            alt="first project here"
            className="w-11/12 m-auto "
          />
        </div>
        <div className="">
          <p className=" flex flex-wrap p-4 text-lg font-extrabold dark:text-cyan-400">
            This is insignia website include simple template regarding cloud
            storeage to store data on Cloud storage.Insignia is a data storage
            area that has been tested forsecurity ,so you can store your data
            here safely but not beafraid of being stolen by others.
          </p>
        </div>
      </div>
      <Projectreq title="react" />
    </>
  );
};

export default Projectinfo;
