import React from "react";
import Button from "./Button";
import Progressbar from "./Progressbar";
import Tag from "./Tag";

export default function Project({ donate }) {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="rounded-lg overflow-hidden">
        <div className="relative overflow-hidden pb-60">
          <img
            className="absolute h-full w-full object-cover object-center"
            src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/5c77d8a62417e4405611bb42_3k-color-1-scaled.jpg"
            alt=""
          />
        </div>
        <div className="relative bg-white text-black">
          <div className="py-10 px-8">
            <h3 className="text-2xl font-bold">Notepad</h3>
            <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
              <p>Provided by&nbsp;</p>
              <a
                href="https://www.ls.graphics/"
                className="hover:text-black transition duration-300 ease-in-out"
              >
                LS Graphics
              </a>
            </div>
            <p className="leading-7">
              High quality notepad mockup in a huge resolution and with
              changeable everything.
            </p>
            <div className="flex w-full">
              <Progressbar />
            </div>
            <div className="mt-10 flex justify-between items-center">
              <div>
                <Tag name="engineering" />
              </div>
              {donate ? <Button>Donate</Button> : <Button>Invest</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
