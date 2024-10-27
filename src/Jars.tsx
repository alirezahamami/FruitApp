// src/Jars.js
import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { addtoJar, removeFromJar, deleteFromJar } from './store/jarSlice';
import Piechart from './Piechart'; // Import the Pie Chart Component

const Jars: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    // Handlers for actions
    const handleaddtoJar = (itemId: number, itemName: string, nutritions: { calories: number }) => {
        dispatch(addtoJar({ id: itemId, name: itemName, nutritions, quantity: 1 }));
    };

    const handleremoveFromJar = (itemId: number) => {
        dispatch(removeFromJar(itemId));
    };

    const handledeleteFromJar = (itemId: number) => {
        dispatch(deleteFromJar(itemId));
    };

    const getTotalCalories = () => {
        return cart.reduce((total, item) => total + (item.nutritions?.calories ?? 0) * item.quantity, 0);
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                position: 'relative',
            }}
        >
            <Typography variant="h6">Jar Container</Typography>
            <List>
                {cart.length === 0 ? (
                    <Typography>No items in the cart</Typography>
                ) : (
                    cart.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={`${item.name} x ${item.quantity}`}
                                secondary={`Calories: ${(item.nutritions?.calories ?? 0) * item.quantity}`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="add"
                                    onClick={() => handleaddtoJar(item.id, item.name, item.nutritions!)} // Pass item name and nutritions
                                >
                                    <AddIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="remove"
                                    onClick={() => handleremoveFromJar(item.id)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handledeleteFromJar(item.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                )}
            </List>

            <Divider sx={{ marginY: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ marginRight: '16px' }}>
                    Total Calories:
                </Typography>
                <Typography variant="h6">
                    {getTotalCalories()}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Piechart cart={cart} />
            </Box>

        </Box>
    );
};

export default Jars;
