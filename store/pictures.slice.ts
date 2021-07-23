import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';

interface IPicture {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: find the good dispatch types
interface ReturnUseCategoriesFromStore {
  pictures: IPicture[];
  dispatchInitSate: (payload: IPicture[]) => {
    type: string;
    payload: IPicture[];
  };
  dispatchDeletePicture: (payload: string) => {
    type: string;
    payload: string;
  };
  dispatchAddPicture: (payload: IPicture) => {
    type: string;
    payload: IPicture;
  };
  dispatchUpdatePicture: (payload: { id: string; name: string }) => {
    type: string;
    payload: { id: string; name: string };
  };
  dispatchResetState: () => {
    type: string;
  };
}

const initialState: IPicture[] = [];

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    initSate: (state, action: PayloadAction<IPicture[]>) => {
      return (state = action.payload);
    },

    addPicture: (state, action: PayloadAction<IPicture>) => {
      state.push(action.payload);
    },

    updatePicture: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const index = state.findIndex((picture) => picture.id === action.payload.id);
      const updatedPicture = { ...state[index], name: action.payload.name };
      state.splice(index as number, 1, updatedPicture);
    },

    deletePicture: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((picture) => picture.id === action.payload);
      state.splice(index as number, 1);
    },

    resetState: () => initialState,
  },
});

export const { initSate, addPicture, updatePicture, deletePicture, resetState } = picturesSlice.actions;

export const useCategoriesFromStore = (): ReturnUseCategoriesFromStore => {
  const pictures = useSelector((state: RootState) => state.pictures);
  const dispatch = useDispatch();
  const dispatchInitSate = (payload: IPicture[]) => dispatch(initSate(payload));
  const dispatchAddPicture = (payload: IPicture) => dispatch(addPicture(payload));
  const dispatchUpdatePicture = (payload: { id: string; name: string }) => dispatch(updatePicture(payload));
  const dispatchDeletePicture = (payload: string) => dispatch(deletePicture(payload));
  const dispatchResetState = () => dispatch(resetState());
  return {
    pictures,
    dispatchInitSate,
    dispatchDeletePicture,
    dispatchResetState,
    dispatchAddPicture,
    dispatchUpdatePicture,
  };
};

export default picturesSlice.reducer;
