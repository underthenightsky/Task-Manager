const Task = require("./TaskModel");
const connectDB = require("./db");
const app = require("./db");
// getting all task created
exports.getTasks = async (req, res) => {
    try {
      // connectDB();
      const tasks = await Task.find({isComplete:false});
      console.log(tasks);
      console.log(Task);
      res.json(tasks);
      
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.addTask = async (req, res) => {
    const task = new Task({
      name : req.body.name,
      description : req.body.description,
      priority  : req.body.priority,
      startDate : req.body.startDate,
      endDate : req.body.endDate,
      isComplete: req.body.isComplete,
      creationDate: req.body.creationDate,
    });  
  try {
    
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// exports.geTaskDescription = async (req, res) => {
//     try {
//         const  taskId = req.params.taskId;
//       const expenses = await Task.find(taskId); 
//       res.json(expenses);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

  exports.getTaskById = async (req, res) => {
    // console.log(req.params.id)
  
    try {
      const task = await Task.findById( req.params.id );
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getCompletedTasks = async (req, res) => {
   
  
    try {
      const task = await Task.find({ isComplete : true }).sort({ creationDate: -1 });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.deleteTaskByTaskId = async (req, res) => {
    const id = req.params.id;
    try {
      
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

    exports.updateTaskByTaskId = async (req, res) => {
        const id = req.params.id;
        const { name, description, priority, startDate, endDate, isComplete, creationDate } = req.body;
        try {
          
          const task = await Task.findByIdAndUpdate(id , 
            { name, description, priority, startDate, endDate, isComplete, creationDate},
             { new: true });
            if (!task) {
                return res.status(404).json({ message: 'Expense not found' });
            }
            res.json(task);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    exports.updateCompletionByTaskId = async (req, res) => {
        const id = req.params.id;
        // const { taskId } = req.body;
        try {
          connectDB();
          const task = await Task.findByIdAndUpdate( id , 
            {  isComplete : true},
             { new: true });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
   