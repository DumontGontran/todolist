import { useDispatch } from 'react-redux';

import './TodoForm.css';

const TodoForm = () => {
    const dispatch = useDispatch()

    return (
        <section className="todo_form_section">
            <h1 className="todo_form_section_title">Todo Form</h1>
            <form className="todo_form" onSubmit={(event) => {
                    event.preventDefault()
                    dispatch({ type: 'Todo/sendTodo' })
                }}>
                <div className="todo_form_group">
                    <label htmlFor="title" className="todo_form_label">Title: (required)</label>
                    <input type="text" name="title" id="title" required onChange={(event) => dispatch({
                        type: 'Todo/setTitle',
                        payload: event.target.value
                    })} />
                </div>
                <div className="todo_form_group">
                    <label htmlFor="description" className="todo_form_label">Description: (required)</label>
                    <textarea name="description" id="description" required onChange={(event) => dispatch({
                        type: 'Todo/setDescription',
                        payload: event.target.value
                    })}></textarea>
                </div>
                <div className="todo_form_group">
                    <label htmlFor="dueDate" className="todo_form_label">DueDate: (required)</label>
                    <input type="date" name="dueDate" id="due_date" required onChange={(event) => dispatch({
                        type: 'Todo/setDueDate',
                        payload: event.target.value
                    })} />
                </div>
                <input type="submit" id="submit" value="Submit" />
            </form>
        </section>
    );
};

export default TodoForm;