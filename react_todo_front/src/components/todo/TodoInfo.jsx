import styles from "./TodoInfo.module.css";

const TodoInfo = ({ todo }) => {
  return (
    <div className={styles.overall_wrap}>
      <ul className={styles.upper_wrap}>
        <li>{todo.todoDone === 0 ? "진행중" : "완료"}</li>
        <li>{todo.todoNo}</li>
      </ul>
      <ul className={styles.main_wrap}>
        <li className={styles.writer}>{todo.todoWriter}</li>
        <li>{todo.todoContent}</li>
        <li>{todo.todoDate}</li>
      </ul>
    </div>
  );
};
export default TodoInfo;
