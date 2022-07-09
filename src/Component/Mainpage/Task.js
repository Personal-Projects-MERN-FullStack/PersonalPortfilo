import img from './blog.jpg'
const Task = () => {
  return (
    <>
      <div className="">
        <div className=" w-64 mx-auto  h-auto border py-1 px-1 border-black  rounded-lg space-y-4 pb-2 ">
         <img src={img} className="w-full h-44 object-fit "/>
         <h1 className='justify-center'>Welcome to new blog</h1>
         <button className='border-2 border-black bg-gray-400 mx-auto'> something else </button>
        </div>
      </div>


      
    </>
  );
};
export default Task;
