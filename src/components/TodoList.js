import React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompletion, deleteTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompletion={toggleCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
