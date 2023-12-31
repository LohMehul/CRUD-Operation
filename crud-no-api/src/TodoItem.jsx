import React from 'react';
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { TodoStoreContext } from "./store";


const TodoItem = observer(({ todo }) => {
    const store = useContext(TodoStoreContext)
    console.log("todoitem is called");
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => todo.toggleCompleted()}
            />
            <span>{todo.title}</span>
            <button onClick={() => store.removeTodo(todo.id)}>Remove</button>
        </li>
    );
}
);

export default TodoItem;