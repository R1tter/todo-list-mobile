import React from 'react';
import { Text } from 'react-native'; // Importando o Text
import { NativeBaseProvider, Box, VStack, Heading, Button } from 'native-base';
import TaskList from './src/components/TaskList';
import globalStyles from './src/styles/globalStyles';

const App: React.FC = () => {
  // Exemplo de dados
  const tasksData = [
    {
      listName: 'Daily Tasks',
      tasks: [
        { id: '1', title: 'Wake up', completed: true },
        { id: '2', title: 'Brush teeth', completed: false },
        { id: '3', title: 'Have breakfast', completed: false },
      ],
    },
    {
      listName: 'Work Tasks',
      tasks: [
        { id: '4', title: 'Check emails', completed: true },
        { id: '5', title: 'Attend team meeting', completed: false },
      ],
    },
  ];

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.container}>
        <Box
          bg="white"
          p={4}
          borderRadius={10}
          shadow={3}
          width="90%" 
        >
          <VStack space={4} alignItems="center">
            <Heading style={globalStyles.heading} mb={6}>
              Todo List App
            </Heading>
            {tasksData.map((list, index) => (
              <TaskList key={index} listName={list.listName} tasks={list.tasks} />
            ))}
            <Button 
              _text={{ color: globalStyles.buttonText.color }} 
              bg={globalStyles.button.backgroundColor}
              p={globalStyles.button.padding}
              borderRadius={globalStyles.button.borderRadius}
              m={globalStyles.button.margin}
              onPress={() => console.log('Add new task')}
            >
              Add New Task
            </Button>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
