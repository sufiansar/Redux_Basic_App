// Redux/Feature/taskSlice.ts

import type { Itask } from "@/interface/type";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../StoreRedux";

interface IinitialState {
  task: Itask[];
}

const initialState: IinitialState = {
  task: [
    {
      id: 1,
      name: "sgfjk",
      title: "Hey Developer",
      description: "Create new slice",
      dueDate: "2023-03-30",
      iscompleted: false,
      priority: "high",
    },
    {
      id: 2,
      name: "sgfjk",
      title: "Hey Developer",
      description: "Create new slice",
      dueDate: "2023-03-30",
      iscompleted: false,
      priority: "low",
    },
  ],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const useSelectTask = (state: RootState) => {
  return state.todo.task;
};

console.log(useSelectTask);

export default todoSlice.reducer;
