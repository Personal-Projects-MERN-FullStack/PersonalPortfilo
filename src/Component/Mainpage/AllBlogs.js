import img from './blog.jpg'
import {useState , useEffect} from 'react';
import BlockOfBlog from './BlockOfBlog';
const AllBlogs = () => {
  const [LoadedBlog, setLoadedBlog] = useState([])
  useEffect(() => {
      
    fetch(
      'https://bloging-website-30ee1-default-rtdb.firebaseio.com/blogpostdata.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        
        setLoadedBlog(meetups);
        
      });
  }, []);
  return (
    
    <>
    {LoadedBlog.map((blogs)=>{
      return <BlockOfBlog data={blogs}/>
    })}
      
    </>
  );
};
export default AllBlogs;
