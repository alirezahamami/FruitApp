import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addtoJar, removeFromJar, deleteFromJar } from '../store/jarSlice';
import Piechart from '../components/Piechart';
import JarList from '../components/JarList';
import TotalCalories from '../components/TotalCalories';

const Jars: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    // Handlers for actions
    const handleAddToJar = (itemId: number, itemName: string, nutritions: { calories: number }) => {
        dispatch(addtoJar({ id: itemId, name: itemName, nutritions, quantity: 1 }));
    };

    const handleRemoveFromJar = (itemId: number) => {
        dispatch(removeFromJar(itemId));
    };

    const handleDeleteFromJar = (itemId: number) => {
        dispatch(deleteFromJar(itemId));
    };

    const getTotalCalories = () => {
        return cart.reduce((total, item) => total + (item.nutritions?.calories ?? 0) * item.quantity, 0);
    };

    return (
        <Box className="jars-container fruits-container">
            <Typography 
        variant="h6" 
        className='titleStyles'
      >
        Jar Container
      </Typography>
            <JarList
                items={cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    calories: item.nutritions?.calories ?? 0,
                }))}
                onAdd={(id) => handleAddToJar(id, cart.find(item => item.id === id)!.name, cart.find(item => item.id === id)!.nutritions!)}
                onRemove={handleRemoveFromJar}
                onDelete={handleDeleteFromJar}
            />
            <Divider className="jars-divider" />
            <TotalCalories total={getTotalCalories()} />
            <Box className="piechart-container">
                <Piechart cart={cart} />
            </Box>
        </Box>
    );
};

export default Jars;
