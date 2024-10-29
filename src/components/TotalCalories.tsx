// src/components/TotalCalories.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface TotalCaloriesProps {
    total: number;
}

const TotalCalories: React.FC<TotalCaloriesProps> = ({ total }) => (
    <Box className="total-calories-container">
        <Typography variant="h6" className="total-calories-text">
            Total Calories:
        </Typography>
        <Typography variant="h6">
            {total}
        </Typography>
    </Box>
);

export default TotalCalories;
