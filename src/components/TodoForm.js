import { useRecoilState } from "recoil";
import { draftTodoState } from "../store/atoms";

export default function TodoForm() {
  const [draft, setDraft] = useRecoilState(draftTodoState);

  return (
    <form className="form" onSubmit={(e)=>{
      e.preventDefault()
      alert('enviando')
    }}>
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
        onChange={(e)=> setDraft(e.target.value)}
      />
    </form>
  );
}
