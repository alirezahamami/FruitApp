import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Define the type for nutrition and cart items
interface Nutrition {
    calories: number;
}

interface CartItem {
    id: number;
    name: string;
    nutritions?: Nutrition; // Optional if it might not always be present
    quantity: number;
}

// Define the props for CartPieChart
interface CartPieChartProps {
    cart: CartItem[]; // Array of cart items
}

const CartPieChart: React.FC<CartPieChartProps> = ({ cart }) => {
    // Prepare data for the pie chart
    const pieData = cart.map(item => ({
        name: item.name,
        value: (item.nutritions?.calories ?? 0) * item.quantity,
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560', '#845EC2', '#FF6699', '#66BBFF', '#FFCC00', '#9B59B6', '#2ECC71', '#E74C3C', '#3498DB', '#F39C12', '#1ABC9C', '#D35400', '#34495E', '#7D3C98', '#F1C40F', '#16A085'];
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={pieData}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
            >
                {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default CartPieChart;
