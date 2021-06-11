import React from 'react';
import Form from './Form';
import './App.css';
import logo from './img/librix-logo.png'


function App() {
  return (
    <div >
     <div className='logo-ce'> 
       <img className='logo' src={logo} alt="logo" />
     </div>
      <h1>Welcome and thanks for your visit! </h1>
    
    <Form />
      </div>
  );
}

export default App;
