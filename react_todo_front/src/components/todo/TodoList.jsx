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
      // 이런식으로 적어놓으면 moveToInfo의 리턴값으로 가게 된다-> moveToInfo는 주소를 돌려주는 함수인지라 그대로 다른 주소로 넘어가게 된다.
      // (정확히는 moveToInfo(todoNo)는 주소값으로 navigate를 가라고 했는데,이는 즉 onClick 적용시 navigate를 바로 준 것과 다름이 없다.)
      //onClick은 함수가 작동해야한다.
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
