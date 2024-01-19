"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="md:flex md:justify-between md:items-center border-b py-7 px-6 md:px-20"
    >
      <div className="w-full flex items-center justify-between uppercase md:px-4 py-3 md:p-0">
        <Link href="/" className="">
          Thomas Corbières
        </Link>
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-8-8a1 1 0 011.414-1.414l8 8z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
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
