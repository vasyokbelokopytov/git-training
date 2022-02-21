import { CssBaseline, Container, Box, Stack } from '@mui/material';
import React from 'react';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Container
          fixed
          sx={{
            height: '90%',
            borderRadius: '5px',
          }}
        >
          <Stack spacing={2}>
            <Form />
            <TaskList />
          </Stack>
        </Container>
      </Box>
    </>
  );
};
