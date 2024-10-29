import React from 'react';
import { Box, Switch, FormControlLabel } from '@mui/material';

interface HeaderProps {
  toggle: boolean;
  onToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ toggle, onToggleChange }) => {
  return (
    <Box className="header-container">
      <FormControlLabel 
        control={
          <Switch
            className="custom-switch"
            checked={toggle}
            onChange={onToggleChange}
          />
        }
        label="Table View"
      />
    </Box>
  );
};

export default Header;