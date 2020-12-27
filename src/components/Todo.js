import React from "react";
//todo is the item that we click on, we pass this on TodoList
const Todo = ({ text, todo, todos, setTodos }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); //filter all the todos that are diferent from the todo that was click on
    //console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          //filter the array until i find the item that has the same id that the item that was click
          return {
            ...item,
            completed: !item.completed, //with ...item im saying leave all the other properties the same and modify just the completed property
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
