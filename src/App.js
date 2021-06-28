import logo from './logo.svg';
import React from 'react';

//props só se usa para leitura
const App = (props) => {
  console.log(props)
   return(
     <div>
       <h1>Essa é a nossa App Page</h1>
     </div>
   )
}

export default App;
