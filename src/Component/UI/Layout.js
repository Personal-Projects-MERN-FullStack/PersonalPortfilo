import React,{useContext} from 'react';
import Navigation from '../Mainnavigation/Navigation';
import Alert from '../Util/Alert'
import Notecontext from '../../Context/Notes/Notecontext';
const Layout=(props)=>{
const value = useContext(Notecontext)
    return(
        <div className="bg-blue-300  ">
         <Navigation/> 
         <Alert alert={value.alert}/>  
        {props.children}
        </div>
    );

}
export default Layout;