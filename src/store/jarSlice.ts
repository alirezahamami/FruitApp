import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JarItem {
  id: number;
  name: string;
  quantity: number;
  nutritions?: {
    calories: number;
  };
}

interface Nutrition {
  calories: number;
}

interface JarState {
  cart: JarItem[];
}

const initialState: JarState = {
  cart: [],
};

const jarSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoJar: (state, action: PayloadAction<{ id: number; name: string; nutritions: Nutrition; quantity?: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      const quantity = action.payload.quantity ?? 1;

      if (item) {
        item.quantity += quantity; // Increment quantity if item exists
      } else {
        // Push new item with all required properties
        state.cart.push({ 
          id: action.payload.id, 
          name: action.payload.name, 
          quantity, 
          nutritions: action.payload.nutritions // Add the full nutritions object
        });
      }
    },
    removeFromJar: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity if greater than 1
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload); // Remove item if quantity is 1 or less
      }
    },
    deleteFromJar: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload); // Remove item directly
    },
  },
});

export const { addtoJar, removeFromJar, deleteFromJar } = jarSlice.actions;
export default jarSlice.reducer;
