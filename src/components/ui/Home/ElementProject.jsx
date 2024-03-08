"use client";
import React from "react";

export default function index({ index, title, categories, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="py-10 border-b menu__item relative link-container hover:bg-white hover:text-primary flex flex-wrap md:flex-nowrap w-full justify-between items-center px-6 md:px-20"
    >
      <span className="menu__item-text w-full md:w-auto">
        <h3 className="font-amphora menu__item-textinner relative z-0 text-[28px] pl-5 before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:bg-current before:rounded-full before:top-2/4 before:-translate-y-2/4 before:-left-0">
          {title}
        </h3>
      </span>
      <div className="font-switzer flex flex-col md:flex-row text-2xl font-extralight">
        {Object.values(categories).map((categorie, index, array) => (
          <p
            key={index}
            className={`${index !== array.length - 1 ? "pr-6" : ""}`}
          >
            {categorie}
          </p>
        ))}
      </div>
      <span className="max-w-[82px]">
        <svg
          width="82"
          height="34"
          viewBox="0 0 82 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.289062 16.9722L79.2338 16.9722"
            stroke="#26A8DF"
            strokeWidth="2"
          />
          <path
            d="M81 17.059C74.0101 16.6478 60.0303 17.059 60.0303 33.0283"
            stroke="#26A8DF"
            strokeWidth="2"
          />
          <path
            d="M81 16.9413C74.0101 17.3525 60.0303 16.9413 60.0303 0.971945"
            stroke="#26A8DF"
            strokeWidth="2"
          />
        </svg>
      </span>
    </div>
  );
}
