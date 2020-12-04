import { useRecoilState, useRecoilValue } from "recoil";
import { todosState } from "../store/atoms";
import { todoCountState } from "../store/selectors";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos] = useRecoilState(todosState);
  const count = useRecoilValue(todoCountState);

  return (
    <div>
      {count} items in todo list
      <hr />
      {todos.map((item) => (
        <TodoItem {...item} key={item.id} />
      ))}
    </div>
  );
}
