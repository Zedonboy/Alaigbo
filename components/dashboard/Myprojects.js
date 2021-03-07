import React, { useState } from "react";
import Project from "../../components/Project"
export default function MyProject() {
    let [prjPage, setPrjPage] = useState(0);
  return (
    <div class="container mx-auto flex justify-center flex-wrap pt-4 pb-12">
      <nav id="project-selector" class="flex flex-col sm:flex-row">
        <button
          onClick={(e) => {
            setPrjPage(0);
          }}
          class={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
            prjPage === 0 ? "active" : null
          }`}
        >
          Projects you invested in
        </button>
        <button
          onClick={(e) => {
          }}
          class={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
            prjPage === 1 ? "active" : null
          }`}
        >
          Projects you donated in
        </button>
      </nav>
      <div class="mt-8 w-full mb-4">
        <div class="h-1 mx-auto w-64 my-0 py-0 rounded-t"></div>
      </div>
      {prjPage === 0 ? (
        <>
          <Project />
          <Project />
          <Project />
          <Project />
        </>
      ) : null}
      {prjPage === 1 ? (
        <>
          <Project donate />
          <Project donate />
          <Project donate />
          <Project donate />
        </>
      ) : null}
    </div>
  );
}
