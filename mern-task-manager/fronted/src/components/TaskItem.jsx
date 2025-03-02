import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, setTasks }) => {
  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    setTasks(prev => prev.filter(t => t._id !== task._id));
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <p className="text-gray-600">{task.description || 'No description'}</p>
        <p className="text-sm text-gray-500 mt-1">
          Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
        </p>
        <span
          className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${statusColors[task.status]}`}
        >
          {task.status}
        </span>
      </div>
      <div className="flex space-x-2">
        <Link
          to={`/edit/${task._id}`}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Edit
        </Link>
        <button
          onClick={deleteTask}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;