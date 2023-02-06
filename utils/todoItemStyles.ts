import { cx } from "twind/core";

export const todoItemStyles = {
  "todo-list-item": `px-4 py-2 
    mb-2 
    w-full 
    rounded-xl 
    bg-gray-200 
    font-semibold 
    shadow-sm`,
  "todo-list-checkbox": cx`form-check-input
            appearance-none
            h-4 w-4 
            border(gray-400)
            rounded-md bg-white
            checked:(bg-gray-600 border-gray-600)
            focus:outline-none
            transitions
            duration-200 mt-1
            align-top
            bg-(no-repeat center contian)
            float-left
            mr-2
            cursor-pointer`,
  "drop-down-list-item-style": `"
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "`,
  "drop-down-list-style": `"
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
        "`,
  "todo-item-tag-style":
    cx`px-4 py-2 mr-12 rounded-full text-(blue-500 sm) bg-blue-200 font-semibold inline-flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease`,
};
