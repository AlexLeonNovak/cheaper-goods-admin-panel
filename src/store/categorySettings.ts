import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface CategoriesSlice {
  showDeleted: boolean;
}

const initialState: CategoriesSlice = {
  showDeleted: false,
};

export const categoriesSlice = createSlice({
  name: 'categorySettings',
  initialState,
  reducers: {
    toggleShowDeleted: state => {
      state.showDeleted = !state.showDeleted;
    },
  },
});

export const { toggleShowDeleted } = categoriesSlice.actions;
export const selectShowDeleted = (state: RootState) => state.categorySettings.showDeleted;

export default categoriesSlice.reducer;
