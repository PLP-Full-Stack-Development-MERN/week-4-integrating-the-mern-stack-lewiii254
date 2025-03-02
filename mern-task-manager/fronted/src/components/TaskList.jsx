import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('https://task-manager-backend.onrender.com/api/tasks');
        setTasks(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError('Failed to fetch tasks');
        setTasks([]);
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  if (error) return <div className="text-red-600 text-center text-lg font-semibold">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">✨🧾Task Manager🚀</h1>
          <Link
            to="/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            + New Task
          </Link>
        </div>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center italic">No tasks available. Add one to get started!</p>
          ) : (
            tasks.map(task => (
              <TaskItem key={task._id} task={task} setTasks={setTasks} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;