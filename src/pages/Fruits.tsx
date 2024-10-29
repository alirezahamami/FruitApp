import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Box,Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FruitTable from '../components/FruitTable';
import GroupSelector from '../components/GroupSelector';
import FruitsList from '../components/FruitsList';
import { addtoJar } from '../store/jarSlice';
import { setFruits, setLoading as setFruitsLoading } from '../store/fruitsSlice';
import { RootState } from '../store/store';
import { Fruit, Group } from '../types';

const Fruits = ({ toggle }: { toggle: boolean }) => {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<Group>('None');
  const dispatch = useDispatch();
  const { fruits } = useSelector((state: RootState) => state.fruits);

  useEffect(() => {
    const fetchFruits = async () => {
      dispatch(setFruitsLoading(true));
      try {
        
        const response = await axios.get('/api');
        const fruitData = response.data.map((fruit: Fruit) => ({
          ...fruit,
          calories: fruit.nutritions.calories,
        }));
        dispatch(setFruits(fruitData));
      } catch (error) {
        console.error('Error fetching fruits data:', error);
      } finally {
        dispatch(setFruitsLoading(false));
      }
    };
    fetchFruits();
  }, [dispatch]);

  const handleAdd = useCallback((fruit: Fruit) => {
    dispatch(addtoJar({ ...fruit, quantity: 1 }));
  }, [dispatch]);

  const handleAddAll = useCallback((fruitsList: Fruit[]) => {
    fruitsList.forEach(fruit => {
      dispatch(addtoJar({ ...fruit, quantity: 1 }));
    });
  }, [dispatch]);

  const groupedFruits = fruits.reduce((acc, fruit) => {
    const key = group === 'None' ? 'All Fruits' : (fruit[group as keyof Fruit] ?? 'Others') as string;
    if (!acc[key]) acc[key] = [];
    acc[key].push(fruit);
    return acc;
  }, {} as Record<string, Fruit[]>);

  return (
    <Box 
      className="fruits-container"
    >
      <Typography 
        variant="h6" 
        className='titleStyles'
      >
        Fruits
      </Typography>

      <Box>
        {toggle ? (
          <FruitTable fruitData={fruits} />
        ) : (
          <>
            <GroupSelector open={open} group={group} setOpen={setOpen} setGroup={setGroup} />
            <FruitsList fruits={fruits} groupedFruits={groupedFruits} group={group} onAdd={handleAdd} onAddAll={handleAddAll} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Fruits;
