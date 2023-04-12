import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pb-10">
      <div className="h-16 flex items-center justify-between px-5 sticky top-0 backdrop-blur">
        <h1 className="text-3xl font-semibold font-playfair">Idioms</h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="px-6 py-2">
        <div className="h-12 bg-zinc-100 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 ml-3 text-zinc-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-3 outline-none"
          />
        </div>
        <ul className="text-blue-600/90 mt-6">
          <li className="flex items-center space-x-3 py-3 px-2 border-b">
            <i class="bi bi-shuffle"></i>
            <span>Random</span>
          </li>
          <li className="flex items-center space-x-3 py-3 px-2 border-b">
            <i class="bi bi-activity"></i>
            <span>Trending</span>
          </li>
          <li className="flex items-center space-x-3 py-3 px-2 border-b">
            <i class="bi bi-emoji-smile"></i>
            <span>Categories</span>
          </li>
          <li className="flex items-center space-x-3 py-3 px-2 border-b">
            <i class="bi bi-calendar2-week"></i>
            <span>Idiom of the day</span>
          </li>
          <li className="flex items-center space-x-3 py-3 px-2">
            <i class="bi bi-heart"></i>
            <span>Favourites</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
