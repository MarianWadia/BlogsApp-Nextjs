import { useRouter } from "next/router";
import NewPostForm from "./components/NewPostForm";

export default function Home() {
  return (
    <main className="bg-black my-12 mx-4 lg:mx-0  ">
     <NewPostForm />
    </main>
  )
}
