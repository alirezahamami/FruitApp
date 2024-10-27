// src/store/fruitsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Nutrition {
  calories: number;
}

interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutrition;
}

interface FruitsState {
  fruits: Fruit[];
  loading: boolean;
}

const initialState: FruitsState = {
  fruits: [],
  loading: false,
};

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    setFruits(state, action: PayloadAction<Fruit[]>) {
      state.fruits = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setFruits, setLoading } = fruitsSlice.actions;
export default fruitsSlice.reducer;
