import React from 'react';
import { HStack, Checkbox, Text } from 'native-base';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <HStack space={4} alignItems="center">
      <Checkbox value={task.id} isChecked={task.completed} />
      <Text>{task.title}</Text>
    </HStack>
  );
};

export default TaskItem;
