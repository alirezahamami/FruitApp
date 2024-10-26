import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,Typography } from '@mui/material';

const LeftSection = () => {
  const [age, setAge] = useState<string | number>('');
  const [open, setOpen] = useState(false);

  const handleAgeChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        flex: 1,
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginRight: '8px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // Make the Box a positioned element
      }}
    >
      <FormControl
        sx={{
          position: 'absolute', // Position it absolutely within the Box
          top: '16px',           // Distance from the top
          right: '16px',         // Distance from the right
          minWidth: 120,
        }}
      >
        <InputLabel id="Group-By-select-label">Group By</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Group by"
          onChange={handleAgeChange}
        >
          <MenuItem value="Group by">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box>
         <Typography variant="h6">Left Section</Typography>
      </Box>
    </Box>
  );
};

export default LeftSection;
