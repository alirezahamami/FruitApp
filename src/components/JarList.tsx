// src/components/JarList.tsx
import React from 'react';
import { List, Typography } from '@mui/material';
import JarItem from './JarItem';

interface JarListProps {
    items: Array<{ id: number; name: string; quantity: number; calories: number }>;
    onAdd: (id: number) => void;
    onRemove: (id: number) => void;
    onDelete: (id: number) => void;
}

const JarList: React.FC<JarListProps> = ({ items, onAdd, onRemove, onDelete }) => (
    <List>
        {items.length === 0 ? (
            <Typography>No items in the Jam</Typography>
        ) : (
            items.map(item => (
                <JarItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    calories={item.calories}
                    onAdd={() => onAdd(item.id)}
                    onRemove={() => onRemove(item.id)}
                    onDelete={() => onDelete(item.id)}
                />
            ))
        )}
    </List>
);

export default JarList;
