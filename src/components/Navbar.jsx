import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchPosts, handleSearch } from "../redux/slices/FeatureSlice";

const Navbar = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <nav className="flex xl:justify-between p-4 bg-transparent backdrop-brightness-50 backdrop-blur-lg text-white font-semibold items-center fixed w-full flex-wrap md:justify-center">
        <div className="flex gap-x-4 items-center flex-wrap justify-center">
          <NavLink to={"/"}>
            <h2 className="text-xl border-2 p-2 rounded-tr-xl rounded-bl-xl">
              Sachin <span className="bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-800">Upadhyay</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex gap-x-2">
          <input
            type="Search"
            ref={inputRef}
            className="p-2.5 focus:outline-none text-white bg-gray-800 w-96"
            placeholder="Search"
          />

          <button
            className="border px-6 hover:bg-gray-600 duration-200"
            onClick={() => {
              dispatch(handleSearch(inputRef.current.value)),
                (inputRef.current.value = "");
            }}
          >
            Search
          </button>
        </div>

        <ul className="flex gap-x-5 md:text-xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            <h2 className="">Home</h2>
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            <li className="cursor-pointer">Products</li>
          </NavLink>
          <NavLink
            to={"/category"}
            
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            <li className="cursor-pointer">Category</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
