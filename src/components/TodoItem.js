import React from 'react';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <div className="listItem">
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <li>{itemProp.title}</li>
      <button onClick={() => delTodo(itemProp.id)} type="button">Delete</button>
    </div>
  );
};

export default TodoItem;
