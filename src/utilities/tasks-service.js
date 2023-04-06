import * as tasksAPI from "../utilities/tasks-api";

export async function createTask(taskData) {
    return await tasksAPI.createTask(taskData);
}