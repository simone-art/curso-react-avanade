import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
   return(
     <div>
         <Link to='/'>Voltar para a Home Page</Link>
       <h1>Essa é a nossa About Page</h1>
     </div>
   )
}

export default About;