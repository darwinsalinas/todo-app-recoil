import { useRecoilState, useRecoilValue } from "recoil";
import { todosState } from "../store/atoms";
import { todoCountState } from "../store/selectors";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos] = useRecoilState(todosState);
  const count = useRecoilValue(todoCountState);

  return (
    <div className="list-container">
      <div className="text-count"><span className="count">{count}</span> items in todo list</div>

      {todos.map((item) => (
        <TodoItem {...item} key={item.id} />
      ))}

      <div className="text-count separator"><span className="count">{count}</span> items in todo list</div>
    </div>
  );
}
