// types.ts

export interface Nutrition {
  calories: number;
}

export interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutrition;
}

export interface CartItem {
  id: number;
  name: string;
  nutritions?: Nutrition; // Optional, as it may not always be present
  quantity: number;
}


export type Group = 'None' | 'family' | 'order' | 'genus';

// Define a type for colors
export type Color = 
| '#0088FE' 
| '#00C49F' 
| '#FFBB28' 
| '#FF8042' 
| '#FF4560' 
| '#845EC2' 
| '#FF6699' 
| '#66BBFF' 
| '#FFCC00' 
| '#9B59B6' 
| '#2ECC71' 
| '#E74C3C' 
| '#3498DB' 
| '#F39C12' 
| '#1ABC9C' 
| '#D35400' 
| '#34495E' 
| '#7D3C98' 
| '#F1C40F' 
| '#16A085';

// Export the colors array
export const COLORS: Color[] = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560', 
  '#845EC2', '#FF6699', '#66BBFF', '#FFCC00', '#9B59B6', 
  '#2ECC71', '#E74C3C', '#3498DB', '#F39C12', '#1ABC9C', 
  '#D35400', '#34495E', '#7D3C98', '#F1C40F', '#16A085'
];
