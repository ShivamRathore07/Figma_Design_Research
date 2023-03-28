import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Your Blogs</p>
          <div className="flex gap-2 items-center font-semibold">
            <div>
              <IoMdAddCircle size={25} />
            </div>
            <p>Add New</p>
          </div>
        </div>
        <hr className="mt-1 border-[#000000]" />
        <div className="flex items-center gap-10 text-lg font-semibold py-2">
          <p className="border-[#3C0792] border-b-4 rounded">All</p>
          <p className="border-[#3C0792] border-b-4 rounded">Projects</p>
          <p className="border-[#3C0792] border-b-4 rounded">Personal</p>
          <p className="border-[#3C0792] border-b-4 rounded">Business</p>
          <p className="border-[#3C0792] border-b-4 rounded">Projects</p>
          <p className="border-[#3C0792] border-b-4 rounded">Courses</p>
        </div>
      </div>
      <div className="flex border p-3 gap-4 bg-[#DECAFF] mt-4">
        <img
          className="w-full h-64"
          src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div>
          <p className="font-bold text-xl text-[#3C0792]">Innovation and Technology</p>
          <p className="text-lg">
            GABA is one of the important inhibitory neurotransmitters, and much
            evidence shows that CCK may be involved in modulating GABA signaling
            in many brain areas. However, the role of CCK-GABA neurons in the
            cortical microcircuits is still unclear. We identified a novel CCK
            receptor, GPR173, localized in the CCK-GABA synapses and.
          </p>
          <div className="flex items-end justify-end h-[7rem] w-full">
            <BsArrowRight size={60} />
          </div>
        </div>
      </div>
      <div className="flex border p-3 gap-4 bg-[#DECAFF] mt-4">
        <img
          className="w-full h-64"
          src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div>
          <p className="font-bold text-xl text-[#3C0792]">Innovation and Technology</p>
          <p className="text-lg">
            GABA is one of the important inhibitory neurotransmitters, and much
            evidence shows that CCK may be involved in modulating GABA signaling
            in many brain areas. However, the role of CCK-GABA neurons in the
            cortical microcircuits is still unclear. We identified a novel CCK
            receptor, GPR173, localized in the CCK-GABA synapses and.
          </p>
          <div className="flex items-end justify-end h-[7rem] w-full">
            <BsArrowRight size={60} color="#3C0792" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border p-3 gap-4 bg-[#DECAFF] mt-4 w-[50%]">
          <img
            className="w-full h-64"
            src="https://s3-alpha-sig.figma.com/img/ad71/68d9/371d8031e0bfe4778607010e880659eb?Expires=1679875200&Signature=BWTlJ6fbxWnzLU5y-v~Ka1F5eIo6t5vJS2WuvJI05iOYDKqVzlx57Yn-nKn-f-791AJ09eTIwBaN3okfkTULSeqH8Z6yxAMb41UnENcyFQTVETmZ1ZK9KFXb6Wrs-PY90AuxF~0nFmQp8sOMWc-i3QrJesOER9V9QxunXqPBp8NHE9svU2QiOAelaD-il~PvLWF0w7So0OoWH0s5dUKnNsVJ2VOVz5V9~iqSMZAD9Gbdjk~1sOSemqFUl4DZ~4~C0uG~sWFHxYoWkEyUdb~GFHurRFbZ6igxe9XoNp73k7T63sQK94vooqWuWqDPfzi4YTOXop1V50AeDeYVokWs8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div>
            <p className="font-bold text-2xl text-[#3C0792]">Innovation and Technology</p>
            <p className="text-lg">
              CCK-GABA neurons in the cortical microcircuits is still unclear.
              We identified a novel CCK receptor, GPR173.
            </p>
            <div className="flex justify-end">
              <BsArrowRight size={60} color="#3C0792" />
            </div>
          </div>
        </div>
        <div className="border p-3 gap-4 bg-[#DECAFF] mt-4 w-[50%]">
          <img
            className="w-full h-64"
            src="https://s3-alpha-sig.figma.com/img/ad71/68d9/371d8031e0bfe4778607010e880659eb?Expires=1679875200&Signature=BWTlJ6fbxWnzLU5y-v~Ka1F5eIo6t5vJS2WuvJI05iOYDKqVzlx57Yn-nKn-f-791AJ09eTIwBaN3okfkTULSeqH8Z6yxAMb41UnENcyFQTVETmZ1ZK9KFXb6Wrs-PY90AuxF~0nFmQp8sOMWc-i3QrJesOER9V9QxunXqPBp8NHE9svU2QiOAelaD-il~PvLWF0w7So0OoWH0s5dUKnNsVJ2VOVz5V9~iqSMZAD9Gbdjk~1sOSemqFUl4DZ~4~C0uG~sWFHxYoWkEyUdb~GFHurRFbZ6igxe9XoNp73k7T63sQK94vooqWuWqDPfzi4YTOXop1V50AeDeYVokWs8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div>
            <p className="font-bold text-2xl text-[#3C0792]">Innovation and Technology</p>
            <p className="text-lg">
              CCK-GABA neurons in the cortical microcircuits is still unclear.
              We identified a novel CCK receptor, GPR173.
            </p>
            <div className="flex justify-end">
              <BsArrowRight size={60} color="#3C0792" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
