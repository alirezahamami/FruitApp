import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;


const fetchFruitData = async () => {
    const response = await axios.get('https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws'); 
    return response.data; 
};

// Endpoint to get fruits
app.get('/api', async (req, res) => {
    try {
        const fruitData = await fetchFruitData();
        const processedData = fruitData.map((fruit) => ({
            ...fruit,
            calories: fruit.nutritions.calories,
        }));
        res.status(200).json(processedData);
    } catch (error) {
        console.error('Error fetching fruit data:', error);
        res.status(500).json({ error: 'Failed to fetch fruit data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
