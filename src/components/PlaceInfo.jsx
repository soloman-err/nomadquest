import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PlaceInfo = () => {
  return (
    <div className="py-20 space-y-10 w-[50%]">
      <h1 className="text-5xl font-bold uppercase">Saint Martin</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        repellat eveniet, cupiditate harum quam debitis ut maxime ratione
        voluptatem maiores sit repellendus quas error? Iure repellendus
        laudantium earum accusantium
      </p>
      <button className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-500 text-white font-bold">
        Book now <FaArrowRight />
      </button>
    </div>
  );
};

export default PlaceInfo;
