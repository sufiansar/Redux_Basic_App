import type { Iuser } from "@/interface/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { RootState } from "../StoreRedux";

// Slice state type
interface UserState {
  user: Iuser[];
}

// Initial state
const initialState: UserState = {
  user: [],
};

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Iuser>) => {
      const newUser: Iuser = {
        ...action.payload,
        id: uuidv4(),
      };
      state.user.push(newUser);
    },

    deleteUser: (state, action: PayloadAction<string>) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
  },
});

// Selector
export const userSelect = (state: RootState) => state.user.user;

// Exports
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
