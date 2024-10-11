"use client";

import { useState } from "react";

export default function Gallery() {
  const [selection, setSelection] = useState("all");

  const projectsCategories = [
    "all",
    "bathroom",
    "decking",
    "flooring",
    "painting",
    "roofing",
    "chimney",
    "windows and doors",
  ];

  const selectImagesCategory = (category) => {
    console.log(category);
    setSelection(category);
  };

  return (
    <main>
      <div className="bg-white px-6 pt-32 pb-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-amber-600">
            Let the work talk for itself
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Projects Gallery
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A collection of our latest projects. We take pride in our work and we are proud to showcase it.
          </p>
        </div>
      </div>

      <hr className="pb-14" />

      <section className="w-full">
        <nav className="w-full flex flex-wrap items-center justify-center">
          {projectsCategories.map((category) => (
            <button
              onClick={() => selectImagesCategory(category)}
              key={category}
              className={`${
                selection === category ? "bg-amber-600" : "bg-amber-950"
              } rounded-xl mx-2 leading-6 text-white px-3 py-1 m-1`}
            >
              {category}
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}
