const Navigation = ({setAllTaskShow,AllTaskShow}) => {
    
  return (
    <>
      <div className=" w-auto h-12 rounded-b-xl rounded-t-sm  px-4  flex flex-row items-center justify-around">
       
            <div className="text-2xl"  onClick={()=>{setAllTaskShow(true)}}> Home</div>
            <div className="text-2xl"  onClick={()=>{setAllTaskShow(false)}}> Upload Your blog</div>

      
      </div>
    </>
  );                        
};
export default Navigation;
