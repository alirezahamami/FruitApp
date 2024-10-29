// src/components/JarItem.tsx
import React from 'react';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface JarItemProps {
    id: number;
    name: string;
    quantity: number;
    calories: number;
    onAdd: () => void;
    onRemove: () => void;
    onDelete: () => void;
}

const JarItem: React.FC<JarItemProps> = ({ id, name, quantity, calories, onAdd, onRemove, onDelete }) => (
    <ListItem key={id}>
        <ListItemText
            primary={`${name} x ${quantity}`}
            secondary={`Calories: ${calories * quantity}`}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="end" aria-label="add" onClick={onAdd}>
                <AddIcon />
            </IconButton>
            <IconButton edge="end" aria-label="remove" onClick={onRemove}>
                <RemoveIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </Box>
    </ListItem>
);

export default JarItem;
