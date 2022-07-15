import { Link } from "react-router-dom";
import { useContext } from "react";
import Notecontext from "../../Context/Notes/Notecontext";
const BlockOfBlog = ({ data }) => {
  const value = useContext(Notecontext)
  const {
    id,
    Title_of_Blog,
    Url_Of_poster,
    DOB_of_blog_post,
    Short_decription,
  } = data;
  return (
    <li key={id}>
    <div
      
      className=" w-80 mx-auto  h-auto border   my-8  rounded-xl    shadow-2xl dark:shadow-lg shadow-green-900 dark:shadow-white"
    >
      <img
        src={Url_Of_poster}
        alt="Poster of blog"
        className="w-full h-44 object-fit rounded-t-xl"
      />
      <div className="bg-white rounded-b-xl">
        <p className="text-xs px-2">{DOB_of_blog_post}</p>
        <h1 className="flex  font-semibold text-lg px-2">{Title_of_Blog}</h1>
        <p className="break-words h-20 overflow-hidden w-full px-2">
          {Short_decription}
        </p>

        <div className="flex items-center">
          <Link to="/Blogs/Blogspage">
            <button className="text-sm text-blue-900 rounded-xl p-1 px-2 "
            onClick={()=>{value.setid(id)}}
            >
              Readmore
            </button>
          </Link>
        </div>
      </div>
    </div>
    </li>
  );
};
export default BlockOfBlog;
