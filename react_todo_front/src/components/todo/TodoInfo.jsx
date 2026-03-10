import styles from "./TodoInfo.module.css";

const TodoInfo = ({ todo }) => {
  return (
    <div className={styles.overall_wrap}>
      <div>
        <ul className={styles.upper_wrap}>
          <li>{todo.todoDone === 0 ? "진행중" : "완료"}</li>
          <li>{todo.todoNo}</li>
        </ul>
      </div>
      <div>
        <ul className={styles.main_wrap}>
          <li className={styles.writer}>{todo.todoWriter}</li>
          <li>{todo.todoContent}</li>
          <li>{todo.todoDate}</li>
        </ul>
      </div>
      <div>
        <button className={styles.put_btn}>수정</button>
        <button className={styles.del_btn}>삭제</button>
      </div>
    </div>
  );
};
export default TodoInfo;
