"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="md:flex md:justify-between md:items-center border-b py-7 px-6 md:px-20 bg-primary"
    >
      <div className="w-full flex items-center justify-between uppercase md:px-4 py-3 md:p-0">
        <Link href="/" className="">
          Thomas Corbières
        </Link>
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav
        className={`uppercase px-2 pt-2 pb-4 md:flex md:p-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/about"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:hover:bg-white flex items-center px-2 py-1"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:hover:bg-white mt-1 flex items-center px-2 py-1 md:mt-0 md:ml-10"
        >
          Projects
        </Link>
        <Link
          href="mailto:t.corbieres@gmail.com"
          className="before:inline-block before:w-2 before:h-2 before:mr-3
            before:bg-transparent before:rounded-full before:border before:hover:bg-white mt-1 flex items-center px-2 py-1 md:mt-0 md:ml-10"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
