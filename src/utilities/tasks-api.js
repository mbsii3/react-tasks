
import sendRequest from "./send-request";
const BASE_URL = '/api/tasks';

export async function createTask(taskData) {
    return await sendRequest(BASE_URL, 'POST', taskData);
}