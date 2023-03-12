import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 w-full navbar shadow-lg text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto header-wrapper">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2 logo">
          <Link
            to="/"
            className="text-3xl text-white font-bold whitespace-nowrap"
          >
            피켓팅
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <Link
            to="/info"
            className="btn btn-ghost btn-md rounded-btn text-xl text-white nav-button"
          >
            About
          </Link>
					<Link
						to="/how"
						className="btn btn-ghost btn-md rounded-btn text-xl text-white nav-button"
					>
						How
					</Link>
          <a
            href="#"
            className="btn btn-ghost btn-md rounded-btn text-xl text-white nav-button"
          >
            Game
          </a>
          <a
            href="#"
            className="btn btn-ghost btn-md rounded-btn text-xl text-white nav-button"
          >
            Result
          </a>
        </div>
        <div className="flex items-center px-2">
          <a
            href="#"
            className="btn btn-ghost btn-sm rounded-btn text-xl text-white"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
