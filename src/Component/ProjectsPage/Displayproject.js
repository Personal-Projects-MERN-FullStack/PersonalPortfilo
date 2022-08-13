import React from 'react'
import image from "./insignia.png";
import './Project.css'

const Displayproject = () => {
  return (
    <div className="flex-col space-x-2 w-full">
        <div>
          <h1 className="flex  justify-center py-4 text-xl font-bold dark:text-white ">
            React js Projects
          </h1>
        </div>

        <div className="flex  overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex  flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div className="inline-block px-3 ">
              <div className="md:w-96 md:h-44  h-40 w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={image} alt="first project here"/>
              </div>
            </div>
            <div className="inline-block px-3 ">
              <div className="md:w-64 md:h-64 h-40 w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={image} alt="first project here"/>
              </div>
            </div>
            <div className="inline-block px-3 ">
              <div className="md:w-64 md:h-64 h-40 w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={image} alt="first project here"/>
              </div>
            </div>
            <div className="inline-block px-3 ">
              <div className="md:w-64 md:h-64 h-40 w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={image} alt="first project here"/>
              </div>
            </div>
            <div className="inline-block px-3 ">
              <div className="md:w-64 md:h-64 h-40 w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={image} alt="first project here"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center py-4 text-xl font-bold dark:text-white">
            Next js Projects
          </h1>
        </div>
        <div className=" flex   justify-center  space-x-2 h-40  scroll-smooth  overflow-y-scroll">
          <div className={`h-40 w-60   `}>
            <img
              src={image}
              alt="Project prview "
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
  )
}

export default Displayproject