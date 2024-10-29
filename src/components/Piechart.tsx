import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { CartItem, COLORS } from '../types'; // Adjust the path as necessary

// Define the props for CartPieChart
interface CartPieChartProps {
    cart: CartItem[]; // Array of cart items
}

const getPieData = (cart: CartItem[]) => {
    return cart.map(item => ({
        name: item.name,
        value: (item.nutritions?.calories ?? 0) * item.quantity,
    }));
};

const CartPieChart: React.FC<CartPieChartProps> = ({ cart }) => {
    // Memoize the pie data for performance optimization
    const pieData = useMemo(() => getPieData(cart), [cart]);

    if (pieData.length === 0) {
        return <div>No data available</div>; // Handle empty cart scenario
    }

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
