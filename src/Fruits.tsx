import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, FormControl, InputLabel, CardActionArea, CardActions, Button, MenuItem, Select, SelectChangeEvent, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FruitTable from './FruitTable';

interface Nutrition {
  calories: number;
}

interface FruitTable {
  fruitData: Fruit[];
}

interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutrition;
}

type Group = 'None' | 'family' | 'order' | 'genus';

const Fruits = ({ toggle }: { toggle: boolean }) => {
  const [open, setOpen] = useState(false);
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [group, setGroup] = useState<Group>('None');

  const handleGroupChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as Group);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get('/api/');
        const fruitData = response.data.map((fruit: Fruit) => ({
          ...fruit,
          calories: fruit.nutritions.calories,
        }));
        setFruits(fruitData);
      } catch (error) {
        console.error('Error fetching fruits data:', error);
      }
    };
    fetchFruits();
  }, []);

  const groupedFruits = fruits.reduce((acc, fruit) => {
    const key: string = group === 'None' ? 'All Fruits' : (fruit[group as keyof Fruit] as string);
    if (!acc[key]) acc[key] = [];
    acc[key].push(fruit);
    return acc;
  }, {} as Record<string, Fruit[]>);

  return (
    <Box sx={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {toggle ? (
        <FruitTable fruitData={fruits} />
      ) : (
        <>
          <FormControl sx={{ position: 'absolute', top: '16px', right: '16px', minWidth: 90 }}>
            <InputLabel id="group-by-select-label">Group By</InputLabel>
            <Select
              labelId="group-select-label"
              id="group-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={group}
              label="Group by"
              onChange={handleGroupChange}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="family">Family</MenuItem>
              <MenuItem value="order">Order</MenuItem>
              <MenuItem value="genus">Genus</MenuItem>
            </Select>
          </FormControl>


          <Box
            sx={{
              marginTop: '80px',
              ...(group === 'None' ? { display: 'flex', flexWrap: 'wrap', gap: 2 } : {}),
            }}
          >
            {group === 'None' ? (
              fruits.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 300,
                    minHeight: 100,
                    maxHeight: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    border: '3px solid #ddd',
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Calories: {item.nutritions.calories}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ padding: 0 }} style={{ justifyContent: "center", width: "100%" }}>
                    <Button
                      size="large"
                      color="primary"
                      fullWidth
                      style={{ textAlign: "center" }}
                    >
                      +
                    </Button>
                  </CardActions>
                </Card>
              ))
            ) : (
              Object.entries(groupedFruits).map(([groupName, fruitsList]) => (
                <Accordion key={groupName}>

                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                    <Typography variant="h6">{groupName}</Typography>

                  </AccordionSummary>
                  <Button size="large" color="primary">
                    Add all fruits
                  </Button>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      {fruitsList.map((item) => (
                        <Grid
                          key={item.id}
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                        >
                          <Card
                            sx={{
                              maxWidth: 300,
                              minHeight: 100,
                              maxHeight: 150,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              marginBottom: '16px',
                              border: '1px solid #ddd',
                            }}
                          >
                            <CardActionArea>
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  Calories: {item.nutritions.calories}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ padding: 0 }} style={{ justifyContent: "center", width: "100%" }}>
                              <Button
                                size="large"
                                color="primary"
                                fullWidth
                                style={{ textAlign: "center" }}
                              >
                                +
                              </Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            )}
          </Box>
        </>
      )}
    </Box>

  );
};

export default Fruits;
