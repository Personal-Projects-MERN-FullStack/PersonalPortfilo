import React from "react";
import Displayproject from "../Component/ProjectsPage/Displayproject";

const Projects = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
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
