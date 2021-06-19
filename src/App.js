import { Heading } from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { VStack, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import {useState, useEffect} from 'react'

function App() {
  const initialTodos = [
    {
        id:1,
        body: 'idz po chleb'
    },
    {
        id:2,
        body: 'zrób trening'
    }
];

  const[todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter(todo=> {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addTodo(todo){
    setTodos(...todos, todo)
  }

  return (
    <VStack p={4}>
      <IconButton 
        icon={<FaSun></FaSun>} 
        isRound='true' size='lg' 
        alignSelf='flex-end'/>
      <VStack 
      spacing='8'
      w='100%'>
        <Heading 
        fontWeight='extrabold' 
        size='2xl'
        colorScheme='green'
        marginBottom = '8px !important'
        maxW={{base:'90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
        >
          Todo Application
        </Heading>
        <TodoList todos = {todos} deleteTodo = {deleteTodo} />
      </VStack>
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
