import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../app/types';

interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    taskCreated: (state, { payload }: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now(),
        completed: false,
        text: payload,
      });
    },

    taskRemoved: (state, { payload }: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },

    completedChange: (state, { payload }: PayloadAction<number>) => {
      state.tasks.forEach((task) => {
        if (task.id === payload) {
          task.completed = !task.completed;
        }
      });
    },
  },
});

export const { completedChange, taskCreated, taskRemoved } = todoSlice.actions;
export default todoSlice.reducer;
