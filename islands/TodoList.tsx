import { useState } from "preact/hooks";

export default function TodoList() {
  const [todoList, setTodoList] = useState([{
    title: "Wash dishes",
    id: 0,
  }]);
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="w-full border border-gray-200 rounded-md bg-white shadow-md px-8">
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();

            if (title) {
              setTodoList([...todoList, { title, id: todoList.length }]);
              setTitle("");
            }
          }}
          className="pt-6 pb-8 w-full"
        >
          <input
            value={title}
            onKeyUp={(e) => {
              const titleInput = e.target as HTMLInputElement;
              setTitle(titleInput.value);
            }}
            className="appearance-none
            font-medium border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="What are you up to today ?"
          />
        </form>
        <p> <span className="text-gray-400">0/4 •</span> <span className="font-semibold text-gray-600">Tasks completed</span></p>
        <ul className="w-full py-4">
          {todoList.map((todo) => (
            <li key={todo.id} class="px-4 py-2 mb-2 w-full rounded-xl bg-gray-200 font-semibold shadow-sm">
              <div class="form-check flex items-center justify-between">
                <div>
                  <input
                    className="
                    form-check-input
                    appearance-none 
                    h-4 w-4 border 
                    border-gray-400 
                    rounded-md bg-white 
                    checked:bg-gray-600 
                    checked:border-gray-600
                    focus:outline-none 
                    transition 
                    duration-200 mt-1 
                    align-top 
                    bg-no-repeat 
                    bg-center 
                    bg-contain 
                    float-left 
                    mr-2 
                    cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block text-gray-500"
                    for="flexCheckDefault"
                  >
                    {todo.title}
                  </label>
                </div>
                <div class="flex items-center">
                  <span
                    class="px-4 py-2 mr-12 rounded-full text-blue-500 bg-blue-200 font-semibold text-sm inline-flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                    Household
                  </span>
                  <button className="w-2">
                    <svg className="text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
