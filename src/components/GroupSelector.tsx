import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Group } from '../types';

interface GroupSelectorProps {
  open: boolean;
  group: Group;
  setOpen: (open: boolean) => void;
  setGroup: Dispatch<SetStateAction<Group>>;
}

const GroupSelector: React.FC<GroupSelectorProps> = ({ open, group, setOpen, setGroup }) => {
  const handleGroupChange = (event: SelectChangeEvent<string>) => setGroup(event.target.value as Group);

  return (
    <FormControl className="group-selector" >
      <InputLabel id="group-select-label">Group By</InputLabel>
      <Select 
        labelId="group-select-label"
        id="group-select"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={group}
        label="Group by"
        onChange={handleGroupChange}
      >
        <MenuItem value="None"><em>None</em></MenuItem>
        <MenuItem value="family">Family</MenuItem>
        <MenuItem value="order">Order</MenuItem>
        <MenuItem value="genus">Genus</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GroupSelector;
