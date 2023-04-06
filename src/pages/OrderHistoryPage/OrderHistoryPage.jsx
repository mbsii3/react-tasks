import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import * as taskService from "../../utilities/tasks-service";

export default function OrderHistoryPage() {
    const [tasks, setTasks] = useState([]);

async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
}


  useEffect(function() {
    async function getTasks() {
        const allTasks = await taskService.index();
        setTasks(allTasks);
    }
    getTasks();
}, []);

    return (
    <>
        <h1>OrderHistoryPage</h1>
        {tasks.map(task => <h3>{task.name}</h3>)}
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
    );
}