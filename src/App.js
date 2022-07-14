
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Component/Mainnavigation/Navigation";
import Notestate from "./Context/Notes/Notestate";
import BlogFormSubmisstion from "./Pages/BlogFormSubmisstion";
import Auth from './Pages/Auth'
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";


function App() {
  

  return (
  <Notestate>
  <Router>
    
      <div className="bg-blue-300">
         <Navigation />
      
         

        <div className=" pb-16   bg-cyan-100  overflow-scroll rounded-t-[60px] h-screen mt-12 ">
          
            
            <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/Blogs" element={<Blogs />} />
              <Route exact path="/BLogSubmitForm" element={<BlogFormSubmisstion />} />
              <Route  path="/login" element={<Auth/>} />
              <Route  path="*" element={<Error />} />
            </Routes>
          
        </div>
        
      </div>
    </Router>
    </Notestate>
  );
}

export default App;
