
import {useContext} from 'react';
import BlockOfBlog from './BlockOfBlog';
import Notecontext from '../../Context/Notes/Notecontext';
const AllBlogs = () => {
 const value = useContext(Notecontext)
  return (
    
    <>
    
    {value.LoadedBlog.map((blogs)=>{
      return (<>  <BlockOfBlog key={blogs.id}  data={blogs}/> </>)
    })}
      
    </>
  );
};
export default AllBlogs;
