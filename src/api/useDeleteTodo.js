import React, { useCallback, useState } from "react";

const useDeleteTodo = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const deleteTodo = useCallback(async (id) => {
    setIsDeleting(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/deleteTodo/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the todo item");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  }, []);

  return { deleteTodo, isDeleting, error };
};

export default useDeleteTodo;
