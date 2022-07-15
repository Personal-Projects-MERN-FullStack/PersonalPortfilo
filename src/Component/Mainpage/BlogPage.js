import React,{useContext} from "react";
import Notecontext from "../../Context/Notes/Notecontext";
const BlogPage = () => {
    
    const data = useContext(Notecontext)

  return (
    <div key={id} className=" max-h-screen h-screen max-w-screen px-4 py-8 space-y-2 overflow-scroll">
      <div className="flex ">
        <div className="w-2/6  p-2 flex items-center justify-center">
          <img
            alt="light and dark mode toggle here"
            className="h-14 w-14 rounded-full"
            src={Url_of_Profile}
          />
        </div>

        <div className="w-full  flex flex-col items-center ">
          <div className=" h-1/2 w-full font-medium flex items-center">
            
            {First_name +" " +Last_name}
          </div>
          <div className=" h-1/2 w-full flex items-center">
            <div className="w-1/4 font-extralight">{DOB_of_blog_post} </div>
            <div className="w-2/4 font-extralight">10 Min Read </div>
            <div className="w-1/4 font-extralight">item </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-3 text-2xl font-extrabold">
        {Title_of_Blog}
      </div>
      <div className=" w-full px-3  text-xl text-gray-600 ">
      {Short_decription}
      </div>
      <div className=" w-full object-cover px-3 ">
      <img 
            alt="light and dark mode toggle here"
            className="h-44 w-full"
            src={Url_Of_poster}
          />
      </div>
      <div className=" w-full px-3   text-gray-900 ">
      <p>
      {Content_Of_Blog}
    </p>
      </div>
    </div>
  );
};

export default BlogPage;
