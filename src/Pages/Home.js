import React, { useContext,useState } from "react";
import About from "../Component/Homepage/About";
import Info from "../Component/Homepage/Info";
import Resume from "../Component/Homepage/Resume";
import Notecontext from "../Context/Notes/Notecontext";
import "./styles.css";

const Home = () => {
  const { loggedin } = useContext(Notecontext);
  const [page, setpage] = useState(<Info/>)

  return (
    <div className="flex-col  md:flex justify-center items-center h-screen w-screen dark:text-white p-8 space-y-4">
      <div className="h-2/6 w-full border border-white ">
        <div className="h-5/6 w-full ">
          <img
            className="h-full w-full object-cover"
            alt="profile here"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          ></img>
        </div>
        <div className="h-1/6 w-full bg-indigo-900 flex justify-center items-center text-white font-semibold">
          Web Designer
        </div>
      </div>
      <div className="h-12 w-full bg-indigo-900 flex justify-center items-center text-white font-semibold ">
        <div className="w-2/6  h-full flex justify-center items-center  cursor-pointer" onClick={()=>{setpage(<Info/>)}}>
          home
        </div>
        <div className="w-2/6  h-full flex justify-center items-center cursor-pointer" onClick={()=>{setpage(<About/>)}}>
          About Me
        </div>
        <div className="w-2/6  h-full flex justify-center items-center cursor-pointer" onClick={()=>{setpage(<Resume/>)}}>
          Resume
        </div>
        
      </div>
      {page}
    </div>
  );
};

export default Home;
