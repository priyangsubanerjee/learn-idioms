/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="h-screen fixed inset-0 flex flex-col">
      <div className="px-6 mt-6 hidden">
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
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-800 tracking-wide font-playfair">
            Idioms
          </h1>
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
        <div className="flex h-10 bg-zinc-100 rounded-lg mt-6 items-center px-3">
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
        <ul className="px-6">
          <li className="flex py-3 border-b items-center text-blue-500 space-x-3">
            <i class="bi bi-heart"></i>
            <span>Favourites</span>
          </li>
          <li className="flex py-3 border-b items-center text-blue-500 space-x-3">
            <i class="bi bi-shuffle"></i>
            <span>Random cards</span>
          </li>
          <li className="flex py-3 border-b items-center text-blue-500 space-x-3">
            <i class="bi bi-calendar"></i>
            <span>Idiom of the day</span>
          </li>
          <li className="flex py-3 border-b items-center text-blue-500 space-x-3">
            <i class="bi bi-emoji-laughing"></i>
            <span>Learn by category</span>
          </li>
          <li className="flex py-3 items-center text-blue-500 space-x-3">
            <i class="bi bi-plus-lg"></i>
            <span>Contribute</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <div className="mt-5 overflow-x-auto flex items-center px-6 snap-x snap-mandatory lg:snap-none scrollbar-hide">
          <div className="flex sticky left-0 z-0 items-center snap-mandatory snap-center snap-always bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500 space-x-2 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-indigo-500"
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
            <span className="font-medium">Trending</span>
          </div>
          <div className="w-screen bg-white z-10 pr-12 lg:pr-6">
            <div className="bg-zinc-50 z-10 w-full rounded-md px-4 py-4 shrink-0 snap-mandatory snap-center snap-always">
              <p className="text-xs text-indigo-500">200 people love this</p>
              <h2 className="mt-3 w-full whitespace-nowrap overflow-hidden text-ellipsis text-zinc-800 font-semibold">
                Idiom phrase
              </h2>
              <p className="mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                rem?
              </p>
            </div>
          </div>
          <div className="w-screen bg-white z-10 pr-12 lg:pr-6">
            <div className="bg-zinc-50 z-10 w-full rounded-md px-4 py-4 shrink-0 snap-mandatory snap-center snap-always">
              <p className="text-xs text-indigo-500">200 people love this</p>
              <h2 className="mt-3 w-full whitespace-nowrap overflow-hidden text-ellipsis text-zinc-800 font-semibold">
                Idiom phrase
              </h2>
              <p className="mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                rem?
              </p>
            </div>
          </div>
          <div className="w-screen bg-white z-10 pr-12 lg:pr-6">
            <div className="bg-zinc-50 z-10 w-full rounded-md px-4 py-4 shrink-0 snap-mandatory snap-center snap-always">
              <p className="text-xs text-indigo-500">200 people love this</p>
              <h2 className="mt-3 w-full whitespace-nowrap overflow-hidden text-ellipsis text-zinc-800 font-semibold">
                Idiom phrase
              </h2>
              <p className="mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                rem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
