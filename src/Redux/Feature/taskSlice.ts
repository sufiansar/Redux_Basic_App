// Redux/Feature/taskSlice.ts

import type { Itask, Priority } from "@/interface/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../StoreRedux";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "./userSlice";
// import Task from "@/pages/Tasks";

interface IinitialState {
  task: Itask[];
  filter: "all" | Priority;
}

const initialState: IinitialState = {
  task: [],
  filter: "all",
};

type DraftTask = Pick<
  Itask,
  "title" | "description" | "priority" | "dueDate" | "name" | "assignto"
>;

const createTask = (taskdata: DraftTask): Itask => {
  return {
    id: uuidv4(),
    iscompleted: false,
    ...taskdata,
  };
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskdata = createTask(action.payload);

      state.task.push(taskdata);
    },

    toggoleComplete: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) =>
        task.id === action.payload
          ? (task.iscompleted = !task.iscompleted)
          : task
      );
    },
    updateTask: (state, action: PayloadAction<"all" | Priority>) => {
      state.filter = action.payload;
    },

    deleteData: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action: PayloadAction<string>) => {
      state.task.forEach((task) => {
        if (task.assignto === action.payload) {
          task.assignto = null;
        }
      });
    });
  },
});

export const useSelectTask = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.task.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.task.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.task.filter((task) => task.priority === "high");
  } else {
    return state.todo.task;
  }
};

console.log(useSelectTask);

export const { addTask, toggoleComplete, deleteData, updateTask } =
  todoSlice.actions;
export default todoSlice.reducer;
