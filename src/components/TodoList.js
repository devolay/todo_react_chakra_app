import React from 'react'
import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

function TodoList({ todos, deleteTodo }) {

    if(!todos.length){
        return (
            <Badge colorScheme='green'
            p="4" 
            m='4'
            borderRadius='lg'>
                No more Todos :)
            </Badge>
        )
    }

    return (
        <VStack 
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            mt = '8'
            borderRadius="lg"
            width="100%"
            maxW={{base:'90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
            align = "stretch">
            {todos.map(a => (
                <HStack key={a.id}>
                    <Text>{a.body}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(a.id)}/>
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList;
