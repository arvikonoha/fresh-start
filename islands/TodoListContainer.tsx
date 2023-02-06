import { useState } from "preact/hooks";
import { Todo } from "../types/Todo.ts";
import TodoItem from "./TodoItem.tsx";
import * as uuid from "uuid";
import TodoCreationForm from "./TodoCreationForm.tsx";
import TodoList from "./TodoList.tsx";

const initialId = await uuid.v1.generate().toString();

export default function TodoListContainer() {
  const [todoList, setTodoList] = useState([{
    title: "Wash dishes",
    id: initialId,
    completed: false,
    tag: "Household",
  } as Todo]);
  const [title, setTitle] = useState("");
  const [choreType, setChoreType] = useState("Household");

  const addTodo = (newTodo: Todo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };

  const markTodo = (id: string) => {
    setTodoList([
      ...todoList.map((todo) =>
        todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo
      ),
    ]);
  };

  return (
    <>
      <div className="w-full rounded-md bg-white shadow-md px-8 py-4">
        <p>
          <span className="text-gray-400">
            {todoList.filter((todo) => todo.completed).length}/{todoList.length}
            •
          </span>
          <span className="font-semibold text-gray-600">Tasks completed</span>
        </p>
        <TodoList
          removeTodo={removeTodo}
          markTodo={markTodo}
          todoList={todoList}
        />
        <TodoCreationForm
          addTodo={addTodo}
          updateTitle={setTitle}
          choreType={choreType}
          updateChoreType={setChoreType}
          title={title}
        />
      </div>
    </>
  );
}
5;
