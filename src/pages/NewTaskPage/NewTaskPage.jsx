export default function NewTaskPage() {
    return (
        <>
            <h1>Add Task</h1>
            <form action="">
                <label htmlFor="name">Task Name:
                    <input type="text" name="name" id="name" />
                </label>
                <br />
                <label htmlFor="description">Task Description
                    <input type="text" name="description" id="description" />
                </label>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}