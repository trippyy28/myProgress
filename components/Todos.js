import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../lib/firebase";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "todos");

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Todos;
