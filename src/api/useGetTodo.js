import { useEffect, useState } from "react";

const useGetTodo = () => {
  const [allTodo, setAllTodo] = useState([]);
  const getAllTodo = async () => {
    const todosData = await fetch("http://localhost:3001/api/v1/getAllTodo");
    const json = await todosData.json();
    console.log(json, "xxxxxxxxxxxxx");
    setAllTodo(json.data);
  };
  useEffect(() => {
    getAllTodo();
  }, []);
  return allTodo;
};

export default useGetTodo;
