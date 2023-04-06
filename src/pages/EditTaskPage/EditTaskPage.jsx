export default function EditTaskPage() {

    function handleChange () {

    }

    function handleSubmit() {

    }

    return (
        <>
        <h1>EditTaskPage</h1>
        <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Task Name:
                    <input type="text" name="name" id="name" value={ task.name } onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="description">Description:
                    <input type="text" name="description" id="description" value={ task.description } onChange={handleChange} />
                </label>
                <label htmlFor="completed">
                    Completed:
                </label>
                <input type="checkbox" name="completed" id="completed" />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}