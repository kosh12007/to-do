import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { TodoContainer, TodoList } from "./ToDoList.styled";




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
        <TodoContainer>
            <TodoList $isCompleted={false}>
                {ckeckedlist()}
            </TodoList>
            <TodoList $isCompleted={true}>
                {unCkeckedlist()}
            </TodoList>
        </TodoContainer>
    )
}