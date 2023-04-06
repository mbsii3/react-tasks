import { useState } from "react";

export default function NewTaskPage() {
    const [task, setTask] = useState({
        name: '',
        description: ''
    });

    function handleChange(e) {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('clicked')
    }


    return (
        <>
            <h1>Add Task</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Task Name:
                    <input type="text" name="name" id="name" value={ task.name } onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="description">Description:
                    <input type="text" name="description" id="description" />
                </label>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}