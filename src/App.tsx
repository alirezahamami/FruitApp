import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Fruits from './Fruits';
import Jar from './Jars';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(event.target.checked);
  };

  return (
    <Box className="app-container">
      {/* Header */}
      <Header toggle={toggle} onToggleChange={handleToggleChange} />

      {/* Main Content */}
      <Box className="main-content">
        <Fruits /> {/* LeftSection handles age, group, and button logic internally */}
        <Jar />
      </Box>
    </Box>
  );
};

export default App;
