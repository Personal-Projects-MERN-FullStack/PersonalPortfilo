import React, { useState } from "react";
import image from "./insignia.png";
import { Link } from "react-router-dom";

const Projectitem = () => {
  const [hover, sethover] = useState(false);
  const hoverhandler = () => {
    sethover(true);
  };
  const hoverremover = () => {
    sethover(false);
  };
  return (
    <div className="inline-block px-3 ">
      <div
        onMouseEnter={hoverhandler}
        onMouseOut={hoverremover}
        className={`md:w-96 md:h-44 hover:cursor-pointer  h-32 w-56   max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative`}
      >
        <Link to="/Projects/Projectinfo">
          <img
            src={image}
            alt="first project here"
            className={`w-full h-full hover:blur-sm `}
          />
          {hover && (
            <h1 class="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              visit
            </h1>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Projectitem;
