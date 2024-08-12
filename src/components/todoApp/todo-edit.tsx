"use client";

import { useState } from "react";

type TodoEditType = {
    editedTodo: string;
    saveEditedTodo: (updatedTodo: string) => void;
}

export default function TodoEdit({
    editedTodo,
    saveEditedTodo
}: TodoEditType) {

    const [editTodo, setEditTodo] = useState(editedTodo);

    return (
        <>
            <label htmlFor="new-todo" className="mr-1 font-bold text-xl">Todo:</label>
            <input
                className="rounded-md p-1 bg-slate-700 text-white"
                type="text"
                id="new-todo"
                value={editTodo}
                onChange={(e) => { setEditTodo(e.target.value) }}
            />
            <button className="m-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => {
                    saveEditedTodo(editTodo);
                }}
            >Save Todo</button>
        </>
    )
}