import { useState, useContext } from 'react';
import { TodoStoreContext } from "./store";
import { observer } from 'mobx-react';



const CreateTodo = observer(() => {
    const [title, setTitle] = useState('');
    const store = useContext(TodoStoreContext);
    console.log("create todo list is called");
    const handlesubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            store.addTodo(title.trim());
            setTitle("");
        }
        // console.log("target",e.target);
        // console.log("target value",e.target.value);
    };
    
    return(
        <>
            <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Add Todo' value={title} onChange={(e)=> setTitle(e.target.value)} />
            <button type="submit">Add</button>
            </form>
        </>
    )
});

export default CreateTodo;