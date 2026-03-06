import styles from "./pagelayout.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/todo/TodoList";
import { useNavigate } from "react-router-dom";
const TodoListPage = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const backServer = import.meta.env.VITE_BACKSERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/todos`)
      .then((res) => {
        if (res !== "") {
          setTodoList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const moveToInfo = (todoNo) => {
    navigate(`/info/${todoNo}`);
  };
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 목록</h3>
      <TodoList todoList={todoList} moveToInfo={moveToInfo} />
    </div>
  );
};

export default TodoListPage;
