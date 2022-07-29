import { Container } from "@mui/system";
import TodoList from "../components/Todos";
import TodoForm from "../components/TodoForm";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <TodoForm />
      <TodoList />
    </Container>
  );
}
