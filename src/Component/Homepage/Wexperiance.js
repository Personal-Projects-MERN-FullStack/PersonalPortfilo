import React from "react";

const Wexperiance = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="mt-16 flex-col justify-center items-center  space-y-4">
        <div className="flex justify-center items-center ">
          <span className="text-xl text-indigo-900 ">
            WORK  
            <span className="font-semibold ml-2">EXPERIANCE</span>
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" border-2 border-indigo-900 w-8"></div>
        </div>
      </div>
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">
                  2020-Present
                </h2>
                <h4 className="font-medium">BCA TY</h4>
                <p className="leading-relaxed">
                  At Dayanand College of Commerce Latur
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">
                  2018-2020
                </h2>
                <h4 className="font-medium">12th <span className="font-bold"> 89.64%</span></h4>
                <p className="leading-relaxed">
                  From Dayanand College of Commerce latur
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">
                  2017-2018
                </h2>
                <h4 className="font-medium">10th <span className="font-bold"> 80.80%</span></h4>
                <p className="leading-relaxed">
                  From Mamata Primary School Gangakhed
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">
                  2010-2017
                </h2>
                <h4 className="font-medium">10th </h4>
                <p className="leading-relaxed">
                  From Mamata Primary School Gangakhed
                </p>
              </div>
            </div>
            
          </div>
          {/* <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"/> */}
        </div>
      </div>
    </section>
  );
};

export default Wexperiance;
