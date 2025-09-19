import { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState(''); // State for the input field

  const handleSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim()) { // Only add if input is not empty
      addTodo({
        id: Date.now(), // Unique ID for the todo
        text, // The todo text
      });
      setText(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;