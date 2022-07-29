import { Container } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Topics from "../components/Topics";
import TodoList from "../components/Todos";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}
