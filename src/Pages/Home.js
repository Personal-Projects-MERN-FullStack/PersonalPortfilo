import React,{useContext} from 'react';
import Notecontext from '../Context/Notes/Notecontext';

const Home = () => {
const { loggedin } = useContext(Notecontext);  

    return (
    <div className='flex justify-center items-center h-screen w- screen dark:text-white'>
      {loggedin && <h1>Logged in user </h1>}
      {!loggedin && <h1>Logged out user </h1>}

    </div>

  )
}

export default Home