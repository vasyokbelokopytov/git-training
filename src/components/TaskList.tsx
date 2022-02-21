import { Box, List, Typography } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import { TaskItem } from './Task';

export const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  if (tasks.length) {
    return (
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    );
  }

  return (
    <Box>
      <Typography variant="h5" component="span">
        No task yet
      </Typography>
    </Box>
  );
};
