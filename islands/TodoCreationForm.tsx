import { useRef } from "preact/hooks";
import * as uuid from "uuid";

export default function TodoCreationForm(
  { updateTitle, addTodo, title, choreType, updateChoreType }: {
    updateTitle: Function;
    addTodo: Function;
    updateChoreType: Function;
    title: string;
    choreType: string;
  },
) {
  const closeButtonReference = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="flex items-center font-semibold text-gray-600"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <svg
            className="w-3 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
          Add todo
        </button>
      </div>
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-start justify-between p-4 rounded-t-md">
              <div>
                <h5
                  class="text-xl font-medium leading-normal text-gray-800 font-semibold"
                  id="exampleModalLabel"
                >
                  Add todo
                </h5>
                <p className="text-gray-400 font-medium text-sm">
                  Enter the new task that has to be completed
                </p>
              </div>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeButtonReference}
              >
              </button>
            </div>
            <div class="modal-body relative px-4">
              <form
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();

                  if (title) {
                    addTodo({
                      title,
                      id: await uuid.v1.generate().toString(),
                      completed: false,
                      tag: choreType,
                    });
                    updateTitle("");
                    updateChoreType("Household");
                    if (closeButtonReference.current !== null) {
                      closeButtonReference.current.click();
                    }
                  }
                }}
                className="w-full"
              >
                <div className="flex">
                  <input
                    value={title}
                    onKeyUp={(e) => {
                      const titleInput = e.target as HTMLInputElement;
                      updateTitle(titleInput.value);
                    }}
                    className="appearance-none
            font-medium border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mr-1 focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="What are you up to today ?"
                  />
                  <select
                    className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-200 focus:outline-none"
                    value={choreType}
                    onChange={(e) => {
                      const choreInput = e.target as HTMLInputElement;
                      updateChoreType(choreInput.value);
                    }}
                    aria-label="Default select example"
                  >
                    <option value="Household" selected>Household</option>
                    <option value="Personal">Personal</option>
                    <option value="Self">Self</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end py-4">
                  <input
                    type="submit"
                    value="Save changes"
                    class="inline-blockcursor-pointer px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
