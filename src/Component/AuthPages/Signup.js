import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Notecontext from "../../Context/Notes/Notecontext";

const Signup = () => { 
  const [unathorized, setunathorized] = useState(null)
  const [sent, setsent] = useState(false)
  const [otpbox, setotpbox] = useState(false);
  const value = useContext(Notecontext);
  const navigate = useNavigate();
  const Enteredname = useRef();
  const Enteredemail = useRef();
  const Enteredpassword = useRef();
  const Enteredotp = useRef()
  const context = useContext(Notecontext);
  
  const onsubmithandler = async (event) => {
    event.preventDefault();
    const ename = Enteredname.current.value;
    const eemail = Enteredemail.current.value;
    const ePassword = Enteredpassword.current.value;
    const LoginData = {
      name: ename,
      email: eemail,
      password: ePassword,
    };

    const response = await fetch("/api/auth/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: LoginData.name,
        email: LoginData.email,
        password: LoginData.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      context.setloggedin(true);
      context.showAlert("Singn Up succefulluy", "success");
      navigate("/");
    } else {
      context.showAlert("Email address Already in use plz sign in ", "bg-red-900");
    }
  };
  const onmailsendhandler = async () => {
    setsent(true)
    const eemail = Enteredemail.current.value;
    const ename = Enteredname.current.value;

    const LoginData = {
      email: eemail,
      name: ename,
    };
    const response = await fetch("/api/auth/check ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: LoginData.email,
        name: LoginData.name,
      }),
    });
    const json = await response.json();
     value.setotp(json.otp)
     console.log(value.otp)
    if (response.status === 200) {
      value.showAlert("Verfication Number Sent to your mobile", "bg-green");
      setotpbox(true)
      
      
    }
    if(response.status=== 500){
      value.showAlert("Server is busy Try later after some time", "bg-green");
    }
    if(response.status=== 400){
      value.showAlert("Fill a form first", "bg-green");
    }
  };
const onotpchecker = ()=>{
  const otp = Enteredotp.current.value;

  if(value.otp === parseInt(otp)){
    value.setverified(true)
  }
  else{
    value.showAlert("Enter correct verfication code ", "bg-red-900")
    
  }
}
const unverfiedbuttonhandler = () =>{
  setunathorized(true);
  setTimeout(() => {
    setunathorized(false);
  }, 2000);
}

  return (
    <>
      <section className="h-screen" htmlFor="Sign in and Register page">
        <div
          className="px-6 h-full text-gray-800"
          htmlFor="Sign in and Register page"
        >
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            htmlFor="Sign in and Register page"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
              htmlFor="Sign in and Register page"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample asdf"
                htmlFor="Sign in and Register page"
              />
            </div>
            <div
              className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
              htmlFor="Sign in and Register page"
            >
              <form onSubmit={onsubmithandler}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Continue with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="form-group mb-6">
                  <input
                    maxLength="50"
                    ref={Enteredname}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput1"
                    placeholder="Enter Name"
                    required
                  />
                </div>

                <div className={` form-group ${(unathorized)?'mb-2':'mb-6'}  flex space-x-2`}>
                  <input
                    maxLength="50"
                    ref={Enteredemail}
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput2"
                    placeholder="Enter Email"
                    required
                  />
                  <span className=" cursor-pointer p-2 rounded-xl border border-black hover:bg-green-400 text-white bg-black shadow-2xl  shadow-black hover:shadow-inner hover:border-white" onClick={onmailsendhandler}>
                    {(sent)?'resend':'send'}
                  </span>
                </div>
                <div className=" form-group mb-6 ">
                {unathorized && <span className="text-red-900 font-bold"> Verify Your Mail first </span>}
                </div>
                
                {otpbox && (<>
                  <div className="form-group mb-6">
                    <input
                      maxLength="6"
                      ref={Enteredotp}
                      type="number"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="otpinput"
                      placeholder="Enter Otp here"
                      required
                    />
                  </div>
                  <span className=" cursor-pointer p-2 rounded-xl border border-black hover:bg-green-400 text-white bg-black shadow-2xl  shadow-black hover:shadow-inner hover:border-white" onClick={onotpchecker}>
                  {(value.verified)?'verfied':'verify'}
                </span>
               </>
                )}
                <div className="form-group mb-6 mt-6">
                  <input
                    maxLength="50"
                    ref={Enteredpassword}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput3"
                    placeholder="Enter Password"
                    required
                  />
                 
                </div>
                    
                <div className="text-center lg:text-left">
                  {(value.verified) && 
                  <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Register
                </button>}
                {(!value.verified) && 
                
                <span
                    type="submit"
                    className="cursor-pointer inline-block px-7 py-3 disabled bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md "
                  onClick={unverfiedbuttonhandler}
                  >
                    Register
                  </span>}
                  <p
                    className="text-sm font-semibold mt-2 pt-1 mb-0 cursor-pointer"
                    onClick={onmailsendhandler}
                  >
                    Have an account ?
                    <Link to="/Auth/Login">
                      <span
                        href="#!"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out cursor-pointer"
                      >
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
