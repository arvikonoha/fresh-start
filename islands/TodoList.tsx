import { Todo } from "../types/Todo.ts";
import TodoItem from "./TodoItem.tsx";

export default function TodoList(
  { todoList, removeTodo, markTodo }: {
    todoList: Array<Todo>;
    removeTodo: Function;
    markTodo: Function;
  },
) {
  return (
    <ul className="w-full py-4">
      {todoList.map((todo) => (
        <TodoItem removeTodo={removeTodo} markTodo={markTodo} todo={todo} />
      ))}
    </ul>
  );
}
