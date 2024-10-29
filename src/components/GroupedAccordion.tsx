import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import FruitCard from './FruitCard';
import { Fruit } from '../types';

interface GroupedAccordionProps {
  groupName: string;
  fruitsList: Fruit[];
  onAddAll: (fruits: Fruit[]) => void;
  onAdd: (fruit: Fruit) => void;
}

const GroupedAccordion: React.FC<GroupedAccordionProps> = ({ groupName, fruitsList, onAddAll, onAdd }) => (
  <Accordion 
  sx={{backgroundColor:'#FCFFE0', marginBottom:2,borderRadius:'8px'}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{groupName}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={2}> <>
        {fruitsList.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} onAdd={onAdd} />
        ))}
        <Card
          sx={{
            maxWidth: 150,
            minHeight: 100,
            maxHeight: 150,
            mb: 2,
            backgroundColor: '#F6FCDF',
            borderRadius: '8px',
            border: '3px solid #ddd',
            transition: 'background-color 0.3s ease', // Smooth transition
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#6A9C89', // Set background color to transparent on hover
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%', // Adjust the size of the "+" sign
            },
          }}
        >
          <CardContent onClick={() => onAddAll(fruitsList)}>
            <Typography variant="h5" align="center" >Add All</Typography>
            <br />
            <Typography variant="h5" align="center">++</Typography>
          </CardContent>
        </Card>

      </>
      </Grid>

    </AccordionDetails>
  </Accordion>
);

export default GroupedAccordion;
