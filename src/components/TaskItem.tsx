import React, { useState } from 'react';
import { HStack, Checkbox, Text, Icon, Modal, Button, Input } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
  onToggle: (taskId: string) => void;
  onRemove: (taskId: string) => void;
  onEditTask: (taskId: string, newTitle: string) => void;
}



const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onRemove, onEditTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditConfirm = () => {
    onEditTask(task.id, editedTitle);
    setModalOpen(false);
  };
  

  return (
    <>
      <HStack space={4} alignItems="center">
        <Checkbox value={task.id} isChecked={task.completed} onChange={() => onToggle(task.id)} />
        <Text>{task.title}</Text>
        <FontAwesome name="edit" size={24} color="black" onPress={() => setModalOpen(true)} />
        <FontAwesome name="remove" size={24} color="red" onPress={() => onRemove(task.id)} />
      </HStack>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Body>
            <Input value={editedTitle} onChangeText={setEditedTitle} />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={handleEditConfirm}>Confirm</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default TaskItem;
