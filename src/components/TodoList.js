import { useRecoilState, useRecoilValue } from "recoil";
import { todosState } from "../store/atoms";
import { todoCountState } from "../store/selectors";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos] = useRecoilState(todosState);
  const count = useRecoilValue(todoCountState);

  return (
    <div>
      <p><span className="count">{count}</span> items in todo list</p>
      <hr />
      {todos.map((item) => (
        <TodoItem {...item} key={item.id} />
      ))}
    </div>
  );
}
