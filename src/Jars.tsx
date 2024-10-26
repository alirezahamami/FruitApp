import React from 'react';
import { Box,Typography } from '@mui/material';

const RightSection: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <Typography variant="h6">Right Section</Typography>
    </Box>
  );
};

export default RightSection;
