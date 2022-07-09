
import {useState , useEffect} from 'react';
import BlockOfBlog from './BlockOfBlog';
const AllBlogs = () => {
  const [LoadedBlog, setLoadedBlog] = useState([])
  // const [loading, setloading] = useState(true)
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

        
        setLoadedBlog(meetups.sort(function(a,b){
          return(
                new Date(b.DOB_of_blog_post).valueOf()-new Date(a.DOB_of_blog_post).valueOf()
          );
        }));
        // setloading(false);
        
      });
  }, []);
  return (
    
    <>
    {LoadedBlog.map((blogs)=>{
      return <BlockOfBlog key={blogs.id}  data={blogs}/> 
    })}
      
    </>
  );
};
export default AllBlogs;
