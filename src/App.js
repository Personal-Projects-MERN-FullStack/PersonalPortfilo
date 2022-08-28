//Importing stetement of files
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogFormSubmisstion from "./Pages/BlogFormSubmisstion";
import Auth from "./Pages/Auth";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import BlogPage from "./Component/Mainpage/BlogPage";
import Blogstate from "./Context/Notes/Blogstate";
import Signup from "./Component/AuthPages/Signup";
import Layout from "./Component/UI/Layout";
import Projects from "./Pages/Projects";
import Projectinfo from "./Component/ProjectsPage/Projectinfo";

//Main function
function App() {
  // console.log(value.alert)

  // const routesdata = {
  //   books: [
  //     {
  //       path: "/",
  //       element: "<Home/>",
  //     },
  //     {
  //       path: "/blogs",
  //       element: "<Blogs/>",
  //     },
  //     {
  //       path: "/Blogs/Blogspage",
  //       element: "<BlogPage />",
  //     },
  //     {
  //       path: "/BLogSubmitForm",
  //       element: "<Auth />",
  //     },
  //     {
  //       path: "*",
  //       element: "<Error />",
  //     },
  //   ],
  // };

  return (
    <Blogstate>
      <Router>
        <Layout>
          <div className=" pb-16   bg-cyan-100 dark:bg-gray-900   overflow-y-hidden rounded-t-[50px] h-screen  ">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Blogs" element={<Blogs />} />
              <Route exact path="/Blogs/Blogspage" element={<BlogPage />} />
              <Route
                exact
                path="/BLogSubmitForm"
                element={<BlogFormSubmisstion />}
              />
              <Route path="/Auth/Login" element={<Auth />} />
              <Route path="/Auth/Signup" element={<Signup />} />
              <Route path="*" element={<Error />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Projects/Projectinfo" element={<Projectinfo/>} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </Blogstate>
  );
}

export default App;
