import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';

// Load environment variables used for production port
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.resolve('dist')));

// Function to fetch fruit data from the API
const fetchFruitData = async () => {
  try {
    const response = await axios.get('https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws');
    return response.data;
  } catch (error) {
    console.error('Error fetching fruit data:', error);
    throw new Error('Failed to fetch fruit data');
  }
};

// Endpoint to get fruit data
app.get('/api', async (req, res) => {
  try {
    const fruitData = await fetchFruitData();
    const processedData = fruitData.map(({ nutritions, ...fruit }) => ({
      ...fruit,
      calories: nutritions.calories,
    }));
    res.status(200).json(processedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
