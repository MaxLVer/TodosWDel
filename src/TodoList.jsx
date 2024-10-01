import { useState } from "react";

function TodoList() {
const [state, setState] = useState({ desc: '', date: '' });
const [todos, setTodos] = useState([]);

const handleDesc = (event) => {
    setState({ ...state, desc: event.target.value });
  };

  const handleDate = (event) => {
    setState({ ...state, date: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, { description: state.desc, date: state.date }]);
    setState({ desc: '', date: '' });
  }; //Descirption ei nollaannu Todos-listan päivittyessä?

  const handleDel = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

return(
    <div>
    <div>
        Description: <input type="text" onChange={handleDesc} value={state.description} /> 
        Date: <input type="text" onChange={handleDate} value={state.date} />
        <button onClick={addTodo}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
              <td><button onClick={() => handleDel(index)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  
  export default TodoList;