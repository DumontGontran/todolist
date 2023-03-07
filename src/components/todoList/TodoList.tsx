import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';

import './TodoList.css';

const TodoList = () => {
    const dispatch = useDispatch()
    const todos: Array<any> = useSelector(() => store.getState().Todo.todos)
    const todayDate = new Date().toLocaleDateString('fr')

    interface Infos {
            id: number,
            isDone: boolean,
            title: string,
            description: string,
            dueDate: string
    }

    return (
        <section className="todo_list_section">
            <h2 className="todo_list_section_title">Todos</h2>
            {todos && todos.map((todo: Infos) =>
                <article key={todo.id} className="todo_list_article">
                    <div className="todo_list_group border-b border-slate-500">
                        <span className="todo_list_title">{todo.title}</span>
                        {todayDate < todo.dueDate &&
                        <p className="todo_list_due_date bg-green-600">{todo.dueDate}</p>}
                        {todayDate === todo.dueDate &&
                        <p className="todo_list_due_date bg-yellow-500">{todo.dueDate}</p>}
                        {todayDate > todo.dueDate &&
                        <p className="todo_list_due_date bg-red-700">{todo.dueDate}</p>}
                    </div>
                    <p className="todo_list_description">{todo.description}</p>
                    <div className="todo_list_group">
                        <button className="button_todo" onClick={(event) => {
                            event.preventDefault()
                            dispatch({
                                type: 'Todo/todoDone',
                                payload: todo.id
                            })
                            event.currentTarget.style.backgroundColor = 'green'
                            event.currentTarget.style.color = 'white'
                            event.currentTarget.innerText = 'Done'
                        }}>To Do</button>
                        <button className="button_delete" onClick={(event) => {
                            event.preventDefault()
                            dispatch({
                                type: 'Todo/todoDelete',
                                payload: todo.id
                            })
                        }}>Delete</button>
                    </div>
                </article>
            )}
        </section>
    );
};

export default TodoList;