import logo from './logo.svg';
import React from 'react';

//props só se usa para leitura
const App = ({name, lastname}) => {
  //O código nao quer pegar o lastname
  console.log(name, lastname)
   return(
     <div>
       <h1>Essa é a nossa App Page</h1>
     </div>
   )
}

export default App;
