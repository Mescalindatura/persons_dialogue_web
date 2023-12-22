import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dialogueSlice from "../features/dialogueSlice";

export const store = configureStore({
  reducer: {dialogueSlice},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
