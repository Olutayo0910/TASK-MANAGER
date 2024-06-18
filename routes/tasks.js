const express = require('express');
const router = express.Router();
const {  getAllTasks, createTasks, getOneTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)

module.exports = router