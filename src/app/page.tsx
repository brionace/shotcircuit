import FitText from "../lib/FitText";
import Logo from "./components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-h-screen flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="flex flex-col gap-4">
        <FitText
          as={"h1"}
          className="font-sans font-bold tracking-tight text-black dark:text-white"
        >
          Shot Circuit
        </FitText>
        <div className="h-fit justify-between flex flex-col md:flex-row gap-2 px-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>14A Market Row, Brixton</p>
          <div className="flex flex-row gap-1">
            <p>Mon-Sun</p>
            <span>&mdash;</span>
            <time>12pm - 11:30pm</time>
          </div>
        </div>
      </header>
      <main className="grow overflow-auto flex flex-col md:flex-row items-center justify-around bg-purple-300 dark:bg-purple-600 bg-linear-to-r from-violet-200 to-pink-200 dark:from-violet-400 dark:to-pink-400  text-center text-2xl font-semibold">
        <p>Coming Soon!</p>
        {/* <div className="flex flex-col items-center grow h-full w-full px-4 py-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595977383574-d7fcfeecf6d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={100}
          />
          Teas & Coffee
        </div>
        <div className="flex flex-col items-center grow h-full w-full px-4 py-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595977383574-d7fcfeecf6d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={100}
          />
          Shotails
        </div>
        <div className="flex flex-col items-center grow h-full w-full px-4 py-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595977383574-d7fcfeecf6d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={100}
          />
          Desserts
        </div> */}
      </main>
      <nav className="flex items-center justify-between gap-8 h-auto p-4 border-t border-zinc-200 dark:border-zinc-700">
        <div className="flex justify-around gap-4 lowercase text-zinc-600 dark:text-zinc-400">
          <a>menu</a>
          <a>about us</a>
        </div>
        <div className="w-8">
          <Logo />
        </div>
      </nav>
    </div>
  );
}
