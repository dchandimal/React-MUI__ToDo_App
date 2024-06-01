import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TodoItem = ({ todo, toggleCompletion, deleteTodo }) => {
  return (
    <ListItem
      sx={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        bgcolor: todo.completed ? 'grey.300' : 'background.paper',
        mb: 1,
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <ListItemText primary={todo.title} secondary={todo.description} />
      <Box>
        <Button
          onClick={() => toggleCompletion(todo.id)}
          variant="contained"
          color={todo.completed ? 'secondary' : 'primary'}
          sx={{ mr: 1 }}
        >
          {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
        </Button>
        <Button
          onClick={() => deleteTodo(todo.id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
