import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';
import { Container, Typography, ButtonGroup, Button, Box } from '@mui/material';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>To-Do App</Typography>
      <TodoForm addTodo={addTodo} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <ButtonGroup variant="outlined">
          <Button onClick={() => setFilter('all')}>All</Button>
          <Button onClick={() => setFilter('completed')}>Completed</Button>
          <Button onClick={() => setFilter('pending')}>Pending</Button>
        </ButtonGroup>
      </Box>
      <TodoList todos={filteredTodos} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default TodoApp;

