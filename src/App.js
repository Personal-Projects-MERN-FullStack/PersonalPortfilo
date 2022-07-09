import React, { useState } from "react";
import Navigation from "./Component/Mainnavigation/Navigation";
import AddBlog from "./Component/Mainpage/AddBlog";
import AllBlogs from "./Component/Mainpage/AllBlogs";

function App() {
  const [AllTaskShow, setAllTaskShow] = useState(true);
  

  return ( <>
    
    <div className="bg-blue-300">
    <marquee className="bg-blue-200">Currently This website is under maintainese or just for trial purpose</marquee>
      <Navigation setAllTaskShow={setAllTaskShow} AllTaskshow={AllTaskShow} />

      {AllTaskShow && (
        <div className=" pb-16 md:grid md:gap-y-16  md:grid-cols-3 md:grid-rows-none  bg-cyan-100 space-y-4 overflow-scroll rounded-t-[60px] h-screen mt-12 pt-8">
          <AllBlogs />
          
        </div>
      )}
      {!AllTaskShow && (
        <div className=" pb-16 md:grid md:gap-6 md:grid-cols-3 md:grid-rows-3 bg-cyan-50  rounded-t-[60px] h-screen mt-12 pt-8 py-8 px-8 ">
          <AddBlog setAllTaskShow={setAllTaskShow}/>
        </div>
      )}

      
    </div>
    </> );
}

export default App;
