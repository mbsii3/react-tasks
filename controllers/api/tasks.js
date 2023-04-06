const Task = require('../../models/task');

module.exports = {
    create,
    index
}

async function create(req, res) {
    req.body.userId = req.user._id
    try {
        const newTask = await Task.create(req.body);
        console.log(newTask);
        res.json('response');
    } catch (err) {
        res.json(400)
    }
}

async function index(req, res) {
    try {
        const tasks = await Task.find({});
        res.json(tasks)
    }catch {
        res.json(400)
    }
}