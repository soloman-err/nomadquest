import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between py-5 items-center">
        <div className="flex gap-5">
          <h2 className="text-2xl font-bold uppercase text-black">
            nomadquest
          </h2>

          <input
            className="px-4  py-1 rounded-full border"
            type="search"
            name="search"
            placeholder="search your destination.."
          />
        </div>

        <div>
          <ul className="flex gap-3">
            <li>Home</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <button className="border px-3 py-1 rounded">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
