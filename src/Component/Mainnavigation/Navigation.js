import { Link } from "react-router-dom";

const Navigation = ({ setAllTaskShow, AllTaskShow }) => {
  const BlogData = {
    "name":"samarth",
    "email":"vijay@gmail.com",
    "password":"654654654654"
}
  const onclickhandler=()=>{
    fetch(
      'http://localhost:4000/api/auth',
      {
        method: 'POST',
        body: JSON.stringify(BlogData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return (
    <>
      <div className=" w-auto h-12 rounded-b-xl rounded-t-sm  px-4  flex flex-row items-center justify-around">
        <div className="text-2xl">
          <Link to="/">Home</Link>
        </div>
        <div className="text-2xl">
          <Link to="/BLogSubmitForm">Home</Link>
        </div>
        <div className="text-2xl" onClick={onclickhandler}>
tesing        </div>
      </div>
    </>
  );
};
export default Navigation;
