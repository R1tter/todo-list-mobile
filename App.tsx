import React, { useState } from 'react';
import { Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeBaseProvider, Box, VStack, Heading, Button, Input } from 'native-base';
import globalStyles from './src/styles/globalStyles';
import TaskList from './src/components/TaskList';
import useTasks from './src/hooks/useTasks';

const App: React.FC = () => {
  
  const { tasks, addTask, toggleTaskCompletion, removeTask, editTask } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddNewTask = () => {
    if (newTaskTitle) {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const handleEditTask = (taskId: string, newTitle: string) => {
    editTask(taskId, newTitle);
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.container}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Box style={globalStyles.container} alignItems="center" justifyContent="center">
            <Heading style={globalStyles.heading}>
              TODO LIST
            </Heading>
            <Box style={globalStyles.outerBox}>
              <TaskList 
                listName="Tasks" 
                tasks={tasks} 
                onToggleTask={toggleTaskCompletion}
                onEditTask={handleEditTask}
                onRemove={removeTask}
              />
  
              <Input 
                placeholder="New task title" 
                value={newTaskTitle} 
                onChangeText={setNewTaskTitle} 
                onSubmitEditing={handleAddNewTask}
              />
              <Button style={globalStyles.button} onPress={handleAddNewTask}>
                <Text style={globalStyles.buttonText}>Add New Task</Text>
              </Button>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default App;