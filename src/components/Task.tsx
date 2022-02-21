import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { Task } from '../app/types';
import { useAppDispatch } from '../app/hooks';
import { completedChange, taskRemoved } from '../features/tasks/todoSlice';

interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(completedChange(task.id));
  };

  const clickHandler = () => {
    dispatch(taskRemoved(task.id));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={clickHandler}>
          <DeleteForeverOutlined />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={toggleHandler} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': task.text }}
          />
        </ListItemIcon>
        <ListItemText primary={task.text} />
      </ListItemButton>
    </ListItem>
  );
};
