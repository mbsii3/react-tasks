import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage({ tasks }) {

async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
}

    return (
    <>
        <h1>OrderHistoryPage</h1>
        {tasks.map(task => <h3>{task.name}</h3>)}
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
    );
}