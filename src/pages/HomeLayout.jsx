import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";

function HomeLayout() {
  const { Login } = useSelector((state) => state.counter);
  console.log(Login);
  return (
    <>
      <header>
        <div className="absolute right-10 top-3 flex">
          {Login.length != 0 ? (
            <div>
              <img
                src={Login.image}
                className="w-14 h-14 rounded-lg"
                alt="Apple Watch"
              />
            </div>
          ) : (
            <Link to="/login">
              <button
                type="button"
                class="text-gray-900 hover:text-white text-black border border-gray-800 hover:bg-black bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                login
              </button>
            </Link>
          )}
        </div>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomeLayout;
