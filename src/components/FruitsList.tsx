import { Box } from '@mui/material';
import FruitCard from './FruitCard';
import GroupedAccordion from './GroupedAccordion';
import { Fruit, Group } from '../types';


interface FruitsListProps {
  fruits: Fruit[];
  groupedFruits: Record<string, Fruit[]>;
  group: Group;
  onAdd: (fruit: Fruit) => void;
  onAddAll: (fruits: Fruit[]) => void;
}

const FruitsList: React.FC<FruitsListProps> = ({ fruits, groupedFruits, group, onAdd, onAddAll }) => (
  <Box className={`fruits-list ${group === 'None' ? 'no-group' : ''}`}>
    {group === 'None'
      ? fruits.map((fruit) => <FruitCard key={fruit.id} fruit={fruit} onAdd={onAdd} />)
      : Object.entries(groupedFruits).map(([groupName, fruitsList]) => (
          <GroupedAccordion key={groupName} groupName={groupName} fruitsList={fruitsList} onAddAll={onAddAll} onAdd={onAdd} />
        ))
    }
  </Box>
);

export default FruitsList;
