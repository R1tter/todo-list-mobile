import React, { useState } from 'react';
import { Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeBaseProvider, Box, VStack, Heading, Button, Checkbox, Input } from 'native-base';
import globalStyles from './src/styles/globalStyles';
import TaskList from './src/components/TaskList';

const App: React.FC = () => {
  
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Wake up', completed: true },
    { id: '2', title: 'Brush teeth', completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle) {
      setTasks([...tasks, { id: Date.now().toString(), title: newTaskTitle, completed: false }]);
      setNewTaskTitle('');
    }
  };

  const handleToggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleRemoveTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId: string, newTitle: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
  };
  

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.container}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Box style={globalStyles.container} alignItems="center" justifyContent="center">
            <Heading style={{ ...globalStyles.heading, color: '#FFD700', marginBottom: 20 }}>
              TODO LIST
            </Heading>
            <Box
              bg="white"
              p={4}
              borderRadius={10}
              shadow={3}
              width="90%"
              alignItems="center"
            >
              <TaskList 
                listName="Tasks" 
                tasks={tasks} 
                onToggleTask={handleToggleTaskCompletion}
                onEditTask={handleEditTask}
                onRemove={handleRemoveTask}
              />

              <Input 
                placeholder="New task title" 
                value={newTaskTitle} 
                onChangeText={setNewTaskTitle} 
                onSubmitEditing={handleAddTask}
              />
              <Button onPress={handleAddTask}>
                <Text>Add New Task</Text>
              </Button>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default App;
