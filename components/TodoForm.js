import { Button, TextField } from "@mui/material";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";

function TodoForm() {
  const [todo, setTodo] = useState({ title: "", detail: "" });
  const onSubmit = async () => {
    const collectionRef = collection(db, "todos");
    const docRef = await addDoc(collectionRef, {
      ...todo,
      timestamp: serverTimestamp(),
    });
    alert(`Todo with id ${docRef.id} is added successfully`);
    setTodo({ title: "", details: "" });
  };
  return (
    <div>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <Button onClick={onSubmit} sx={{ mt: 3 }} variant="contained">
        Add a new todo
      </Button>
    </div>
  );
}

export default TodoForm;
