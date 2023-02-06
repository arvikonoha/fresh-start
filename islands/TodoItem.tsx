import DropDownIcon from "../components/Icons/DropDownIcon.tsx";
import { Todo } from "../types/Todo.ts";
import { todoItemStyles } from "../utils/todoItemStyles.ts";

export default function TodoItem(
  { todo, removeTodo, markTodo }: {
    todo: Todo;
    removeTodo: Function;
    markTodo: Function;
  },
) {
  return (
    <li
      key={todo.id}
      class={todoItemStyles["todo-list-item"]}
    >
      <div class="form-check flex items-center justify-between">
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            className={todoItemStyles["todo-list-checkbox"]}
            onChange={() => {
              markTodo(todo.id);
            }}
            id="flexCheckDefault"
          />
          <label
            className={`form-check-label inline-block text-gray-500 ${
              todo.completed ? "line-through" : ""
            }`}
            style={{ "text-decoration-thickness": "0.1em" }}
            for="flexCheckDefault"
          >
            {todo.title}
          </label>
        </div>
        <div class="flex items-center">
          <span
            class={todoItemStyles["todo-item-tag-style"]}
          >
            {todo.tag}
          </span>
          <button
            className="w-2 dropdown-toggle"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <DropDownIcon />
          </button>
          <ul
            class={todoItemStyles["drop-down-list-style"]}
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <a
                class={todoItemStyles["drop-down-list-item-style"]}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  removeTodo(todo.id);
                }}
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
