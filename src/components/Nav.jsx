import React, {useState} from 'react';
import { MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  }

  return (
     <nav className="w-full flex items-center justify-between bg-black text-white px-10 py-4 max-sm:fixed max-sm:z-30">
          <NavLink className="text-3xl font-bold font-mono max-sm:text-xl max-sm:me-4" to={"/"}>URMV</NavLink>
          <div className="flex items-center space-x-2 max-sm:justify-between">
              <NavLink className={({isActive}) => {
              return isActive? "active-text" : "non-active-text"
              }} to={"/"}>Popular</NavLink>
              <NavLink className={({isActive}) => {
              return isActive? "active-text" : "non-active-text"
              }} to={"/upcoming"} >Upcoming</NavLink>
          </div>
          <form className="flex items-center max-sm:justify-end" onSubmit={search}>
          <input type="text" className="text-2xl bg-transparent border-b border-b-slate-300 focus:outline-none max-sm:text-xl max-sm:w-1/2 " onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">
              <MagnifyingGlassIcon className="w-8 h-8 max-sm:w-4 max-sm:h-4" />
            </button>
          </form>
     </nav>
  );
}

export default Nav