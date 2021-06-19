import React from 'react'
import { HStack, Input, Button } from '@chakra-ui/react'
import {useState} from 'react'


function AddTodo({ addTodo }) {

    function handleSubmit(e){
        e.preventDefault()
        console.log(content)
        const todo = {
            id: '',
            body: content
        };
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input variant='filled' placeholder='Todo...' value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button colorScheme = 'green' px= "8" type='submit'>Add Todo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo;
