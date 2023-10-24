import React from 'react';
import { Box,Heading, Center } from 'native-base';

const AppHeader: React.FC = () => {
  return (
    <Box bg="primary.500" p={4}>
      <Center>
        <Heading color="white">Todo List</Heading>
      </Center>
    </Box>
  );
};

export default AppHeader;
