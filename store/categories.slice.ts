import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';

interface Category {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: find the good dispatch types
interface ReturnUseCategoriesFromStore {
  categories: Category[];
  dispatchInitSate: (payload: Category[]) => {
    type: string;
    payload: Category[];
  };
  dispatchDeleteCategory: (payload: string) => {
    type: string;
    payload: string;
  };
  dispatchAddCategory: (payload: Category) => {
    type: string;
    payload: Category;
  };
  dispatchResetState: () => {
    type: string;
  };
}

const initialState: Category[] = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initSate: (state, action: PayloadAction<Category[]>) => {
      return (state = action.payload);
    },

    addCategory: (state, action: PayloadAction<Category>) => {
      state.push(action.payload);
    },

    deleteCategory: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((category) => category.id === action.payload);
      state.splice(index as number, 1);
    },

    resetState: () => initialState,
  },
});

export const { initSate, addCategory, deleteCategory, resetState } = categoriesSlice.actions;

export const useCategoriesFromStore = (): ReturnUseCategoriesFromStore => {
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();
  const dispatchInitSate = (payload: Category[]) => dispatch(initSate(payload));
  const dispatchAddCategory = (payload: Category) => dispatch(addCategory(payload));
  const dispatchDeleteCategory = (payload: string) => dispatch(deleteCategory(payload));
  const dispatchResetState = () => dispatch(resetState());
  return {
    categories,
    dispatchInitSate,
    dispatchDeleteCategory,
    dispatchResetState,
    dispatchAddCategory,
  };
};

export default categoriesSlice.reducer;
