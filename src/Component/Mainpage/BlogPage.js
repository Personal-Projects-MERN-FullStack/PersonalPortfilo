import React, { useContext,useEffect, useState } from "react";
import Notecontext from "../../Context/Notes/Notecontext";
const BlogPage = () => {
  const value = useContext(Notecontext);
  const [LoadedBlog, setLoadedBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://bloging-website-30ee1-default-rtdb.firebaseio.com/blogpostdata.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        
        let blogbyid = null;
        for (const key in data) {
         
         if(key === value.id){
          blogbyid= data[key]
          break;
         }
         
          // meetups.push(meetup);
        }
    setLoadedBlog(blogbyid)
        
      });
  }, [value.id]);
 
  const {
        
    Title_of_Blog,
    Url_Of_poster,
    DOB_of_blog_post,
    Short_decription,
    First_name,
    Last_name,
    Content_Of_Blog,
    Url_of_Profile
  } = LoadedBlog


  return (
    <div className="lg:flex  lg:mx-auto lg:w-3/5 ">
      <div className=" max-h-screen  h-screen max-w-screen px-4 py-8 space-y-2 overflow-scroll">
        <div className="flex shadow-gray-500 shadow-sm rounded-2xl border-black ">
          <div className="w-2/6  p-2 flex items-center justify-center">
            <img
              alt="light and dark mode toggle here"
              className="h-14 w-14  rounded-full"
              src={Url_of_Profile}
            />
          </div>

          <div className="w-full  flex flex-col items-center ">
            <div className=" h-1/2 w-full font-medium flex items-center dark:text-white">
              {First_name + " " + Last_name}
            </div>
            <div className=" h-1/2 w-full flex items-center dark:text-white">
              <div className="w-1/4 font-extralight">15 Dec </div>
              <div className="w-2/4 font-extralight">10 Min Read </div>
              <div className="w-1/4 font-extralight">item </div>
            </div>
          </div>
        </div>
        <div className=" w-full p-3 text-2xl font-extrabold dark:text-white">
          {Title_of_Blog}
        </div>
        <div className=" w-full px-3  text-xl text-gray-600 dark:text-white">
         {Short_decription}
        </div>
        <div className=" w-full object-cover px-3 ">
          <img
            alt="light and dark mode toggle here"
            className="h-44 w-full lg:h-[400px]"
            src={Url_Of_poster}
          />
        </div>
        <div className=" w-full px-3 dark:text-white  text-gray-900 ">
          <p>
          {Content_Of_Blog}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
