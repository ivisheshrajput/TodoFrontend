import React from "react";

const useCreateTodo = () => {
  const createTodo = async (title, description) => {
    try {
      const createData = await fetch(
        `http://localhost:3001/api/v1/createTodo`,
        {
          method: "POST",

          //In post use these
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );
      if (!createData.ok) {
        return "Data is not created";
      }
      const dataCreated = await createData.json();
      return dataCreated.data;
    } catch (err) {
      console.log(err);
    }
  };
  return { createTodo };
};

export default useCreateTodo;
