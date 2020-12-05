export default function TodoItem({ id, todo }) {
  return (
    <div className="list-item separator">
      {id} - {todo}
    </div>
  );
}
