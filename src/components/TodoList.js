import React from 'react'
import { VStack, HStack, Text, IconButton, StackDivider } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

function TodoList() {
    const todos = [
        {
            id:1,
            body: 'idz po chleb'
        },
        {
            id:2,
            body: 'zrób trening'
        }
    ]

    return (
        <VStack 
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            width="100%"
            maxW={{base:'90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}>
            {todos.map(a => (
                <HStack key={a.id}>
                    <Text>{a.body}</Text>
                    <IconButton icon={<FaTrash />} isRound='true'/>
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList;
