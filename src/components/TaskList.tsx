import React from 'react';
import { VStack, Heading } from 'native-base';
import TaskItem from './TaskItem';
import globalStyles from '../styles/globalStyles';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  listName: string;
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onRemove: (taskId: string) => void;
  onEditTask: (taskId: string, newTitle: string) => void;

}

const TaskList: React.FC<TaskListProps> = ({ listName, tasks, onToggleTask, onRemove, onEditTask }) => {
  return (
    <VStack space={4}>
      <Heading size="md" style={globalStyles.listTitle}>{listName}</Heading>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} onEditTask={onEditTask} onRemove={onRemove} />
      ))}
    </VStack>
  );
};

export default TaskList;
