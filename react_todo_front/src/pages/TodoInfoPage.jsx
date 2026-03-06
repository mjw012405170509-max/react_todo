import { useEffect, useState } from "react";
import styles from "./pagelayout.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import TodoInfo from "../components/todo/TodoInfo";

const TodoInfoPage = () => {
  const [todo, setTodo] = useState({});
  const param = useParams();
  const todoNo = param.todoNo;
  const backServer = import.meta.env.VITE_BACKSERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/todos/${todoNo}`)
      .then((res) => {
        console.log(res);
        setTodo({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      <TodoInfo todo={todo} />
    </div>
  );
};
export default TodoInfoPage;
