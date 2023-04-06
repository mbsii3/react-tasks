const User = require('../../models/user');
const Task = require('../../models/task');

module.exports = {
    create
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