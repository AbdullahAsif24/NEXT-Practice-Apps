"use client";

import TodoEdit from "@/components/todoApp/todo-edit";
import TodoInput from "@/components/todoApp/todo-input";
import TodoList from "@/components/todoApp/todo-list";
import { useEffect, useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    const [editIndex, setEditIndex] = useState(-1);

    const addNewTodo = (newTodo: string) => {
        console.log("New Todo:", newTodo);
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (todoIndex: number) => {
        let todosClone = [...todos];
        todosClone.splice(todoIndex, 1);
        setTodos([...todosClone]);
    }

   


    useEffect(() => {
        console.log("Todos List: ", todos);
    }, [todos])

    return (
        <>

            <TodoInput
                addNewTodo={addNewTodo}
            />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                setEditIndex={setEditIndex}
                editIndex={editIndex}
                setTodos={setTodos}
            />
        </>
    )
}