import Cards from "./components/Cards";
import TodoCreate from "./components/TodoCreate";
import "./index.css";
import useGetTodo from "./api/useGetTodo";
function App() {
  const todos=useGetTodo();
  return (
    <div className="mx-auto bg-primary-200 h-screen ">
      <header className="font-poppins flex justify-center text-3xl ">Todo List</header>
      <div className="w-full text-sm py-2">
        <TodoCreate />
        <Cards todos={todos} />
      </div>
    </div>
  );
}

export default App;
