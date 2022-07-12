import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Component/Mainnavigation/Navigation";

import BlogFormSubmisstion from "./Pages/BlogFormSubmisstion";
import Home from "./Pages/Home";

function App() {
  return (<Router>
    
      <div className="bg-blue-300">
        <Navigation />

        <div className=" pb-16 md:grid md:gap-y-16  md:grid-cols-3 md:grid-rows-none  bg-cyan-100 space-y-4 overflow-scroll rounded-t-[60px] h-screen mt-12 pt-8">
          
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/BLogSubmitForm" element={<BlogFormSubmisstion />} />
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
