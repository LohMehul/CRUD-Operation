import { v4 as uuidv4 } from "uuid"
import { makeAutoObservable } from 'mobx';
import { createContext } from "react";



// ------ class for increse and decrese count ------

// class CounterStore {
//   count = 0; // The State

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increment() { // Action
//     this.count++;
//   }

//   decrement() { // Action
//     this.count--;
//   }
// }

// export const counterStore = new CounterStore();





// ------ class for todo list using mobx ------

class Todo {
    id = uuidv4();
    title = "";
    complete = false;

    constructor(title) {
        makeAutoObservable(this);
        this.title = title;
    }

    toggleCompleted() {
        this.completed = !this.completed
    }
}


class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }
    addTodo(title) {
        this.todos.push(new Todo(title))
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo)=>todo.id !== id)
    }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);

