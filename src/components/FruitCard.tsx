import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Fruit } from '../types'; // assuming types are in a separate file

interface FruitCardProps {
  fruit: Fruit;
  onAdd: (fruit: Fruit) => void;
}

const FruitCard: React.FC<FruitCardProps> = ({ fruit, onAdd }) => (
  <Card sx={{ maxWidth: 300, minHeight: 100, maxHeight: 150, mb: 2,backgroundColor: '#F6FCDF',borderRadius: '8px',border: '3px solid #ddd' }}>
      <CardContent >
        <Typography  variant="h5">{fruit.name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Calories: {fruit.nutritions.calories}</Typography>
      </CardContent>
    <CardActions sx={{ p: 0, justifyContent: "center", width: "100%" }}>
      <Button sx={{
    backgroundColor: '#6A9C89', // Custom background color
    color: '#fff', // Text color
    '&:hover': {
      backgroundColor: '#16423C', // Darker shade for hover effect
    }
  }} size="large" color="primary" fullWidth onClick={() => onAdd(fruit)}>+</Button>
    </CardActions>
  </Card>
);

export default FruitCard;
