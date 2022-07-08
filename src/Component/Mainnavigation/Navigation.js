const Navigation = ({setAllTaskShow,AllTaskShow}) => {
    
  return (
    <>
      <div className=" w-auto h-12 rounded-b-xl rounded-t-sm  px-4  flex flex-row items-center justify-around">
       
            <div className={`${ AllTaskShow ? 'Text-2xl' : 'text-sm'}`} onClick={()=>{setAllTaskShow(true)}}> All tasks</div>
            <div className={`${ AllTaskShow ? 'Text-xl' : 'text-2xl'}`} onClick={()=>{setAllTaskShow(false)}}> Add task</div>

      
      </div>
    </>
  );                        
};
export default Navigation;
