import Notecontext from "./Notecontext";
import { useState } from "react";
const Notestate=(props)=>{
   const [value, setvalue] = useState(false)
   const [loggedin, setloggedin] = useState(false)
    
return(
    <Notecontext.Provider value={{value,loggedin}}>
        {props.children}
    </Notecontext.Provider>
);
}
export default Notestate;