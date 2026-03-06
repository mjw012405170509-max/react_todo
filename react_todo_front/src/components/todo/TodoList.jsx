import styles from "./TodoList.module.css";

// 구조분해 할당 문법을 이용한 방법 -> key값의 정보를 가져옴
const TodoList = ({ todoList, moveToInfo }) => {
  //   const todoList = props.todoList;
  return (
    <div className={styles.list}>
      {todoList.map((todo, i) => {
        return (
          <TodoItem moveToInfo={moveToInfo} todo={todo} key={"todo-" + i} />
        );
      })}
    </div>
  );
};
const TodoItem = ({ todo, moveToInfo }) => {
  return (
    <ul
      className={styles.item}
      onClick={() => {
        moveToInfo(todo.todoNo);
      }}
      // onClick={moveToInfo(todo.todoNo)}
      // 이런식으로 적어놓으면 movetoInfo의 리턴값으로 가게 된다-> moveToInfo는 주소를 돌려주는 함수인지라 그대로 다른 주소로 엄어가게 된다.
      // 그래서 moveToInfo를 동작시키기 위해서는 moveToInfo를 함수에 넣어서 동작시켜야 한다.
    >
      <li className={styles.content}>
        <span className={styles.todo_content}>{todo.todoContent}</span>
        <span className={styles.todo_writer}>{todo.todoWriter}</span>
      </li>
      <li>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? "진행중" : "완료"}
        </span>
      </li>
    </ul>
  );
};
export default TodoList;
