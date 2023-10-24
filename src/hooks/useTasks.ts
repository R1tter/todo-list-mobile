import { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (title: string) => {
    try {
      const response = await axios.post('/tasks', { title });
      setTasks(prevTasks => [...prevTasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTaskCompletion = async (taskId: string) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        const updatedTask = { ...task, completed: !task.completed };
        await axios.put(`/tasks/${taskId}`, updatedTask);
        setTasks(prevTasks => 
          prevTasks.map(t => t.id === taskId ? updatedTask : t)
        );
      }
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  const removeTask = async (taskId: string) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  const editTask = async (taskId: string, newTitle: string) => {
    try {
      const updatedTask = { id: taskId, title: newTitle, completed: false }; // Ajuste conforme necessário
      await axios.put(`/tasks/${taskId}`, updatedTask);
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId ? updatedTask : task
        )
      );
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    removeTask,
    editTask
  };
};

export default useTasks;
