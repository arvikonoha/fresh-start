import { Head } from "$fresh/runtime.ts";
import Thala from "../components/Thala.tsx";
import TodoList from "../islands/TodoList.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>
      <Thala />
      <div class="p-4 mx-auto max-w-screen-md">
        <TodoList />
      </div>
    </>
  );
}
