// import './App.css';
// import Home from './components/Home';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/edit" element={<Home/>} />
//             <Route path="/delete" element={<Home/>} />
//           </Routes>
//         </Router>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { DatePicker } from 'antd';

// const App = () => {
//   return <DatePicker />;
// };

// export default App;




// ------ class for increse and decrese count ------

// import React from "react";
// import { observer } from "mobx-react-lite";
// import { counterStore } from "./store";

// const App = observer(() => {
//   return (
//     <div>
//       <h1>Counter App using React+MobX</h1>
//       <p>Count: {counterStore.count}</p>
//       <button
//         onClick={() => {
//           counterStore.increment();
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           counterStore.decrement();
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// });

// export default App;




// ------ class for todo list using mobx ------
import React from 'react';
import { useContext } from "react";
import { observer } from "mobx-react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import { TodoStoreContext } from "./store";



const App = observer(() => {

  const store = useContext(TodoStoreContext);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Todo App using MobX+React</h1>
      <CreateTodo />
      <ul>
        {store.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
);

export default App;