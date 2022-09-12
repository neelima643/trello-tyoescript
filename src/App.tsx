import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import TopNav from './components/top-nav/TopNav';
import Cards from './components/card/Card';
import Sidenav from './components/side-nav/SideNav';

function App() {
  return (
    <body>
     <TopNav/>
     <div className='maindiv'>
      <div className='subdiv1'>
        <Sidenav />
      </div>
      <div className='subdiv2'>
        <Cards />
      </div>
      
     </div>
     
    </body>
  );
}

export default App;
