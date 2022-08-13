import React from "react";
import Displayproject from "../Component/ProjectsPage/Displayproject";

const Projects = () => {

  return (
    <div className="h-full w-full p-4">
      <Displayproject title="React js Projects"/>
      <Displayproject title="Next js Projects"/>
      <Displayproject title="Andriod Development Projects"/>
      <Displayproject title="java Projects"/>
    </div>
  );
};

export default Projects;
