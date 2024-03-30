// expenseRoutes.js
const express = require('express');
const router = express.Router();
const {updateCompletionByTaskId,addTask
,deleteTaskByTaskId , getCompletedTasks
, getTaskById, getTasks,updateTaskByTaskId
} = require('./api');


router.get('/get-tasks', getTasks);
router.get('/get-task/:id', getTaskById);

router.get('/get-completed', getCompletedTasks);
router.delete('/delete/:id',deleteTaskByTaskId);

// router.put('/update', updateTaskByTaskId);
router.put('/update-completion/:id', updateCompletionByTaskId);
router.put('/update/:id', updateTaskByTaskId);

router.post('/add-task', addTask);


module.exports = router;