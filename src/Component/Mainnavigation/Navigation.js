const Navigation = ({setAllTaskShow,AllTaskShow}) => {
    
  return (
    <>
      <div className=" w-auto h-12 rounded-b-xl rounded-t-sm  px-4  flex flex-row items-center justify-around">
       
            <div className={`${ AllTaskShow ? 'Text-2xl' : 'text-sm'}`,'cursor-pointer'}  onClick={()=>{setAllTaskShow(true)}}> Home</div>
            <div className={`${ AllTaskShow ? 'Text-xl' : 'text-2xl'}`,'cursor-pointer'}  onClick={()=>{setAllTaskShow(false)}}> Upload Your blog</div>

      
      </div>
    </>
  );                        
};
export default Navigation;
