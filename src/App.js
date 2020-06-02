import React from 'react';
import './App.css';
import Rechart from './Components/Rechart/Rechart';
import Strak from './Components/Strak/Strak';
import Material from './Components/materialui/Material';
import { Drawer } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      
      <Rechart></Rechart>
      <Strak></Strak>
      <Material></Material>
      <Drawer></Drawer>
    </div>
  );
}

export default App;
