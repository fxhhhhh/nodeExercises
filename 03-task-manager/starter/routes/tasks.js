const express = require('express');
const router = express.Router();
const {getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask,
    editTask,} = require('../controller/tasks')

router.route('/').get(getAllTasks);
router.route('/').post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;