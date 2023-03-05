import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';

import './TodoList.css';

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(() => store.getState().Todo.todos)

    return (
        <section className="todo_list_section">
            <h2 className="todo_list_section_title">Todos</h2>
            {todos && todos.map((todo: any, index: number) =>
                <article key={index} className="todo_list_article">
                    <div className="todo_list_group border-b border-slate-500">
                        <span className="todo_list_title">{todo.title}</span>
                        <p className="todo_list_due_date">{todo.dueDate}</p>
                    </div>
                    <p className="todo_list_description">{todo.description}</p>
                    <div className="todo_list_group">
                        <button className="button_todo" onClick={(event) => dispatch({ type: 'Todo/todoDone' })}>Done</button>
                        <button className="button_delete" onClick={(event) => dispatch({ type: 'Todo/todoDelete' })}>Delete</button>
                    </div>
                </article>
            )}
        </section>
    );
};

export default TodoList;