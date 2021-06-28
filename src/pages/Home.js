import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
   return(
     <div>
     <Link to='/about'>Ir paga a página sobre</Link>
       <h1>Essa é a nossa Home Page</h1>
     </div>
   )
}

export default Home;
