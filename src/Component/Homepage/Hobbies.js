import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BsCodeSlash} from "react-icons/bs";
import { FaMusic} from "react-icons/fa";
import { CgGames} from "react-icons/cg";
import { TbBooks} from "react-icons/tb";
import { MdLocalMovies} from "react-icons/md";
import { GiForestCamp} from "react-icons/gi";
import { IoMdPhotos} from "react-icons/io";
const Hobbies = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 ">
      <div className="flex justify-center items-center ">
        <span className="text-xl text-indigo-900 ">
          MY HOBBIES {"&"}
          <span className="font-semibold ml-2">INTEREST</span>
        </span>
      </div>
      <div className="flex justify-center items-center ">
        <div className=" border-2 border-indigo-900 w-8"></div>
      </div>
      <div className="text-xs   text-wrap px-2 flex justify-center items-center">
        Together moved fruitful seasons cattle morning seasons fourth above
        replenish dry doesn't gathered midst given have green him was. God midst
        deep open she'd moving their, green grass to years life cattle heaven
        moveth.
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-4 flex  flex-col justify-center items-center w-full space-y-8 text-indigo-900 font-semibold">
       
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl">
            <BsCodeSlash/>
          </div>
          <div>Coding</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl">
            <FaMusic/>
          </div>
          <div>Music</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl">
            <AiFillCar />
          </div>
          <div>Travalling</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl">
            <CgGames/>
          </div>
          <div>Video Games</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl"><MdLocalMovies/></div>
          <div>Movies</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl"><GiForestCamp/></div>
          <div>Forest</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl">
            <TbBooks/>
          </div>
          <div>Books</div>
        </div>
        <div className="flex flex-col justify-center items-center hover:text-3xl cursor-not-allowed">
          <div className="text-3xl"><IoMdPhotos/></div>
          <div>Photos</div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
