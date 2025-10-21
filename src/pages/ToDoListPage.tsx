import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast, Toaster } from 'react-hot-toast';





export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])




    const creatNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
        toast.success('Задача успешно добавлена');

    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
            
        })
        setTodos(newTodos)
        toast.success('Статус задачи успешно обновлен');
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(newTodos)
        toast.success('Задача успешно удалена');
    }


    return (
        <>
            <Form creatNewToDo={creatNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <Toaster position="bottom-right" />
        </>
    )
}