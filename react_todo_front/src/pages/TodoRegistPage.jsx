import axios from "axios";
import TodoRegist from "../components/todo/TodoRegist";
import styles from "./pagelayout.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TodoRegistPage = () => {
  const navigate = useNavigate();
  //Todo를 백엔그서버에 보내서 등록하고, 성공하면 메인페이지로 화면을 전환하는 역할의 함수
  const registTodo = (todo) => {
    axios
      .post(`${import.meta.env.VITE_BACKSERVER}/todos`, todo)
      .then((res) => {
        console.log(res);
        if (res.data === 1) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 등록</h3>
      <TodoRegist registTodo={registTodo} />
    </div>
  );
};
export default TodoRegistPage;
