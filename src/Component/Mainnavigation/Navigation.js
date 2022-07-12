import { Link } from "react-router-dom";
import react from "react";

const Navigation = ({ setAllTaskShow, AllTaskShow }) => {
  return (
    <>
      <div className=" w-auto h-12 rounded-b-xl rounded-t-sm  px-4  flex flex-row items-center justify-around">
        <div className="text-2xl">
          <Link to="/">Home</Link>
        </div>
        <div className="text-2xl">
          <Link to="/BLogSubmitForm">Home</Link>
        </div>
      </div>
    </>
  );
};
export default Navigation;
