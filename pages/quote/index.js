import React from "react";

function Quotes() {
  return (
    <div className="fixed h-screen w-screen">
      <div className="fixed right-6 top-8 z-10">
        <button className="border border-black px-5 text-xs py-2 rounded-full">
          Contribute
        </button>
      </div>
      <div className="fixed w-fit h-56 bottom-0 right-8 z-10 flex flex-col justify-center items-center space-y-8 text-2xl">
        <i class="bi bi-heart"></i>
        <i class="bi bi-bookmark"></i>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <div className="absolute h-full w-full  overflow-y-auto snap-y snap-mandatory">
        <div className="h-screen w-full bg-red-50 snap-center snap-always"></div>
        <div className="h-screen w-full bg-blue-50 snap-center snap-always"></div>
        <div className="h-screen w-full bg-green-50 snap-center snap-always"></div>
      </div>
    </div>
  );
}

export default Quotes;
