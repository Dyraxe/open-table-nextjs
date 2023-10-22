export default function Home() {
  return (
    <main className="min-h-screen  w-screen  bg-gray-100">
      <main className="m-auto w-9/12 bg-white">
        {/* NavBar */}
        <nav className="flex select-none items-center justify-between bg-white p-2 sm:items-baseline">
          <a className="text-reg font-bold text-gray-700 sm:text-2xl" href="">
            OpenTable
          </a>
          <div className="">
            <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-3 sm:space-y-0">
              <button className="rounded bg-blue-400 px-4 py-1 text-white">
                Sign In
              </button>
              <button className="rounded px-4  py-1 ">Sign Up</button>
            </div>
          </div>
        </nav>
        {/* NavBar */}
        <main>
          {/* HEADER */}
          <div className="h-64 rounded bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="mt-5 text-center  min-[801px]:mt-10">
              <h1 className="mb-2 text-lg font-bold text-white sm:text-5xl">
                Find your table for any occasion
              </h1>
              {/* SearchBar */}
              <div className="m-auto flex flex-col items-center justify-center space-y-4 py-3 text-left sm:flex-row sm:items-baseline sm:space-y-0 sm:text-lg">
                <input
                  type="text"
                  placeholder="State, city or town"
                  className="mr-3 w-[60%] max-w-[450px] rounded p-2 "
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white">
                  Let's go
                </button>
              </div>
              {/* SearchBar */}
            </div>
          </div>
          {/* HEADER */}
        </main>
      </main>
    </main>
  );
}
