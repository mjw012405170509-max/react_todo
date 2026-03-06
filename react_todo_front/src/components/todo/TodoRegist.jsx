import { useState } from "react";
import styles from "./TodoRegist.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoRegist = ({ registTodo }) => {
  const [todo, setTodo] = useState({
    todoContent: "",
    todoWriter: "",
  });

  const navigate = useNavigate();
  const inputTodo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...todo, [name]: value };
    setTodo(newObj);
  };
  const submit = (e) => {
    e.preventDefault();
    if (todo.todoContent === "" || todo.todoWriter === "") {
      return;
    }
    registTodo(todo);
  };
  return (
    // enter 버튼을 누르면 form 태그가 반응함-> enter 가져올 필요 없음->대신 preventDefault로 submit은 막아둠
    <form onSubmit={submit} className={styles.form}>
      <div className={styles.input_wrap}>
        <label htmlFor="todoWriter">작성자</label>
        <input
          type="text"
          name="todoWriter"
          id="todoWriter"
          value={todo.todoWriter}
          onChange={inputTodo}
        />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          name="todoContent"
          id="todoContent"
          value={todo.todoContent}
          onChange={inputTodo}
        />
      </div>
      <div className={styles.button_wrap}>
        <button className={styles.btn} type="submit">
          등록하기
        </button>
      </div>
    </form>
  );
};
export default TodoRegist;
