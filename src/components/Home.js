import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { VscVerifiedFilled } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="flex gap-10 mt-4">
        <div className="w-[25%]">
          <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
            <p>Latest News</p>
          </div>
          <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
            <p>Careers</p>
          </div>
          <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
            <p>Blogs</p>
          </div>
          <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
            <p>Updates</p>
          </div>
          <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
            <p>Publications</p>
          </div>
        </div>
        <div className="w-[68%]">
          <img
            className="h-96 w-full"
            src="https://s3-alpha-sig.figma.com/img/9bab/667c/d23eb4a330a5724600c130d526aca4a0?Expires=1679875200&Signature=YLYryysZhmm94UnSpKbXT35MGxW~grVOJCNz5~-nyaujzy~026psjEWJkeBXWpKW813i14v8l0EPMLUsBiCp3366pZuUTdnwkLpxcFfdscPR9Gh5lktou~03u7oDZ6X~GcdXeRFPXVkrpINYI2fMgRkV78fmOC2jLJQVltPL7kR3bxdhZM4GUwAByf5rIn4Yt2U46KcxnfozsMfd04mebG4mT2yPC2jy4uDYDabg53hC-2mj60wCWp7Kt8TkN7KtdSXbg9JQIYUGMr3ELxEmKSgNRRphQe9dL~AFx-4BrjurSFZnz7JKImeOHAHqHeeAe-wEwAwxDjqsrL72aX77tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="imge"
          />

          <div className="mt-2">
            <p className="font-bold text-4xl text-[#3C0792] text-center">
              About
            </p>
            <hr className="mt-4 border-[#000000]" />
            <p className="font-semibold text-2xl text-[#3C0792] text-center mt-4 ">
              A New Way To Gain Your Knowledge
            </p>
            <p className="mt-2">
              We present a biologically inspired recurrent neural network (RNN)
              that efficiently detects changes in natural images. The model
              features sparse, topographic connectivity (st-RNN), closely
              modeled on the circuit architecture of a “midbrain attention
              network.” We deployed the st-RNN in a challenging change blindness
              task, in which changes must be detected in a discontinuous
              sequence of images. Compared with a conventional RNN, the st-RNN
              learned 9x faster and achieved state-of-the-art performance with
              15x fewer connections. An analysis of low-dimensional dynamics
              revealed putative circuit mechanisms, including a critical role
              for a global inhibitory (GI) motif, for successful change
              detection. The model reproduced key experimental phenomena.
            </p>
          </div>
          <div className="flex justify-between items-center bg-[#DECAFF] px-14 py-6 mt-4">
            <div className="text-[#3C0792] font-bold text-2xl text-center">
              <div className="flex justify-center">
                <VscVerifiedFilled size={40} />
              </div>
              <p>Verification</p>
              <div className="flex justify-center">
                <div className="border border-[#3C0792] w-[50%]"></div>
              </div>
            </div>
            <div className="text-[#3C0792] font-bold text-2xl text-center">
              <div className="flex justify-center">
                <VscVerifiedFilled size={40} />
              </div>
              <p>Prediction</p>
              <div className="flex justify-center">
                <div className="border border-[#3C0792] w-[50%]"></div>
              </div>
            </div>
            <div className="text-[#3C0792] font-bold text-2xl text-center">
              <div className="flex justify-center">
                <VscVerifiedFilled size={40} />
              </div>
              <p>Enrichment</p>
              <div className="flex justify-center">
                <div className="border border-[#3C0792] w-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-[#000000]" />
      <div className="mt-6">
        <div className="flex justify-center items-center mb-4">
          <p className="font-bold text-[#3C0792] text-4xl border-b border-[#3C0792] py-2 px-8">
            Our Publications
          </p>
        </div>
        <p>
          SIGNIFICANCE STATEMENT For adaptive survival, our brains must be able
          to accurately and rapidly detect changing aspects of our visual world.
          We present a novel deep learning model, a sparse, topographic
          recurrent neural network (st-RNN), that mimics the neuroanatomy of an
          evolutionarily conserved “midbrain attention network.” The st-RNN
          achieved robust change detection in challenging change blindness
          tasks, outperforming conventional RNN architectures. The model also
          reproduced hallmark experimental phenomena, both neural and
          behavioral, reported in seminal midbrain studies. Lastly.
        </p>
      </div>
      <hr className="mt-4 mb-6 border-[#000000] border-3" />
      <div>
        <div className="flex justify-center items-center mb-4">
          <input
            className="border border-[#3C0792] box-border  w-[27%] pl-5 py-3 bg-[#ffffff] focus:outline-none"
            type="text"
            name="search"
            placeholder="Search Our Publications..."
          />
          <p className="flex border border-[#3C0792] items-center gap-2 bg-[#3C0792] px-4 py-3 text-md font-semibold text-white">
            <div>
              <AiOutlineSearch size={20} />
            </div>
            <p>Search</p>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                CCK, the most abundant and widely distributed neuropeptide in
                the central nervous system, colocalizes with many
                neurotransmitters and modulators. GABA is one of the important
                inhibitory neurotransmitters..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                volutpat commodo sed egestas egestas fringilla phasellus
                faucibus..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                labore et dolore magna aliqua, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                CCK, the most abundant and widely, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Diam volutpat commodo sed egestas egestas fringilla
                phasellus faucibus..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                CCK, the most abundant and widely, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Diam volutpat commodo sed egestas egestas fringilla
                phasellus faucibus..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
          <div className="flex p-3 gap-4 mt-3">
            <img
              className="w-full h-56"
              src="https://s3-alpha-sig.figma.com/img/29f4/95de/670314fd907da73cc279689bb72ebf24?Expires=1679875200&Signature=CswFcXkFZPP39DitfRN4nbXZmbm-Ha2q7zPZ11Pcx---Q1D9E-IJ~odm~ofGmX9ExI4QDdks9ld1cipOhmjwV96kWF2HRgH-5bEQPxIJfP9Vs18Lsqc5oASOidir0hmnOghRCsRoCisEWAt1ddjpsBIAr72cZ-PJMuK4Lbl2Ro5mOfVM~BjeFfoX50R7yo-k7cTAHmkVzRcv2-vgOAtkmn-WOv7qVBtnPMIMOgG1cPQRz0UKhfhSffRhFHM0NrpShtEsl9Cy~wU-vTVIy4ujB8zSaHj1SuLDi2o4IIrFu~HlShTj-FySJiqdn99Y-7KirzKpP7l8cNj004wDG1CsCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <p className="font-bold text-xl text-[#3C0792]">
                CCK, the most abundant and widely...
              </p>
              <p className="text-lg">
                CCK, the most abundant and widely, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Diam volutpat commodo sed egestas egestas fringilla
                phasellus faucibus..................
              </p>
              <p className="text-[#3C0792] font-semibold mt-2">
                Sun. , 19/03/2023 , 01:33 PM
              </p>
              <p className="text-[#3C0792] font-semibold">
                By - Lorem Ispum , TOI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex justify-center items-center ">
          <p className="font-bold text-[#3C0792] text-4xl border-b border-[#3C0792] py-2 px-8">
            Top researches
          </p>
        </div>
        <div className="flex justify-around mt-6">
          <div className="w-[28%] p-2">
            <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
              <p>Market Research</p>
            </div>
            <p>
              CCK, the most abundant and widely, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Diam volutpat commodo sed egestas egestas fringilla phasellus
              faucibus. Est velit egestas dui id ornare arcu odio ut.
            </p>
            <div className="flex justify-end items-center mt-2">
              <p className="text-[#3C0792]">Learn More</p>
              <div>
                <HiOutlineArrowLongRight size={40} color="#3C0792" />
              </div>
            </div>
          </div>
          <div className="w-[28%] p-2">
            <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
              <p>Market Research</p>
            </div>
            <p>
              CCK, the most abundant and widely, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Diam volutpat commodo sed egestas egestas fringilla phasellus
              faucibus. Est velit egestas dui id ornare arcu odio ut.
            </p>
            <div className="flex justify-end items-center mt-2">
              <p className="text-[#3C0792]">Learn More</p>
              <div>
                <HiOutlineArrowLongRight size={40} color="#3C0792" />
              </div>
            </div>
          </div>
          <div className="w-[28%] p-2">
            <div className="border pl-4 py-4 rounded-r-full bg-gradient-to-r from-[#3C0792] to-[#C5A1FE] font-seminold text-white text-lg mb-2">
              <p>Market Research</p>
            </div>
            <p>
              CCK, the most abundant and widely, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Diam volutpat commodo sed egestas egestas fringilla phasellus
              faucibus. Est velit egestas dui id ornare arcu odio ut.
            </p>
            <div className="flex justify-end items-center mt-2">
              <p className="text-[#3C0792]">Learn More</p>
              <div>
                <HiOutlineArrowLongRight size={40} color="#3C0792" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#E8DAFF] mt-4 py-16">
        <p className="font-bold text-2xl text-[#3C0792]">
          Content marketing workflow is hard. Gather Content make it easier.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-[50%]">
            <p>
              labore et dolore magna aliqua, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="mt-4">
              labore et dolore magna aliqua, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="rounded-md bg-[#3C0792] px-5 py-2 text-md font-semibold text-white mt-10">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <div className="w-[40%]">
          <p className="font-bold text-3xl text-[#3C0792]">
            Get the content you need in the right format everytime
          </p>
          <p className="mt-4">
            Principle Investigator, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
          <p className="mt-4">
            Principle Investigator, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="w-[40%]">
          <img
            className="h-72 w-full rounded-md"
            src="https://s3-alpha-sig.figma.com/img/fd9c/858a/eb8e8020c2683a820c187b6de684cf3d?Expires=1679875200&Signature=SKlPkMoTDfVV7qtjORO-lw9XWhPWxK0JqkvFuDvkAe-yxGlObsmdtOglEECWNEOjG2rewN2-pXwdWeLC-wr8qQbgb~3--VhB6pKjW2UJDVGwL4qsm~vLmEddNj0whTa0qvKN7jArdsKWZDceFH8t4eZU3RWAC4qEPEqxUck0IRMPyW8zF0STIA02XkSML4m7kx4HNQ4WNY~fTQNnvjxslVgvbhU4pifz0IcThAAvVNJ3pX5n6aJNTw6sBRhN1K183XdggesEks3u1Crn7YAdd99WLozX-JRvevjAsJ-HFiLlKJFhBFfaqlLB6h04BJi1W44XoPA4PvbbjyCA3agUEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
          />
        </div>
      </div>

      <div className="mt-10 bg-[#FFF2FB] pt-12 pb-6">
        <div className="flex justify-around">
          <div className="border-r-2 border-[#000000] w-[25%] ">
            <p className="text-center font-semibold text-2xl">
              Principle Investigator
            </p>
            <div className="flex items-center justify-center mt-2">
              <div className="w-[60%]">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full h-36 w-36 center mt-4"
                    src="https://s3-alpha-sig.figma.com/img/2d19/c434/0efe498b2d23bc2d8b67ad4519827ac6?Expires=1679875200&Signature=qEy1Rzdr5dDytP4YjUmtSse3ge7ZXmu5Q4tZFZY2vPq5HCJvey~~86JF1RHaqqxbpBnDb2qDkr3Z~N6wEknDauL7Um~sihSceLu7GLNCiEX-1ntunvTDWLeZS1xZXmVCZAYAfEot-gyJ~PiWWPwua4EurMpxXyM8WeregXHAWpweQMwfba8Xnl5wriIxE0S7dxcGNoCeuKLUgTFmaWy558Ar7tLLZPgVlPmuB4rgU1boGsayorICSrwXU84v01-mdhKUZSYTe-Jp9RW-AaLWEXF4J3juJaEDdmzV~T~rhMyffoyWBM2tzaIPAfQOhII5bNQIESkoae4lnWZoGLtOFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="border rounded-2xl bg-[#ffffff] text-center mt-4 p-2">
                  <p className="font-bold">Lorem Impush </p>
                  <p>2020-persent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70%]">
            <p className="text-center font-semibold text-2xl">Phd Students</p>
            <div className="flex items-center justify-around mt-2">
              <div className="w-[25%]">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full h-36 w-36 center mt-4"
                    src="https://s3-alpha-sig.figma.com/img/2d19/c434/0efe498b2d23bc2d8b67ad4519827ac6?Expires=1679875200&Signature=qEy1Rzdr5dDytP4YjUmtSse3ge7ZXmu5Q4tZFZY2vPq5HCJvey~~86JF1RHaqqxbpBnDb2qDkr3Z~N6wEknDauL7Um~sihSceLu7GLNCiEX-1ntunvTDWLeZS1xZXmVCZAYAfEot-gyJ~PiWWPwua4EurMpxXyM8WeregXHAWpweQMwfba8Xnl5wriIxE0S7dxcGNoCeuKLUgTFmaWy558Ar7tLLZPgVlPmuB4rgU1boGsayorICSrwXU84v01-mdhKUZSYTe-Jp9RW-AaLWEXF4J3juJaEDdmzV~T~rhMyffoyWBM2tzaIPAfQOhII5bNQIESkoae4lnWZoGLtOFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="border rounded-2xl bg-[#ffffff] text-center mt-4 p-2">
                  <p className="font-bold">Lorem Impush </p>
                  <p>2020-persent</p>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full h-36 w-36 center mt-4"
                    src="https://s3-alpha-sig.figma.com/img/2d19/c434/0efe498b2d23bc2d8b67ad4519827ac6?Expires=1679875200&Signature=qEy1Rzdr5dDytP4YjUmtSse3ge7ZXmu5Q4tZFZY2vPq5HCJvey~~86JF1RHaqqxbpBnDb2qDkr3Z~N6wEknDauL7Um~sihSceLu7GLNCiEX-1ntunvTDWLeZS1xZXmVCZAYAfEot-gyJ~PiWWPwua4EurMpxXyM8WeregXHAWpweQMwfba8Xnl5wriIxE0S7dxcGNoCeuKLUgTFmaWy558Ar7tLLZPgVlPmuB4rgU1boGsayorICSrwXU84v01-mdhKUZSYTe-Jp9RW-AaLWEXF4J3juJaEDdmzV~T~rhMyffoyWBM2tzaIPAfQOhII5bNQIESkoae4lnWZoGLtOFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="border rounded-2xl bg-[#ffffff] text-center mt-4 p-2">
                  <p className="font-bold">Lorem Impush </p>
                  <p>2020-persent</p>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full h-36 w-36 center mt-4"
                    src="https://s3-alpha-sig.figma.com/img/2d19/c434/0efe498b2d23bc2d8b67ad4519827ac6?Expires=1679875200&Signature=qEy1Rzdr5dDytP4YjUmtSse3ge7ZXmu5Q4tZFZY2vPq5HCJvey~~86JF1RHaqqxbpBnDb2qDkr3Z~N6wEknDauL7Um~sihSceLu7GLNCiEX-1ntunvTDWLeZS1xZXmVCZAYAfEot-gyJ~PiWWPwua4EurMpxXyM8WeregXHAWpweQMwfba8Xnl5wriIxE0S7dxcGNoCeuKLUgTFmaWy558Ar7tLLZPgVlPmuB4rgU1boGsayorICSrwXU84v01-mdhKUZSYTe-Jp9RW-AaLWEXF4J3juJaEDdmzV~T~rhMyffoyWBM2tzaIPAfQOhII5bNQIESkoae4lnWZoGLtOFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="border rounded-2xl bg-[#ffffff] text-center mt-4 p-2">
                  <p className="font-bold">Lorem Impush </p>
                  <p>2020-persent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="rounded-lg bg-[#3C0792] w-36 py-2 text-md font-semibold text-white mt-10 border border-[#3C0792]">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
