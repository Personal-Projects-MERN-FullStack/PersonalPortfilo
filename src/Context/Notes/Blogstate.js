import Notecontext from "./Notecontext";
import { useState , useEffect} from "react";
const Blogstate=(props)=>{
   const [value, setvalue] = useState(false)
   const [loggedin, setloggedin] = useState(true)
   const [LoadedBlog, setLoadedBlog] = useState([])
   const [id, setid] = useState("")
   
  
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
       
        
       });
       
   }, []);
   
    
return(
    <Notecontext.Provider value={{value,loggedin,setvalue,setloggedin,LoadedBlog,id,setid}}>
        {props.children}
    </Notecontext.Provider>
);
}
export default Blogstate;