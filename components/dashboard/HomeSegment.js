import Project from "../../components/Project";
import { useState } from "react";
export default function HomeSegment() {
  let [prjPage, setPrjPage] = useState(0);
  return (
    <>
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        {/*Console Content*/}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-green-600">
                    <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Total Donation
                  </h5>
                  <h3 className="font-bold text-3xl">
                    $3249{" "}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up" />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-pink-600">
                    <i className="fas fa-users fa-2x fa-fw fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Total Investments
                  </h5>
                  <h3 className="font-bold text-3xl">
                    $249{" "}
                    <span className="text-pink-500">
                      <i className="fas fa-exchange-alt" />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
        </div>
      </div>
      <div class="container mx-auto flex justify-center flex-wrap pt-4 pb-12">
        <nav id="project-selector" class="flex flex-col sm:flex-row">
          <button
            onClick={(e) => {
                setPrjPage(0)
            }}
            class={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
              prjPage === 0 ? "active" : null
            }`}
          >
            Projects you invested in
          </button>
          <button
            onClick={(e) => {
                setPrjPage(1)
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
            <Project donate/>
            <Project donate/>
            <Project donate/>
            <Project donate/>
          </>
        ) : null}
      </div>
    </>
  );
}
