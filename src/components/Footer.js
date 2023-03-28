import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { BiStopwatch } from "react-icons/bi";
import { SlScreenSmartphone } from "react-icons/sl";
import {
  BsYoutube,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center py-10 text-white bg-[#3C0792]">
        <div className="w-[80%]">
          <div className="flex justify-evenly">
            <div className="w-[19%]">
              <p className="font-bold text-2xl mb-10">LOGO & NAME</p>
              <p className="text-sm">
                Johns Hopkins dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cras adipiscing enim eu turpis egestas pretium aenean
              </p>
            </div>
            <div className="w-[15%]">
              <p className="font-bold text-xl">Our Services</p>
              <hr className="w-[40%] border-2 mb-6 border-[#0887FC] rounded-lg" />
              <ul className="list-disc ml-6 leading-8">
                <li>CCK-GABA</li>
                <li>CCK-GABA</li>
                <li>CCK-GABA</li>
                <li>CCK-GABA</li>
              </ul>
            </div>
            <div className="w-[15%]">
              <p className="font-bold text-xl">Quick Links</p>
              <hr className="w-[40%] border-2 mb-6 border-[#0887FC] rounded-lg" />
              <ul className="list-disc ml-6 leading-8">
                <li>Johns Hopkins</li>
                <li>Johns Hopkins</li>
                <li>Johns Hopkins</li>
                <li>Johns Hopkins</li>
              </ul>
            </div>
            <div className="w-[15%]">
              <p className="font-bold text-xl">Contact Info</p>
              <hr className="w-[40%] border-2 mb-6 border-[#0887FC] rounded-lg" />
              <div>
                <p className="mt-4">
                  <IoLocationSharp size={25} />
                </p>
                <p className="mt-4">
                  <MdMailOutline size={25} />
                </p>
                <p className="mt-4">
                  <SlScreenSmartphone size={25} />
                </p>
                <p className="mt-4">
                  <BiStopwatch size={25} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <div className="flex justify-evenly w-[60%]">
              <p>
                <BsYoutube size={40} />
              </p>
              <p>
                <BsFacebook size={40} />
              </p>
              <p>
                <MdMailOutline size={40} />
              </p>
              <p>
                <BsTwitter size={40} />
              </p>
              <p>
                <BsPinterest size={40} />
              </p>
              <p>
                <BsInstagram size={40} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
