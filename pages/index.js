import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="h-screen fixed inset-0 flex flex-col">
      <div className="px-6 mt-6">
        <div className="bg-sky-50 p-3 flex items-start">
          <p className="text-sm text-zinc-700">
            Hey, we have got a small collection of idioms till now!{" "}
            <button className="font-semibold text-sky-600 mt-2 text-sm">
              Contribute
            </button>
          </p>
          <div className="flex justify-end ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-6 mt-10">
        <h1 className="text-4xl font-playfair font-semibold">Idioms</h1>
        <div className="flex h-12 bg-zinc-50 border border-zinc-100 rounded-lg mt-6 items-center px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-zinc-400"
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
            name=""
            id=""
          />
        </div>
      </div>
      <div className="mt-7">
        <div className="mt-5 overflow-x-auto flex items-center px-6 snap-x snap-mandatory">
          <div className="flex sticky left-0 z-0 items-center snap-mandatory snap-center snap-always text-blue-500 space-x-3 px-6">
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
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            <span>Trending</span>
          </div>
          <div className="w-screen bg-white z-10 pr-8">
            <div className="bg-zinc-50 z-10 w-full rounded-md px-4 py-4 shrink-0 snap-mandatory snap-center snap-always">
              <h2 className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-zinc-800 font-medium">
                Idiom phrase
              </h2>
              <p className="mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                rem?
              </p>
              <div className="mt-5 flex justify-end">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-rose-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-screen bg-white z-10 pr-8">
            <div className="bg-zinc-50 z-10 w-full rounded-md px-4 py-4 shrink-0 snap-mandatory snap-center snap-always">
              <h2 className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-zinc-800 font-medium">
                Idiom phrase
              </h2>
              <p className="mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                rem?
              </p>
              <div className="mt-5 flex justify-end">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-rose-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <ul className="space-y-5">
          <li className="flex px-6 items-center text-blue-500 space-x-3">
            <i class="bi bi-heart"></i>
            <span>Favourites</span>
          </li>
          <li className="flex px-6 items-center text-blue-500 space-x-3">
            <i class="bi bi-shuffle"></i>
            <span>Random cards</span>
          </li>
          <li className="flex px-6 items-center text-blue-500 space-x-3">
            <i class="bi bi-calendar"></i>
            <span>Idiom of the day</span>
          </li>
          <li className="flex px-6 items-center text-blue-500 space-x-3">
            <i class="bi bi-emoji-laughing"></i>
            <span>Learn by category</span>
          </li>
          <li className="flex px-6 items-center text-blue-500 space-x-3">
            <i class="bi bi-plus-lg"></i>
            <span>Contribute</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
