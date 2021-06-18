import logo from './logo.svg';
import './App.css';

import { Heading } from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { VStack, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function App() {
  return (
    <VStack p={4}>
      <IconButton 
        icon={<FaSun></FaSun>} 
        isRound='true' size='lg' 
        alignSelf='flex-end'/>
      <Heading 
        mb='8' 
        fontWeight='extrabold' 
        size='2xl' 
        bgGradient="linear(to-r, green.800, green.500, green.800)"
        bgClip='text'>
          Todo Application
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
