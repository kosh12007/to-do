import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const creatNewToDo = (text: string) => {
        dispatch(createAction(text))
        toast.success('Задача успешно добавлена');
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
        toast.success('Статус задачи успешно обновлен');
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
        toast.success('Задача успешно удалена');
    }
    return (
        <>
            <Form creatNewToDo={creatNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <Toaster position="bottom-right" />
        </>
    )
}