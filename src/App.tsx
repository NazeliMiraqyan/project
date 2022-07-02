import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './aplication/components/Home';
import Leftmenu from './aplication/components/leftMenu/leftSideMenu';



const App:React.FC=()=> {
  
  return (
    <div className='App'>
      <Leftmenu/>
    </div>
  );
}

export default App;
