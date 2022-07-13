
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Component/Mainnavigation/Navigation";
import Notestate from "./Context/Notes/Notestate";
import BlogFormSubmisstion from "./Pages/BlogFormSubmisstion";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Notecontext from "./Context/Notes/Notecontext";
import { useContext } from "react";
function App() {
  const a = useContext(Notecontext)

  return (
  <Notestate>
  <Router>
    
      <div className="bg-blue-300">
         <Navigation />
      
         

        <div className=" pb-16 md:grid md:gap-y-16  md:grid-cols-3 md:grid-rows-none  bg-cyan-100 space-y-4 overflow-scroll rounded-t-[60px] h-screen mt-12 ">
          
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/BLogSubmitForm" element={<BlogFormSubmisstion />} />
              <Route  path="*" element={<Error />} />
            </Routes>
          
        </div>
      </div>
    </Router>
    </Notestate>
  );
}

export default App;
