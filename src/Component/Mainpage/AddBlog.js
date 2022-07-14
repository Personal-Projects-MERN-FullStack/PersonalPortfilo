import { useRef } from "react";
import { Link } from "react-router-dom";

const AddBlog = ({ setAllTaskShow }) => {
  
  const TitleOfBLog = useRef();
  const PosterOfBlog = useRef();

  const ContentOfBlog = useRef();
  const Fname = useRef();
  const Lname = useRef();
  const Mail = useRef();
  const ProfileUrl = useRef();
  const shortDescription = useRef();

  const OnSubmitHandler = (event) => {
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + " " + time;
    event.preventDefault();

    const Enteredtitle = TitleOfBLog.current.value;
    const EnteredPosterUrl = PosterOfBlog.current.value;
    const EnteredContentOfBLog = ContentOfBlog.current.value;
    const EnteredFname = Fname.current.value;
    const EnteredLname = Lname.current.value;
    const EnteredEmail = Mail.current.value;
    const EnteredProfileURl = ProfileUrl.current.value;
    const EnteredShortDecription = shortDescription.current.value;
    const BlogData = {
      Title_of_Blog: Enteredtitle,
      Url_Of_poster: EnteredPosterUrl,
      DOB_of_blog_post: dateTime,
      Content_Of_Blog: EnteredContentOfBLog,
      First_name: EnteredFname,
      Last_name: EnteredLname,
      Email: EnteredEmail,
      Url_of_Profile: EnteredProfileURl,
      Short_decription: EnteredShortDecription,
    };
    fetch(
      "https://bloging-website-30ee1-default-rtdb.firebaseio.com/blogpostdata.json",
      {
        method: "POST",
        body: JSON.stringify(BlogData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTimeout(function () {
      setAllTaskShow(true);
    }, 2000);
  };
  return (
    <>
      <div className=" px-4   border-gray-900  w-screen lg:justify-center">
        <form onSubmit={OnSubmitHandler}>
          <div className="lg:flex lg: space-x-2 lg:justify-center  ">
            <div  className="lg:w-1/3">
              <h1 className="w-full  justify-center flex text-2xl font-bold my-2">
                Blog Details
              </h1>
              <div className="form-group mb-6">
                <input
                  maxLength="50"
                  ref={TitleOfBLog}
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Title of Your Blog *"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  ref={PosterOfBlog}
                  type="url"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="URL OF BLOG POSTER"
                />
              </div>

              <div className="form-group mb-6">
                <textarea
                  ref={shortDescription}
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Short Decription About Content*"
                  required
                  maxLength="100"
                ></textarea>
              </div>
              <div className="form-group mb-6">
                <textarea
                  ref={ContentOfBlog}
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Content of Blog paste here *"
                  required
                ></textarea>
              </div>
            </div>
            <div className="lg:w-1/3 ">
              <h1 className="w-full  justify-center flex text-2xl font-bold my-2">
                Personal Details
              </h1>
              <div className="flex space-x-2">
                <div className="form-group mb-6">
                  <input
                    ref={Fname}
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="FirstName *"
                    required
                  />
                </div>{" "}
                <div className="form-group mb-6">
                  <input
                    ref={Lname}
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="LastName *"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  ref={Mail}
                  type="email"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Enter Your email *"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  ref={ProfileUrl}
                  type="url"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Paster url of your profile photo"
                />
              </div>
              <Link to="/blogs">
              <button
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                 POST BLOG
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddBlog;
