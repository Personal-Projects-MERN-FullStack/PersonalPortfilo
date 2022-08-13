import React from "react";
import image from "./insignia.png";
const Projectitem = () => {
  return (
    <div className="inline-block px-3 ">
      <div className="md:w-96 md:h-44 hover:  h-32 w-56 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img src={image} alt="first project here" />
      </div>
    </div>
  );
};

export default Projectitem;
