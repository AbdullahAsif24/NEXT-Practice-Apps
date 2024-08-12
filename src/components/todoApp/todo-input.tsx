"use client";

import { useState } from "react";

type TodoInputType = {
    addNewTodo: (newTodo: string) => void;
}

export default function TodoInput({
    addNewTodo
}: TodoInputType) {

    const [newTodo, setNewTodo] = useState("");

    return (
        <>
            <label htmlFor="new-todo" className="mr-1 font-bold text-xl">Todo:</label>
            <input
                className="rounded-md p-1 bg-slate-700 text-white"
                type="text"
                id="new-todo"
                value={newTodo}
                onChange={(e) => { 
                    setNewTodo(e.target.value)
                }}
            />
            <button className="m-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => {
                    if (newTodo.length >= 3) {
                        addNewTodo(newTodo);
                        setNewTodo("");
                    }
                }}
            >Add Todo</button>
        </>
    )
}