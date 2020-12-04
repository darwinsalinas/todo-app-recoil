import { useRecoilState } from "recoil";
import { draftTodoState, todosState } from "../store/atoms";

export default function TodoForm() {
  const [draft, setDraft] = useRecoilState(draftTodoState);
  const [todos, setTodos] = useRecoilState(todosState);

  const addTodo = (e) => {
    e.preventDefault();
    if (!draft) return
    const maxId = todos[todos.length - 1]?.id || 0;
    setTodos([...todos, { id: maxId + 1, todo: draft }]);
    setDraft('')
  };

  return (
    <form className="form" onSubmit={(e) => addTodo(e)}>
      <input
        name="checkbox"
        id="checkbox"
        type="checkbox"
        className="form-checkbox"
      />
      <input
        name="text"
        id="text"
        type="text"
        className="form-text"
        placeholder="Create a new todo..."
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
    </form>
  );
}
