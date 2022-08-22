

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="p-4 bg-gray-800 text-gray-200">
      <div class="flex justify-between items-center">
        <div class="flex items-center pl-8">
          <i class="text-2xl fas fa-campground"></i>
          <h1 class="font-serif tracking-wide font-bold text-xl pl-4">
            Letterboxd
          </h1>
        </div>

        {/* <!-- NAVIGATION - LARGE SCREENS --> */}
        <div class="hidden md:flex">
          <ul class="hidden md:flex">
            <li class="text-lg pr-8 ">
              <Link
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="text-lg pr-8">
              <Link
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                aria-current="page"
                to="/watchlist/1"
              >
                Watchlist
              </Link>
            </li>
            <li class="text-lg pr-8">
              <Link
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                aria-current="page"
                to="/diary/1"
              >
                Diary
              </Link>
            </li>
            <li class="text-lg pr-8">
              <Link
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                aria-current="page"
                to="/searchFilms"
              >
                Search
              </Link>
            </li>
            <li class="text-lg pr-8">
              <Link
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                aria-current="page"
                to="/journal"
              >
                Journal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
