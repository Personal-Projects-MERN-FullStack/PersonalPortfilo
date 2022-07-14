import React from "react";

const BlogPage = () => {
  return (
    <div className=" max-h-screen h-screen max-w-screen px-4 py-8 space-y-2 overflow-scroll">
      <div className="flex ">
        <div className="w-2/6  p-2 flex items-center justify-center">
          <img
            alt="light and dark mode toggle here"
            className="h-14 w-14 rounded-full"
            src="https://pbs.twimg.com/profile_images/1339815971427549184/OX-Hgih7_400x400.jpg"
          />
        </div>

        <div className="w-full  flex flex-col items-center ">
          <div className=" h-1/2 w-full font-medium flex items-center">
            {" "}
            Vaibhav Mohanalkar{" "}
          </div>
          <div className=" h-1/2 w-full flex items-center">
            <div className="w-1/4 font-extralight">Dec 15 </div>
            <div className="w-2/4 font-extralight">10 Min Read </div>
            <div className="w-1/4 font-extralight">item </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-3 text-2xl font-extrabold">
        What is Mern Stack development ?
      </div>
      <div className=" w-full px-3  text-xl text-gray-600 ">
      A MERN stack developer is an expert in MongoDB, Express, React and Node. They are proficient in JavaScript and use HTML, CSS and JavaScript to handle front-end operations and JavaScript with Node.
      </div>
      <div className=" w-full object-cover px-3 ">
      <img 
            alt="light and dark mode toggle here"
            className="h-44 w-full"
            src="https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png"
          />
      </div>
      <div className=" w-full px-3   text-gray-900 ">
      <p>
      All You Need To Know About MERN Stack
By Nikita Duggal
Last updated on Dec 28, 20216389
All You Need to Know About MERN Stack
Table of Contents
MERN Stack Full FormMERN Stack ComponentsWhy Should You Work With MERN Stack?Use Cases of MERNConclusion
MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily. 

Post Graduate Program: Full Stack Web Development
in Collaboration with Caltech CTMEENROLL NOW
MERN Stack Full Form
MERN Stack is a compilation of four different technologies that work together to develop dynamic web apps and websites. 

It is a contraction for four different technologies as mentioned below:

M - MongoDB
E - ExpressJS
R - ReactJS
N - NodeJS
    </p>
      </div>
    </div>
  );
};

export default BlogPage;
