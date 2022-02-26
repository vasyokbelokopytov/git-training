import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../app/types';

interface TasksState {
  tasks: Task[];
  currentTask: number | null;
}

const initialState: TasksState = {
  tasks: [],
  currentTask: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
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

export const { completedChange, taskCreated, taskRemoved } = tasksSlice.actions;
export default tasksSlice.reducer;
