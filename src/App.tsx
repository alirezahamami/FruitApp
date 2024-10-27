import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Fruits from './components/Fruits';
import Jar from './components/Jars';
import '../src/styles/App.css';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(event.target.checked);
  };

  return (
    <Box className="app-container">
      <Header toggle={toggle} onToggleChange={handleToggleChange} />
      <Box className="main-content">
        <Fruits toggle={toggle}/>  
        <Jar />
      </Box>
    </Box>
  );
};

export default App;
