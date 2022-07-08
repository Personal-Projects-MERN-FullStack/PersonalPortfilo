import img from './blog.jpg'
const Task = () => {
  return (
    <>
      <div className="bg-cyan-50  rounded-t-[60px] h-screen mt-12 pt-8">
        <div className=" w-  h-auto border-2 border-black  rounded-lg">
         <img src={img} className="w-full h-44 object-fit"/>
        </div>
      </div>
    </>
  );
};
export default Task;
