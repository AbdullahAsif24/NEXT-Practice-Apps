

type TodoListType = {
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex
}: TodoListType) {
    return (
        <>
            {
                todos.map((todo, index) => (
                    <div key={todo + index}>
                        <b>{todo}</b>

                        <button className="m-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            onClick={() => {
                                setEditIndex(index)
                            }}

                        >Edit</button>

                        <button className="mt-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => {
                            deleteTodo(index)
                        }}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}