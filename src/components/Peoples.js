import React from "react";
import { TbPointFilled } from "react-icons/tb";
const Peoples = () => {
  return (
    <>
      <div className="flex items-center bg-[#B6E9FF] text-lg font-semibold gap-8 h-10 p-6 mt-4">
        <p>Faculty</p>
        <p>Staff</p>
        <p>Grad. Students</p>
        <p>U.Grad. students</p>
        <p>Head Consultant</p>
        <p>Alums</p>
        <p>2021 Graduates</p>
        <p>2022 Graduates</p>
      </div>
      <p className="font-bold text-4xl text-center mt-6">
        People And Organizations
      </p>
      <hr className="mt-4 border-[#000000]" />
      <div className="flex justify-between mt-4">
        <div className="w-[35%]">
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-16 text-white text-3xl rounded-r-full h-20 font-bold gap-2 w-[90%]">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Faculty</p>
            </div>
            <div className="ml-[20%]">
              <p className="text-xl font-bold mt-2">
                Faculty and Post - Documents
              </p>
              <ul className="list-disc ml-14 font-semibold text-lg mt-2">
                <li>Faculty roles</li>
                <li>Faculty schedules</li>
              </ul>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-16 text-white text-3xl rounded-r-full h-20 font-bold gap-2 w-[90%]">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Students</p>
            </div>
            <div className="ml-[20%]">
              <p className="text-xl font-bold mt-2">Under Graduate Students</p>
              <p className="text-xl font-bold">Graduate Students</p>
              <ul className="list-disc ml-14 font-semibold text-lg">
                <li>Graduation Positions</li>
                <li>Faculty schedules</li>
              </ul>
              <p className="text-xl font-bold mt-2">Alumni</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-16 text-white text-3xl rounded-r-full h-20 font-bold gap-2 w-[90%]">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Students</p>
            </div>
            <div className="ml-[20%]">
              <p className="text-xl font-bold mt-2">Technical Staff</p>
              <p className="text-xl font-bold mt-1">Administrative Staff</p>
              <p className="text-xl font-bold mt-1">Research Staff</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] ">
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-10 text-white text-3xl rounded-l-full h-20 font-bold gap-2">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Students</p>
            </div>
            <div className="ml-[8%]">
              <p className="text-xl font-bold mt-2">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-10 text-white text-3xl rounded-l-full h-20 font-bold gap-2">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Contact Info</p>
            </div>
            <div className="ml-[8%]">
              <p className="text-xl font-bold mt-2">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-[#003F5A] pl-10 text-white text-3xl rounded-l-full h-20 font-bold gap-2">
              <div>
                <TbPointFilled size={40} color="#ffffff" />
              </div>
              <p>Organizations</p>
            </div>
            <div className="ml-[8%]">
              <p className="text-xl font-bold mt-2">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
              <p className="text-xl font-bold mt-1">Programs and Centers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peoples;
