import { useState } from "react";

type TodoListType = {
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
    editIndex: number;
    setTodos: (todos: string[]) => void;
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex,
    editIndex,
    setTodos
}: TodoListType) {

    const [currentTodo, setCurrentTodo] = useState<string>("");

    const saveEditedTodo = (updatedTodo: string) => {
        console.log(updatedTodo);
        let todosClone = [...todos];
        todosClone.splice(editIndex, 1, updatedTodo);
        setTodos([...todosClone]);
        setEditIndex(-1);
    }

    return (
        <>
            {
                todos.map((todo, index) => (
                    <div key={todo + index} className="flex justify-between w-3/4 border-slate-900 border-2 rounded-md mb-1 items-center px-1">
                        {
                            editIndex !== index ?
                                <b className="mr-2">{todo}</b> :
                                <input
                                    autoFocus
                                    type="text"
                                    className="bg-zinc-500"
                                    value={currentTodo}
                                    onChange={(e) => setCurrentTodo(e.target.value)}
                                />
                        }

                        <div>
                            <button className="m-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                onClick={() => {
                                    if (editIndex !== index) {
                                        setEditIndex(index);
                                        setCurrentTodo(todo); // Initialize the current todo value in the input
                                    } else {
                                        saveEditedTodo(currentTodo);
                                    }
                                }}
                            >
                                {editIndex !== index ? 'Edit' : 'Save'}
                            </button>

                            <button className="mt-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => {
                                if (editIndex === index) {
                                    alert('first save todo')
                                }
                                else {
                                    deleteTodo(index)
                                }
                            }}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
