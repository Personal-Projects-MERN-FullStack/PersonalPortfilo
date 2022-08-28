import React, { useContext,useState } from "react";
import About from "../Component/Homepage/About";
import Info from "../Component/Homepage/Info";
import Resume from "../Component/Homepage/Resume";
import Notecontext from "../Context/Notes/Notecontext";
import "./styles.css";
import dp from './dp.jpeg'
import { AiFillHome } from 'react-icons/ai';
import { GrInfo } from 'react-icons/gr';
import { RiPagesLine } from 'react-icons/ri';




const Home = () => {
  const { loggedin } = useContext(Notecontext);
  const [page, setpage] = useState(<Info/>)

  return (
    <div className="  md:flex justify-center items-center h-screen w-screen dark:text-white p-8   space-y-4 md:space-x-4 md:space-y-0">
      <div className="h-2/6 w-full md:h-5/6 md:w-3/6 ">
        <div className="h-5/6 w-full ">
          <img
            className="h-full w-full object-cover"
            alt="profile here"
            src={dp}
          ></img>
        </div>
        <div className="h-1/6 w-full bg-indigo-900 flex justify-center items-center text-white font-semibold">
          Web Designer
        </div>
      </div>
      <div className="h-12  w-full md:w-20 bg-indigo-900 flex md:flex-col md:h-5/6 justify-center items-center text-white font-semibold ">
        <div className="w-2/6  h-full flex justify-center items-center  cursor-pointer" onClick={()=>{setpage(<Info/>)}}>
          <AiFillHome/>
        </div>
        <div className="w-2/6 invert  h-full flex justify-center items-center cursor-pointer" onClick={()=>{setpage(<About/>)}}>
          <GrInfo/>
        </div>
        <div className="w-2/6  h-full flex justify-center items-center cursor-pointer" onClick={()=>{setpage(<Resume/>)}}>
          <RiPagesLine/>
        </div>
        
      </div>
      {page}
    </div>
  );
};

export default Home;
