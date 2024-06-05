import Cards from "./components/Cards";
import TodoCreate from "./components/TodoCreate";
import "./index.css";
import useGetTodo from "./api/useGetTodo";
import useDeleteTodo from "./api/useDeleteTodo";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const fetchedTodos = useGetTodo();
  const { deleteTodo, isDeleting, error } = useDeleteTodo();

  useEffect(() => {
    setTodos(fetchedTodos);
  }, [fetchedTodos]);

  const handleDelete = useCallback(
    async (id) => {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    },
    [todos, deleteTodo]
  );
  return (
    <div className="mx-auto bg-primary-200 h-screen ">
      <header className="font-poppins flex justify-center text-3xl ">
        Todo List
      </header>
      <div className="w-full text-sm py-2">
        <TodoCreate />
        <Cards todos={todos} onDelete={handleDelete} />
        {isDeleting && <p>Deleting...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}

export default App;
