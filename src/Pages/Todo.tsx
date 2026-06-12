import { useState, useEffect } from "react";
import { useDebounce } from "../features/CustomDebounce";
interface Todo {
    id: number,
    task: string,
    isActive: boolean
}
const Todo = () => {
    const [taskName, setTaskName] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : []
    });
    const [filter, setFilter] = useState("all");
    const [taskType, setTaskType] = useState("Add Task");
    const [taskId, setTaskId] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleTask = () => {
        if (taskType === "Add Task") {
            if (!taskName.trim()) return;
            const todoTask = {
                id: Date.now(),
                task: taskName,
                isActive: true
            }
            setTodos(prev => [...prev, todoTask])
            setTaskName("");
        } else {
            if (!taskName.trim()) return;
            setTodos(prev => prev.map((todo) => todo.id === taskId ? { ...todo, task: taskName } : todo));
            setTaskName("");
            setTaskType("Add Task")
        }
    }

    const handleTaskMode = (id: number) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isActive: !todo.isActive } : todo))
    }

    const handleDeleteTask = (id: number) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    const handleEditTask = (id: number, task: string) => {
        setTaskName(task)
        setTaskType("Update")
        setTaskId(id)
    }

    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const searchedTodos = todos.filter((todo) => todo.task.toLocaleLowerCase().includes(debouncedSearchTerm.toLocaleLowerCase()));
    const filteredTodos = searchedTodos.filter(todo => {
        if (filter === "active") {
            return todo.isActive
        }
        if (filter === "completed") {
            return !todo.isActive
        }
        return true; // all
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <div>
            <div className="border p-2 rounded-sm flex gap-2">
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} placeholder="Enter your task..."
                    className="p-1 font-medium border w-xl focus:outline-0"
                />
                <button className=" p-1 bg-emerald-700 text-blue-100 cursor-pointer w-20" onClick={handleTask}>{taskType}</button>
            </div>
            <div className="mt-10 border p-3 rounded-sm bg-violet-50 border-gray-100">
                <div className="mt-0 flex gap-2 justify-between p-1">
                    <input
                        type="search"
                        placeholder="search here.."
                        className="border flex-3 p-2 bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border pr-0.5 bg-violet-500 rounded"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="mt-5 p-1">
                    <ul className="flex flex-col gap-4 max-h-96 overflow-y-auto scrollbar-thin">
                        {filteredTodos?.map((item) =>
                            <li key={item.id} className="border p-2 flex flex-col gap-3 rounded-lg shadow-md hover:shadow-xl bg transition-shadow border-transparent bg-violet-200">
                                <div className="font-medium text-xl">{item.task}</div>
                                <div className="self-end flex gap-3 item-center">
                                    <button
                                        className="border p-1 w-30 cursor-pointer text-blue-50 bg-teal-600"
                                        onClick={() => handleEditTask(item.id, item.task)}
                                    >Edit</button>
                                    <button
                                        className="border p-1  w-30 cursor-pointer text-blue-50 bg-orange-600"
                                        onClick={() => handleDeleteTask(item.id)}
                                    >Delete</button>
                                    <select
                                        value={item.isActive ? "active" : "completed"}
                                        onChange={() => handleTaskMode(item.id)}
                                        className="border"
                                    >
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;