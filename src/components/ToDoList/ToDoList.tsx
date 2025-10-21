import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"




export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    const ckeckedlist = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }
    const unCkeckedlist = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {ckeckedlist()}
            </ul>
            <ul className="todo-list completed">
                {unCkeckedlist()}
            </ul>
        </div>
    )
}