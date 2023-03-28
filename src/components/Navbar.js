import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation()
  return (
    <>
      <div className="flex px-2">
        <div className="w-[30%] flex items-center gap-4 pl-4">
          <Link to="/">
          <img
            className="rounded-full w-20 h-20"
            src="https://s3-alpha-sig.figma.com/img/9bab/667c/d23eb4a330a5724600c130d526aca4a0?Expires=1679875200&Signature=YLYryysZhmm94UnSpKbXT35MGxW~grVOJCNz5~-nyaujzy~026psjEWJkeBXWpKW813i14v8l0EPMLUsBiCp3366pZuUTdnwkLpxcFfdscPR9Gh5lktou~03u7oDZ6X~GcdXeRFPXVkrpINYI2fMgRkV78fmOC2jLJQVltPL7kR3bxdhZM4GUwAByf5rIn4Yt2U46KcxnfozsMfd04mebG4mT2yPC2jy4uDYDabg53hC-2mj60wCWp7Kt8TkN7KtdSXbg9JQIYUGMr3ELxEmKSgNRRphQe9dL~AFx-4BrjurSFZnz7JKImeOHAHqHeeAe-wEwAwxDjqsrL72aX77tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
          />
          </Link>
          <p className="text-2xl text-[#3C0792] font-semibold">Vision & AI Lab</p>
        </div>
        <div className="w-[70%]">
          <div className="flex justify-end items-center gap-2 mt-2">
            <div className="relative flex items-center w-[35%]">
              <div className="absolute pl-3">
                <RiSearch2Fill color="#3C0792" size={20} />
              </div>
              <input
                className="border border-[#3C0792] box-border rounded-xl w-full pl-10 py-2 mr-4 bg-[#ffffff] focus:outline-none"
                type="text"
                name="search"
                placeholder="Search.."
              />
            </div>
            <button className="rounded-md bg-[#3C0792] px-5 py-2 text-md font-semibold text-white">
              Login
            </button>

            <button className="border border-[#3C0792] rounded-md px-4 py-2 text-md font-semibold text-[#3C0792]">
              Signup
            </button>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center mr-6 bg-[#3C0792]">
              <Link to="/">
              <p className={`font-semibold px-10 text-md py-3 hover:bg-[#DECAFF] hover:text-[#3C0792] cursor-pointer ${location.pathname==="/" ? "bg-[#DECAFF] text-[#3C0792]" : "text-white"}`}>
                Home
              </p>
              </Link>
              <Link to="/research">
              <p className={`font-semibold px-10 text-md py-3 hover:bg-[#DECAFF] hover:text-[#3C0792] cursor-pointer ${location.pathname==="/research" ? "bg-[#DECAFF] text-[#3C0792]" : "text-white"}`}>
                Research
              </p>
              </Link>
              <Link to="/peoples">
              <p className={`font-semibold px-10 text-md py-3 hover:bg-[#DECAFF] hover:text-[#3C0792] cursor-pointer ${location.pathname==="/peoples" ? "bg-[#DECAFF] text-[#3C0792]" : "text-white"}`}>
                People
              </p>
              </Link>
              <p className="font-semibold px-10 text-md py-3 text-white hover:bg-[#DECAFF] hover:text-[#3C0792] cursor-pointer">
                Opening
              </p>
              <p className="font-semibold px-10 text-md py-3 text-white hover:bg-[#DECAFF] hover:text-[#3C0792] cursor-pointer">
                Services
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 border border-[#3C0792] rounded-md px-4 py-3 text-md font-semibold text-[#3C0792]">
                <div>
                  <FaUserCircle size={20} />
                </div>
                <p>Admin</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
