import Notecontext from "./Notecontext";
import { useState , useEffect} from "react";
const Blogstate=(props)=>{
   const [value, setvalue] = useState(false)
   const [loggedin, setloggedin] = useState(false)
   const [LoadedBlog, setLoadedBlog] = useState([])
   const [id, setid] = useState("")
   const [alert,setalert] = useState([])
   const [blog_loading, setblog_loading] = useState(true)
   const [otp, setotp] = useState()
  
   const showAlert = (message, type)=>{
    setalert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000);
   }
   
  
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
         })
         );
         
         setblog_loading(false)
        
       });
       
   }, []);
   
    
return(
    <Notecontext.Provider value={{otp,setotp,value,loggedin,setvalue,setloggedin,LoadedBlog,id,setid,alert,showAlert,blog_loading}}>
        {props.children}
    </Notecontext.Provider>
);
}
export default Blogstate;