import { configureStore } from '@reduxjs/toolkit';
import fruitsReducer from './fruitsSlice';
import jarReducer from './jarSlice';

const store = configureStore({
  reducer: {
    fruits: fruitsReducer,
    cart: jarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
