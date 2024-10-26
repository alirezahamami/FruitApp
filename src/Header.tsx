import React from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';

interface HeaderProps {
  toggle: boolean;
  onToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ toggle, onToggleChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}
    >
      <Typography variant="h6">Fruit App</Typography>
      <FormControlLabel
        control={<Switch checked={toggle} onChange={onToggleChange} />}
        label="Table View"
      />
    </Box>
  );
};

export default Header;
