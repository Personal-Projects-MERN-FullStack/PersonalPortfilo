import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="h-auto w-full  md:flex flex flex-col justify-center  py-auto p-4 space-y-2 bg-white pb-44">
      <div className="flex flex-col justify-center items-center h-44 w-full  p-2">
        <div className=" flex justify-center itmes-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-indigo-900"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-center itmes-center text-2xl text-indigo-900">
          About <span className="font-semibold ml-2"> Me</span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="h-8 border-2 border-indigo-900 w-0"></div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-full border-t-4 border-indigo-900 "></div>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col justify-center h-auto w-full  space-y-4 p-2">
        <div className="h-auto w-full  flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-center items-center">
            <span className="text-xl text-indigo-900 ">
              hello, i am a web <span className="font-semibold">designer</span>
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <div className=" border-2 border-indigo-900 w-8"></div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Name</div> <div>Mohanlkar vaibhav</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Date Of Birth</div>{" "}
            <div>Dec 15th 2002</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Phone</div> <div>+91 9284378620</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Email</div>{" "}
            <div>mohanalkarvaibhav@gmail.com</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Web</div> <div>coming soon</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900">
            <div className="font-bold">Address</div>{" "}
            <div>Gangakhed,Parbhani</div>
          </div>
          <div className="flex justify-between items-center text-sm text-indigo-900 my-4">
            <div className="font-thin">
              A divide rule that second said Two deep. Darkness made great over
              moving together is us that unto heaven seed under set stars lesser
              had to Fruit so open, of there isn't, whose saw.
            </div>
          </div>
        </div>
        <div className="h-auto w-full  ">
          <Skills />
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-24 ">
        <div className="flex justify-center items-center border-2 border-indigo-900 px-8 py-2 font-semibold text-indigo-900 space-x-2">
          <span>Download CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex justify-center items-center ">
          <span className="text-xl text-indigo-900 ">
            MY HOBBIES {"&"}
            <span className="font-semibold ml-2">INTEREST</span>
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" border-2 border-indigo-900 w-8"></div>
        </div>
        <div className="text-xs   text-wrap px-2 flex justify-center items-center">
          Together moved fruitful seasons cattle morning seasons fourth above
          replenish dry doesn't gathered midst given have green him was. God
          midst deep open she'd moving their, green grass to years life cattle
          heaven moveth.
        </div>
        <div className="flex  flex-col justify-center items-center w-full space-y-8 text-indigo-900 font-semibold">
          <div></div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>space</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Music</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Travalling</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div>Video Games</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Movies</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Forest</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Books</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <div>Photos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
