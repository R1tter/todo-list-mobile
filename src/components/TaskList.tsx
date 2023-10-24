import React from 'react';
import { VStack } from 'native-base';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  listName: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

const TaskList: React.FC<TaskListProps> = ({ listName, tasks }) => {
  return (
    <VStack space={4}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </VStack>
  );
};

export default TaskList;
