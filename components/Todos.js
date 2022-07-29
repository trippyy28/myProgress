import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { Todo } from "./Todo";

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
        <Todo
          key={todo.id}
          title={todo.title}
          detail={todo.detail}
          timpestamp={todo.timestamp}
        />
      ))}
    </div>
  );
};

export default Todos;
