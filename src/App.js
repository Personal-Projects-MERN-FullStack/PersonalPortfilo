import React, { useRef,useEffect,useState } from "react";
import Navigation from "./Component/Mainnavigation/Navigation";
import Addtaskform from "./Component/Mainpage/Addtaskform";
import Task from "./Component/Mainpage/Task";


function App() {
  const [AllTaskShow, setAllTaskShow] = useState(false)
  

  
  return (<div className="bg-blue-300">
    <Navigation setAllTaskShow={setAllTaskShow} AllTaskshow={AllTaskShow}/>
    
    {AllTaskShow && <Task/>}
    {!AllTaskShow && <Addtaskform/>}
  </div>
  
  );
}

export default App;
