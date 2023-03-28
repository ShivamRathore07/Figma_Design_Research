import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menutabs = ({ props }) => {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="w-[25%] rounded-tr-[80px] bg-[#DECAFF] py-2">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/a7aa/dc44/6db7e2dd06ad98f52b7f40b9c32faa43?Expires=1679875200&Signature=SWjKAUyvDicKgEZ7fnj291vFmo2EABrAgOGujgOPNVd7x9SJxHfCVMHL1diEkTUySghW6OMzBPWc-q9eHBafaSQOzzuyO8O5-gGvpBtEGu6mXRJplof29Qi2OwDNUh3OzvVsx84XK9qlAYgFe2LH5K-O5C0Us4V9-Glgf2WfdZ1ASeA9WnFn8rH7H5v0qiiUoBV3YBeqBpXf1M~avBs9u3QRYNwaz6c0kGepyCOvrTAWyJGEX-xPNEuRyccaiSP2jE7bGqNxY~pfxds8dbnX2NwUuKnXGccHWkYc7yfsxJqwOCe-nMWRAVwW1csE1FnHtqbgnjYFufv1onNWP7kj4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <p className="font-bold text-lg">Mr. Lorem Ispum</p>
              <p>Lorem ipusm</p>
            </div>
          </div>
          <Link to="/dashboard">
            <div
              className={`flex items-center p-4 gap-2 hover:bg-[#ffffff] cursor-pointer mt-6 font-bold text-xl ${
                location.pathname === "/dashboard" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <RiDashboardFill color="#3C0792" size={38} />
              </div>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/research">
            <div
              className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl ${
                location.pathname === "/research" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <img
                  className="w-9 h-9"
                  src="https://s3-alpha-sig.figma.com/img/fe83/e04a/fc33046d3ffe073bf054785c4d79db08?Expires=1679875200&Signature=oEJf~~KRIz-uTQUmSsvwoRnXMuLPy45xcIY0QC3TnaruYVpBgBZFr56hAQO~P9VSVYBP5x1udOm1TmzU6LOjjaJMq7PXgOIJOYnKd9l-VR-mdabq-3owZJPV0l--X16Hs3ayYT4paWC0vmgFdYzpRU3bmAGqqJN8Mprnn2CdYtftXwCyMi11IHQnZEQsJUy3HzRLYEAq2jd472CsGDCQeagQxEpUACDnQr7eKOcL63L80z5MkoLV7yvHMYxAShfRZPcGsSh4JiyAK3O4DyhPWy6ztbDx2PF8rh3Gk5~UBFx-ncJtkOVHkO-glNExbs3bJjDlulzyZm84Ci04CZi9Pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="lgo"
                />
              </div>
              <p>Research</p>
            </div>
          </Link>
          <Link to="/articles">
            <div
              className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl ${
                location.pathname === "/articles" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <GiHamburgerMenu color="#3C0792" size={35} />
              </div>
              <p>Your Articles</p>
            </div>
          </Link>
          <Link to="/articles/add">
            <div
              className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl ${
                location.pathname === "/articles/add" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <GiHamburgerMenu color="#3C0792" size={35} />
              </div>
              <p>Add Articles</p>
            </div>
          </Link>
          <Link to="/blogs">
            <div
              className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl ${
                location.pathname === "/blogs" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <ImBlogger2 color="#3C0792" size={35} />
              </div>
              <p>Your Blogs</p>
            </div>
          </Link>
          <Link to="/blogs/write">
            <div
              className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl ${
                location.pathname === "/blogs/write" ? "bg-[#ffffff]" : ""
              }`}
            >
              <div>
                <ImBlogger2 color="#3C0792" size={35} />
              </div>
              <p>Write Blogs</p>
            </div>
          </Link>
          <div
            className={`flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer font-bold text-xl`}
          >
            <div>
              <IoMdSettings color="#3C0792" size={35} />
            </div>
            <p>Settings</p>
          </div>
          <div className="flex items-center p-4 gap-3 hover:bg-[#ffffff] cursor-pointer mt-6 font-bold text-xl">
            <div>
              <FiLogOut color="#3C0792" size={35} />
            </div>
            <p>Log Out</p>
          </div>
        </div>
        <div className="w-[73.5%] overflow-auto h-[50rem] scrollbar">
          {props}
        </div>
      </div>
    </>
  );
};

export default Menutabs;
