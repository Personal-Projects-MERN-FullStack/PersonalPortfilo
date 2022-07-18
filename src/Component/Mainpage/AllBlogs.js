
import {useContext} from 'react';
import BlockOfBlog from './BlockOfBlog';
import Notecontext from '../../Context/Notes/Notecontext';
import Loading from '../Util/Loading'
const AllBlogs = () => {
 const {LoadedBlog,blog_loading} = useContext(Notecontext)

 if(LoadedBlog.length === 0){
  return  <div className='flex justify-center items-center h-screen w- screen animate-pulse'>
  <h1 className='text-2xl font-bold text-red-900'>Be first to Add blog</h1>
 </div>
   

 }
 else if(blog_loading){
  return <Loading/>
 }

  return (
    
    <>
    
    {LoadedBlog.map((blogs)=>{
      return (<li key={blogs.id}>  <BlockOfBlog  data={blogs}/> </li>)
    })}
      
    </>
      );
};
export default AllBlogs;
