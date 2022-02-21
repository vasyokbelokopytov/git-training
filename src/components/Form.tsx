import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { taskCreated } from '../features/tasks/todoSlice';

export const Form: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    if (taskText.trim() !== '') {
      dispatch(taskCreated(taskText));
      setTaskText('');
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        variant="standard"
        sx={{ flexGrow: 1 }}
        label="Your task"
        value={taskText}
        onChange={changeHandler}
      />
      <Button onClick={clickHandler}>Add task</Button>
    </Stack>
  );
};
