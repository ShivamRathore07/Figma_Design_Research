import React from "react";
import ReactMarkdown from "react-markdown";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { IoMdAddCircle } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const AddBlogs = () => {
  const [value, setValue] = React.useState("");
  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">Blogs</p>
        <div className="flex gap-2 items-center font-semibold">
          <div>
            <IoMdAddCircle size={25} />
          </div>
          <p>Add New</p>
        </div>
      </div>
      <hr className="mt-1 border-[#000000]" />
      <MdEditor
        onChange={handleEditorChange}
        value={value}
        placeholder="Write Your Articles"
        className="h-72 mt-4"
        renderHTML={(text) => <ReactMarkdown source={text} />}
      />
      <div className="flex border p-3 gap-4 bg-[#DECAFF] mt-4">
        <img
          className="w-full h-64"
          src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div>
          <p className="font-bold text-xl text-[#3C0792]">
            Innovation and Technology
          </p>
          <p className="text-lg">
            This work was supported by Hong Kong Research Grants Council,
            General Research Fund Grants 11101215M, 11103220M, 11101818M,
            11102417M, 11101521M, and 11102422 (J.H.); Hong Kong Research Grants
            Council, Collaborative Research Fund Grants C1014-15g and C7048-16g,
            and C1043-21 GF (J.H.); Innovation and Technology Fund Grants
            MRP/053/18X, MRP/101/17X, and GHP_075_19GD; (J.H.); Health and
            Medical Research Fund Grants 06172456 and 09203656 (X.C. and J.H.).
          </p>
          <div className="flex items-end justify-end h-[7rem] w-full">
            <BsArrowRight size={60} color="#3C0792" />
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
          <p className="font-bold text-xl text-[#3C0792]">
            Innovation and Technology
          </p>
          <p className="text-lg">
            Innovation and Technologydolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Diam volutpat commodo sed egestas egestas fringilla
            phasellus faucibus. Est velit egestas dui id ornare arcu odio ut.
            Sed pulvinar proin gravida hendrerit lectus a. Enim neque volutpat
            ac tincidunt vitaenpm run build semper.{" "}
          </p>
          <div className="flex items-end justify-end h-[7rem] w-full">
            <BsArrowRight size={60} color="#3C0792" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogs;
