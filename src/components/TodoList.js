import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          /> //for every element that i have in the array i add a Todo component, i also pass the infomation of my state to my Todo component so i can show the info
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
