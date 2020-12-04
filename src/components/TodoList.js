import { useRecoilState } from 'recoil'
import { todosState } from '../store/atoms'
import TodoItem from './TodoItem'

export default function TodoList() {

    const [todos,] = useRecoilState(todosState)

    return (
        <div>
            {
                todos.map(item => <TodoItem todo={item.todo} key={item.id} />)
            }
        </div>
    )
}
