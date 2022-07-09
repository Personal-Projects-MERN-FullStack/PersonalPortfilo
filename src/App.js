import React, { useRef, useEffect, useState } from "react";
import Navigation from "./Component/Mainnavigation/Navigation";
import Addtaskform from "./Component/Mainpage/Addtaskform";
import Task from "./Component/Mainpage/Task";

function App() {
  const [AllTaskShow, setAllTaskShow] = useState(false);

  return (
    <div className="bg-blue-300">
      <Navigation setAllTaskShow={setAllTaskShow} AllTaskshow={AllTaskShow} />

      {AllTaskShow && (
        <div className="md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 bg-cyan-50  rounded-t-[60px] h-screen mt-12 pt-8">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      )}
      {!AllTaskShow && (
        <div className="md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 bg-cyan-50  rounded-t-[60px] h-screen mt-12 pt-8 py-8 px-8 ">
          <Addtaskform />
        </div>
      )}

      
    </div>
  );
}

export default App;
